import { React } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HeaderRow from './HeaderRow';

function HeaderRows({ headers, setHeaders }) {
  if (headers) {
    return (
      <>
        {Object.keys(headers).map((headerKey) => (
          <HeaderRow
            key={uuidv4()}
            headers={headers}
            setHeaders={setHeaders}
            headerKey={headerKey}
            headerValue={headers[headerKey]}
          />
        ))}
      </>
    );
  }
}

export default HeaderRows;
