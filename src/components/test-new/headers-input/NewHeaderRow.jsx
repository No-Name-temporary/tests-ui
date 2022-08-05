import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../../shared/TextInput';
import { addHeader } from '../../../features/newtest/newtest';

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

    const newHeader = {
      headerKey,
      headerValue,
    };

    dispatch(addHeader(newHeader));
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm">
        <TextInput
          onChange={handleNewHeaderKey}
          value={headerKey}
          type="text"
          placeholder="X-My-Header"
        />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm">
        <TextInput
          onChange={handleNewHeaderValue}
          value={headerValue}
          type="text"
          placeholder="Value"
        />
      </td>
      <td className="text-heading-h4">
        <button type="button" onClick={handleNewHeaderSubmit}>Add</button>
      </td>
    </tr>
  );
}

export default NewHeaderRow;
