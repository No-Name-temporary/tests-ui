import { React, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../../services/ApiClient';
import TestForm from '../test-new/TestForm';

const SAMPLE_JSON = `{
  "key1": "value1",
  "key2": "value2",
  "key3": "value3",
}
`;

function TestEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');
  const [requestBody, setRequestBody] = useState({ value: SAMPLE_JSON, caret: -1, target: null });
  const [headers, setHeaders] = useState({});
  const [assertions, setAssertions] = useState([]);
  const [regions, setRegions] = useState([]);
  const [minutesBetweenRuns, setMinutesBetweenRuns] = useState(1);
  const [alertChannels, setAlertChannels] = useState([]);

  const getTestHook = () => {
    const run = async () => {
      try {
        const data = await apiClient.getTest({ id });
        setTitle(data.test.title);
        setMethod(data.test.httpRequest.method);
        setUrl(data.test.httpRequest.url);
        setRequestBody({
          value: JSON.stringify(data.test.httpRequest.body),
          caret: -1,
          target: null,
        });
        setHeaders(data.test.httpRequest.headers);
        setAssertions(data.test.httpRequest.assertions);
        setRegions(data.test.locations);
        setMinutesBetweenRuns(data.test.minutesBetweenRuns);
        setAlertChannels(data.test.alertChannels);
      } catch (err) {
        console.log(err);
      }
    };
    run();
  };

  useEffect(getTestHook, []);

  const createTestConfiguration = () => ({
    title,
    locations: regions,
    minutesBetweenRuns,
    type: 'api',
    httpRequest: {
      method,
      url,
      headers,
      body: requestBody.value,
      assertions,
    },
    alertChannels,
  });

  const handleSaveTest = () => {
    apiClient.editTest({ test: createTestConfiguration() }, id);
    navigate('/tests');
  };

  return (
    <div>
      <TestForm
        mode="create"
        heading="Edit a test"
        title={title}
        setTitle={setTitle}
        method={method}
        setMethod={setMethod}
        url={url}
        setUrl={setUrl}
        requestBody={requestBody}
        setRequestBody={setRequestBody}
        headers={headers}
        setHeaders={setHeaders}
        assertions={assertions}
        setAssertions={setAssertions}
        regions={regions}
        setRegions={setRegions}
        minutesBetweenRuns={minutesBetweenRuns}
        setMinutesBetweenRuns={setMinutesBetweenRuns}
        alertChannels={alertChannels}
        setAlertChannels={setAlertChannels}
        handleSubmitForm={handleSaveTest}
      />
    </div>
  );
}

export default TestEdit;
