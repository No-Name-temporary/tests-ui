import React from 'react';
import AssertionRow from './AssertionRow';

function AssertionRows({ assertions }) {
  if (assertions) {
    return (
      <tbody className="divide-y divide-gray-200">
        {assertions.map((assertion) => (
          <AssertionRow assertion={assertion} />
        ))}
      </tbody>
    );
  }
}

export default AssertionRows;
