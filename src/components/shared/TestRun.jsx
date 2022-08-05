import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GREEN_CHECK_MARK, RED_X, STOPWATCH } from '../../constants/IconUrls';
import apiClient from '../../services/ApiClient';
import { formatDateLong } from '../../utils/helpers';
import Assertions from './Assertions';
import Headers from './Headers';
import Body from './Body';

function TestRun() {
  const { testId, runId } = useParams();

  // test data
  const [testName, setTestName] = useState('');
  const [testHttpMethod, setTestHttpMethod] = useState('');
  const [testUrl, setTestUrl] = useState('');
  const [testCreatedAt, setTestCreatedAt] = useState('');

  // test run data
  const [assertions, setAssertions] = useState([]);
  const [regionName, setRegionName] = useState('');
  const [regionDisplayName, setRegionDisplayName] = useState('');
  const [regionFlagUrl, setRegionFlagUrl] = useState('');
  const [completedAt, setCompletedAt] = useState('');
  const [statusCode, setStatusCode] = useState('');
  const [responseTime, setResponseTime] = useState('');
  const [responseBody, setResponseBody] = useState({});
  const [responseHeaders, setResponseHeaders] = useState({});
  const [success, setSuccess] = useState(null);

  const getTestRunHook = () => {
    const run = async () => {
      try {
        const testRunData = await apiClient.getTestRun({ testId, runId });
        setTestName(testRunData.name);
        setTestHttpMethod(testRunData.method);
        setTestUrl(testRunData.url);
        setTestCreatedAt(testRunData.createdAt);
        setAssertions(testRunData.runs[0].assertions);
        setRegionName(testRunData.runs[0].regionName);
        setRegionDisplayName(testRunData.runs[0].regionDisplayName);
        setRegionFlagUrl(testRunData.runs[0].regionFlagUrl);
        setStatusCode(testRunData.runs[0].responseStatus);
        setResponseTime(testRunData.runs[0].responseTime);
        setCompletedAt(testRunData.runs[0].completedAt);
        setResponseBody(testRunData.runs[0].responseBody);
        setResponseHeaders(testRunData.runs[0].responseHeaders);
        setSuccess(testRunData.runs[0].success);
      } catch (err) {
        console.log(err);
      }
    };
    run();
  };

  useEffect(getTestRunHook, []);

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-6">
        <div className="flex items-center">
          <div className="w-6 mr-2">
            <img src={success ? GREEN_CHECK_MARK : RED_X} alt="success" />
          </div>
          <Link to={`/tests/${testId}`}>
            <h1 className="text-3xl font-bold text-primary-900">{testName}</h1>
          </Link>
          <div className="ml-4 text-primary-700">
            {`${success ? 'Passed' : 'Failed'} on ${formatDateLong(completedAt)} from ${regionDisplayName}`}
          </div>
          <div className="w-6 ml-2">
            <img src={regionFlagUrl} alt={regionName} />
          </div>
        </div>
        <div className="pl-8">
          <div className="text-primary-700">
            {testHttpMethod.toUpperCase()}
            {' '}
            {testUrl}
          </div>
          <div className="text-primary-700">
            {`Created on ${formatDateLong(testCreatedAt)}`}
          </div>
        </div>
      </div>
      <div className="justify-between items-center flex">
        <h2 className="text-xl font-bold text-primary-900">Assertions</h2>
        <div className="flex justify-end text-primary-900">
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
              <img src={STOPWATCH} alt="text-primary-700" />
            </div>
          </div>
        </div>
      </div>
      <Assertions assertions={assertions} />
      <div className="justify-between items-center flex mt-6">
        <h2 className="text-xl font-bold text-primary-900">Response Body</h2>
      </div>
      <Body body={responseBody} />
      <div className="justify-between items-center flex mt-6">
        <h2 className="text-xl font-bold text-primary-900">Response Headers</h2>
      </div>
      <Headers headers={responseHeaders} />
    </div>
  );
}

export default TestRun;
