import React from 'react';
import { Link } from 'react-router-dom';
import {
  GREEN_CHECK_MARK, RED_X,
} from '../../constants/IconUrls';
import Pen from '../../assets/images/icons/pen_slate.png';
import Lightning from '../../assets/images/icons/lightning_slate.png';
import GarbageCan from '../../assets/images/icons/garbage_can_slate.png';
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
        <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
          {test.name}
        </td>
      </Link>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
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
      <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
        {test.minutesBetweenRuns}
        {' '}
        {test.minutesBetweenRuns === 1 ? 'min' : 'mins'}
      </td>
      <td>
        <div className="grid align-items-end justify-items-end mr-4">
          <button onClick={() => handleDeleteTest(test.id)} type="button" className="pl-2">
            <img
              className="h-6 w-auto"
              src={GarbageCan}
              alt="delete"
            />
          </button>
        </div>
      </td>
      <td>
        <div className="grid align-items-end justify-items-end mr-4">
          <Link to={`/tests/${test.id}/edit`}>
            <button type="button" className="pl-2">
              <img
                className="h-6 w-auto"
                src={Pen}
                alt="edit"
              />
            </button>
          </Link>
        </div>
      </td>
      <td>
        <div className="grid align-items-end justify-items-end mr-4">
          <button onClick={() => handleRunTest(test.id)} type="button" className="pl-2">
            <img
              className="h-6 w-auto"
              src={Lightning}
              alt="run now"
            />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TestRow;
