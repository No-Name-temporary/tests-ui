import { React, useState } from 'react';
import TextInput from '../../shared/TextInput';

function NewHeaderRow({ headers, setHeaders }) {
  const [headerKey, setHeaderKey] = useState('');
  const [headerValue, setHeaderValue] = useState('');

  const handleNewHeaderKey = (e) => {
    setHeaderKey(e.target.value);
  };

  const handleNewHeaderValue = (e) => {
    setHeaderValue(e.target.value);
  };

  const handleNewHeaderSubmit = () => {
    const headersCopy = { ...headers };
    headersCopy[headerKey] = headerValue;
    setHeaders(headersCopy);
    setHeaderKey('');
    setHeaderValue('');
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
      <td className="pl-2 text-heading-h4">
        <div className="grid align-items-end justify-items-end mr-4">
          <button type="button" onClick={handleNewHeaderSubmit}>Add</button>
        </div>
      </td>
    </tr>
  );
}

export default NewHeaderRow;
