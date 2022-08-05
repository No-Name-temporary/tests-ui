import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import HeaderRow from './HeaderRow';

function HeaderRows({ headers }) {
  if (headers) {
    return (
      <tbody className="divide-y divide-primary-200">
        {headers.map((header, index) => (
          <HeaderRow key={uuidv4()} header={header} headerNum={index} />
        ))}
      </tbody>
    );
  }
}

export default HeaderRows;
