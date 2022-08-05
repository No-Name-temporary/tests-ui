import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../services/ApiClient';
import Button from '../shared/Button';
import TestRows from './TestRows';
import { sortTestsAndTestRuns } from '../../utils/helpers';

function Tests() {
  const [tests, setTests] = useState([]);

  const getTestsHook = () => {
    const run = async () => {
      try {
        const testsData = await apiClient.getTests();
        setTests(sortTestsAndTestRuns(testsData.tests));
      } catch (err) {
        console.log(err);
      }
    };
    run();
  };

  useEffect(getTestsHook, []);

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex justify-end">
        <div>
          <Link to="/tests/new">
            <Button message="Create test" />
          </Link>
        </div>
      </div>

      <table className="min-w-full divide-y divide-slate-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Name
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Last 3 results
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Interval
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label" />
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label" />
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label" />
          </tr>
        </thead>
        <TestRows tests={tests} />
      </table>
    </div>
  );
}

export default Tests;
