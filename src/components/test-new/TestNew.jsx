import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import TestForm from './TestForm';

const SAMPLE_JSON = `{
  "key1": "value1",
  "key2": "value2",
  "key3": "value3",
}
`;

function TestNew() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [requestBody, setRequestBody] = useState({ value: SAMPLE_JSON, caret: -1, target: null });
  const [headers, setHeaders] = useState({});
  const [assertions, setAssertions] = useState([]);
  const [regions, setRegions] = useState([]);
  const [minutesBetweenRuns, setMinutesBetweenRuns] = useState(1);
  const [alertChannels, setAlertChannels] = useState([]);

  return (
    <div>
      <TestForm
        mode="create"
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
      />
    </div>
  );
}

export default TestNew;
