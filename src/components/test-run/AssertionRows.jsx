import React from 'react';
import AssertionRow from './AssertionRow';

function AssertionRows({ assertions }) {
  if (assertions) {
    return (
      <tbody className="divide-y divide-primary-200">
        {assertions.map((assertion) => (
          <AssertionRow key={assertion.id} assertion={assertion} />
        ))}
      </tbody>
    );
  }
}

export default AssertionRows;
