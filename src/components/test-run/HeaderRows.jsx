import React from 'react';
import HeaderRow from './HeaderRow';

function HeaderRows({ headers }) {
  if (headers) {
    return (
      <tbody className="divide-y divide-gray-200">
        {headers.map((header, index) => (
          <HeaderRow header={header} headerNum={index} />
        ))}
      </tbody>
    );
  }
}

export default HeaderRows;
