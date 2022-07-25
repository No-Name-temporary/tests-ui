import React from 'react';
import AssertionRow from './AssertionRow';

function AssertionRows({ assertions }) {
  if (assertions) {
    return (
      <tbody className="divide-y divide-gray-200">
        {assertions.map((assertion) => (
          <AssertionRow
            key={assertion.id}
            id={assertion.id}
            type={assertion.type}
            property={assertion.property}
            comparison={assertion.comparison}
            target={assertion.target}
          />
        ))}
      </tbody>
    );
  }
}

export default AssertionRows;
