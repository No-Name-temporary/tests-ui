import { React } from 'react';
import { Link } from 'react-router-dom';
import { GREEN_CHECK_MARK, RED_X } from '../../constants/IconUrls';

function TestRunsTable({ testRuns }) {
  return (
    <div className="flex flex-col">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900" />
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
            >
              Location
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Status
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Response time
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Assertions passed
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Timestamp
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900" />
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {testRuns.map((testRun) => (
            <tr key={testRun.id}>
              <td>
                <div className="w-6 ml-2"><img alt="result" src={testRun.success ? GREEN_CHECK_MARK : RED_X} /></div>
              </td>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                <div className="flex items-center">
                  {testRun.regionDisplayName}
                  <div className="object-contain w-6 ml-2"><img alt="flag" src={testRun.regionFlagUrl} /></div>
                </div>
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{testRun.responseStatus}</td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                {testRun.responseTime}
                ms
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                {testRun.assertionsPassedCount}
                /
                {testRun.assertionsTotalCount}
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{testRun.completedAt}</td>
              <Link to={`/tests/${testRun.testId}/runs/${testRun.id}`}>
                <td className="whitespace-nowrap py-4 px-3 text-sm text-sky-600 hover:text-sky-700">see details</td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestRunsTable;
