import React from 'react';
import AssertionRows from './AssertionRows';

function Assertions({ assertions }) {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900" />
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
            Source
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
            Property
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
            Comparison
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
            Target
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
            Actual
          </th>
        </tr>
      </thead>
      <AssertionRows assertions={assertions} />
    </table>
  );
}

export default Assertions;
