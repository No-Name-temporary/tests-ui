import { React } from 'react';
import { GREEN_CHECK_MARK, RED_X } from '../../constants/IconUrls';

function Table({ testRuns }) {
  return (
    <div className="mt-8 flex flex-col">
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
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {testRuns.map((testRun) => (
            <tr key={testRun.id}>
              <td>
                <div className="w-6 ml-2"><img alt="result" src={testRun.success ? GREEN_CHECK_MARK : RED_X} /></div>
              </td>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                <div className="flex">
                  {testRun.location}
                  <div className="object-contain w-6 ml-2"><img alt="flag" src={testRun.region.flagUrl} /></div>
                </div>
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{testRun.status}</td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                {testRun.responseTimeMs}
                ms
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                {testRun.assertionsPassed}
                /
                {testRun.assertions}
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{testRun.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
