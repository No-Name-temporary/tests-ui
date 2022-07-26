import { React, useEffect, useState } from 'react';
import { GREEN_CHECK_MARK, RED_X, STOPWATCH } from '../../constants/IconUrls';
import apiClient from '../../services/ApiClient';
import { formatDateLong } from '../../utils/helpers';
import Button from '../shared/Button';
import Assertions from './Assertions';

function TestRun() {
  // test data
  const [testName, setTestName] = useState('');
  const [testHttpMethod, setTestHttpMethod] = useState('');
  const [testUrl, setTestUrl] = useState('');
  const [testCreatedAt, setTestCreatedAt] = useState('');

  // test run data
  const [assertions, setAssertions] = useState([]);
  const [location, setLocation] = useState({});
  const [completedAt, setCompletedAt] = useState('');
  const [statusCode, setStatusCode] = useState('');
  const [responseTime, setResponseTime] = useState('');
  const [responseBody, setResponseBody] = useState({});
  const [responseHeaders, setResponseHeaders] = useState({});
  const [success, setSuccess] = useState(null);

  // eslint-disable-next-line arrow-body-style
  const testRunSuccess = (assertions) => {
    return assertions.filter((assertion) => !assertion.success).length === 0;
  };

  const getTestRunHook = () => {
    const run = async () => {
      try {
        const testRunData = await apiClient.getTestRun({ testName: 'sample', testRunId: 12 });
        setTestName(testRunData.name);
        setTestHttpMethod(testRunData.method);
        setTestUrl(testRunData.url);
        setTestCreatedAt(testRunData.testCreatedAt);
        setAssertions(testRunData.assertions);
        setLocation(testRunData.location);
        setStatusCode(testRunData.statusCode);
        setResponseTime(testRunData.responseTime);
        setCompletedAt(testRunData.completedAt);
        setResponseBody(testRunData.responseBody);
        setResponseHeaders(testRunData.responseHeaders);
        setSuccess(testRunSuccess(testRunData.assertions));
      } catch (err) {
        console.log(err);
      }
    };
    run();
  };

  useEffect(getTestRunHook, []);

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex items-center">
        <div className="w-6 mr-2">
          <img src={success ? GREEN_CHECK_MARK : RED_X} alt={location.name} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">{testName}</h1>
        <div className="ml-4 text-gray-400">
          {`${testRunSuccess ? 'Passed' : 'Failed'} on ${formatDateLong(completedAt)} from ${location.displayName}`}
        </div>
        <div className="w-6 ml-2">
          <img src={location.flagUrl} alt={location.name} />
        </div>
      </div>
      <div className="text-gray-400">
        {`Created on ${formatDateLong(testCreatedAt)}`}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          { `${testHttpMethod} ${testUrl}` }
        </div>
        <div className="justify-items-end flex">
          <div>
            {statusCode}
          </div>
          <div className="flex items-center">
            <div className="ml-2">
              {responseTime}
              {' '}
              ms
            </div>
            <div className="w-6 ml-2">
              <img src={STOPWATCH} alt="clock" />
            </div>
          </div>
        </div>
        <div />
      </div>
      <Assertions assertions={assertions} />

    </div>
  );
}

export default TestRun;
