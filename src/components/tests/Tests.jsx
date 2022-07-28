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

      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Name
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Last 3 results
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Interval
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900" />
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900" />
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900" />
          </tr>
        </thead>
        <TestRows tests={tests} />
      </table>
    </div>
  );
}

export default Tests;
