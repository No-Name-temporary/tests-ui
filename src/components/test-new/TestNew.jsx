import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../services/ApiClient';
import TestForm from './TestForm';

function TestNew() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');
  const [requestBody, setRequestBody] = useState({ value: '', caret: -1, target: null });
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
      body: JSON.parse(requestBody.value || '{}'),
      assertions,
    },
    alertChannels,
  });

  const handleSaveTest = () => {
    const testConfiguration = createTestConfiguration();
    apiClient.createTest({ test: testConfiguration });
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
