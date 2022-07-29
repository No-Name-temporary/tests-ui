import React from 'react';
import { Link } from 'react-router-dom';
import {
  GARBAGE_CAN, GREEN_CHECK_MARK, LIGHTNING, PENCIL, RED_X,
} from '../../constants/IconUrls';
import apiClient from '../../services/ApiClient';

function TestRow({ test }) {
  const reloadPage = () => {
    window.location.reload();
  };

  const handleDeleteTest = async (testId) => {
    await apiClient.deleteTest(testId);
    reloadPage();
  };

  const handleRunTest = async (testId) => {
    await apiClient.runTestNow(testId);
  };

  return (
    <tr>
      <Link to={`/tests/${test.id}`}>
        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
          {test.name}
        </td>
      </Link>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <div className="flex">
          {test.runs.map((run) => (
            <Link to={`/tests/${run.testId}/runs/${run.id}`}>
              <img
                key={run.id}
                className="h-6 w-auto ml-2"
                src={run.success ? GREEN_CHECK_MARK : RED_X}
                alt="result"
              />
            </Link>
          ))}
        </div>
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {test.minutesBetweenRuns}
        {' '}
        mins
      </td>
      <td>
        <button onClick={() => handleDeleteTest(test.id)} type="button" className="pl-2">
          <img
            className="h-6 w-auto"
            src={GARBAGE_CAN}
            alt="delete"
          />
        </button>

      </td>
      <td>
        <button type="button" className="pl-2">
          <img
            className="h-6 w-auto"
            src={PENCIL}
            alt="edit"
          />
        </button>
      </td>
      <td>
        <button onClick={() => handleRunTest(test.id)} type="button" className="pl-2">
          <img
            className="h-6 w-auto"
            src={LIGHTNING}
            alt="run now"
          />
        </button>
      </td>
    </tr>
  );
}

export default TestRow;
