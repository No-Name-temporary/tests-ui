import { React } from 'react';
import HeaderRow from './HeaderRow';

function HeaderRows({ headers }) {
  if (headers) {
    return (
      <>
        {headers.map((header) => (
          <HeaderRow
            headerKey={header.key}
            headerValue={header.value}
          />
        ))}
      </>
    );
  }
}

export default HeaderRows;
