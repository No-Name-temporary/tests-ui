import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../services/ApiClient';
import TestForm from './TestForm';

const SAMPLE_JSON = `{
  "key1": "value1",
  "key2": "value2",
  "key3": "value3",
}
`;

function TestNew() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');
  const [requestBody, setRequestBody] = useState({ value: SAMPLE_JSON, caret: -1, target: null });
  const [headers, setHeaders] = useState({});
  const [assertions, setAssertions] = useState([]);
  const [regions, setRegions] = useState([]);
  const [minutesBetweenRuns, setMinutesBetweenRuns] = useState(1);
  const [alertChannels, setAlertChannels] = useState([]);

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
    apiClient.createTest({ test: createTestConfiguration() });
    navigate('/tests');
  };

  return (
    <div>
      <TestForm
        mode="create"
        heading="Create new test"
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

export default TestNew;
