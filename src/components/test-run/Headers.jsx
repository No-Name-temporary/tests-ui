import React from 'react';
import HeaderRows from './HeaderRows';

function Headers({ headers }) {
  return (
    <table className="min-w-full divide-y divide-slate-300">
      <thead>
        <tr>
          <th scope="col" className="py-3 px-3 text-left text-sm font-semibold text-table-label">
            Name
          </th>
          <th scope="col" className="py-3 px-3 text-left text-sm font-semibold text-table-label">
            Value
          </th>
        </tr>
      </thead>
      <HeaderRows headers={Object.entries(headers)} />
    </table>
  );
}

export default Headers;
