import { React } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HeaderRow from './HeaderRow';

function HeaderRows({ headers }) {
  if (headers) {
    return (
      <>
        {headers.map((header) => (
          <HeaderRow
            key={uuidv4()}
            headerKey={header[0]}
            headerValue={header[1]}
          />
        ))}
      </>
    );
  }
}

export default HeaderRows;
