import React from 'react';
import AssertionRows from './AssertionRows';

function Assertions({ assertions }) {
  return (
    <table className="min-w-full divide-y divide-slate-300">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label" />
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
            Source
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
            Property
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
            Comparison
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
            Target
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
            Actual
          </th>
        </tr>
      </thead>
      <AssertionRows assertions={assertions} />
    </table>
  );
}

export default Assertions;
