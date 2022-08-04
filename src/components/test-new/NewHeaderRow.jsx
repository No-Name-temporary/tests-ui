import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TextInput from '../shared/TextInput';
import { addHeader } from '../../features/newtest/newtest';

function NewHeaderRow() {
  const dispatch = useDispatch();
  const [headerKey, setHeaderKey] = useState('');
  const [headerValue, setHeaderValue] = useState('');

  const handleNewHeaderKey = (e) => {
    setHeaderKey(e.target.value);
  };

  const handleNewHeaderValue = (e) => {
    setHeaderValue(e.target.value);
  };

  const handleNewHeaderSubmit = () => {
    setHeaderKey('');
    setHeaderValue('');

    const newAlertChannel = {
      id: uuidv4(), // for assertion lookup and deletion
      type,
      destination,
      alertsOnRecovery: false,
      alertsOnFailure: true,
    };

    dispatch(addAlertChannel(newAlertChannel));
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextInput
          onChange={handleNewHeaderKey}
          value={headerKey}
          type="text"
          placeholder="key placeholder"
        />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextInput
          onChange={handleNewHeaderValue}
          value={headerValue}
          type="text"
          placeholder="value placeholder"
        />
      </td>
      <td>
        <button type="button" onClick={handleNewHeaderSubmit}>Add</button>
      </td>
    </tr>
  );
}

export default NewHeaderRow;
