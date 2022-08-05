import React from 'react';
import TestRow from './TestRow';

function TestRows({ tests }) {
  if (tests) {
    return (
      <tbody className="divide-y divide-slate-200">
        {tests.map((test) => (
          <TestRow key={test.id} test={test} />
        ))}
      </tbody>
    );
  }
}

export default TestRows;
