import { React } from 'react';
import { Link } from 'react-router-dom';
import { GREEN_CHECK_MARK, RED_X } from '../../constants/IconUrls';
import { formatDateAndTimeLong } from '../../utils/helpers';

function TestRunsTable({ testRuns }) {
  return (
    <div className="mb-6 flex flex-col">
      <table className="min-w-full divide-y divide-slate-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label" />
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-table-label sm:pl-6 md:pl-0"
            >
              Location
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Status
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Response time
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Assertions passed
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Timestamp
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label" />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {testRuns.map((testRun) => (
            <tr key={testRun.id}>
              <td>
                <div className="w-6 ml-2"><img alt="result" src={testRun.success ? GREEN_CHECK_MARK : RED_X} /></div>
              </td>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-table-label sm:pl-6 md:pl-0">
                <div className="flex items-center">
                  {testRun.regionDisplayName}
                  <div className="object-contain w-6 ml-2"><img alt="flag" src={testRun.regionFlagUrl} /></div>
                </div>
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">{testRun.responseStatus}</td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
                {testRun.responseTime}
                {' '}
                ms
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
                {testRun.assertionsPassedCount}
                /
                {testRun.assertionsTotalCount}
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">{formatDateAndTimeLong(testRun.completedAt)}</td>
              <Link to={`/tests/${testRun.testId}/runs/${testRun.id}`}>
                <td className="whitespace-nowrap py-4 px-3 text-sm text-secondary-800 hover:text-secondary-700">see details</td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestRunsTable;
