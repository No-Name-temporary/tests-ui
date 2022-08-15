import React from 'react';
import AssertionRow from './AssertionRow';

function AssertionRows({ assertions, setAssertions }) {
  if (assertions) {
    return (
      <>
        {assertions.map((assertion) => (
          <AssertionRow
            key={assertion.id}
            id={assertion.id}
            type={assertion.type}
            property={assertion.property}
            comparison={assertion.comparison}
            target={assertion.target}
            assertions={assertions}
            setAssertions={setAssertions}
          />
        ))}
      </>
    );
  }
}

export default AssertionRows;
