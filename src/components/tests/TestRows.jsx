import React from 'react';
import TestRow from './TestRow';

function TestRows({ tests }) {
  console.log('tests: ', tests);

  if (tests) {
    return (
      <tbody className="divide-y divide-gray-200">
        {tests.map((test) => (
          <TestRow test={test} />
        ))}
      </tbody>
    );
  }
}

export default TestRows;
