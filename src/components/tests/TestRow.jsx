import React from 'react';

function TestRow({ test }) {
  console.log('test: ', test);
  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {test.name}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        last 3 results
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {test.minutesBetweenRuns}
        {' '}
        mins
      </td>
      <td>
        <button type="button" className="pl-2">
          <img
            className="h-6 w-auto"
            src="https://img.icons8.com/external-others-iconmarket/344/external-delete-essential-others-iconmarket-3.png"
            alt="NoName"
          />
        </button>
      </td>
      <td>
        <button type="button" className="pl-2">
          <img
            className="h-6 w-auto"
            src="https://img.icons8.com/ios/2x/edit.png"
            alt="NoName"
          />
        </button>
      </td>
      <td>
        <button type="button" className="pl-2">
          <img
            className="h-6 w-auto"
            src="https://img.icons8.com/ios/2x/lightning-bolt.png"
            alt="NoName"
          />
        </button>
      </td>
    </tr>
  );
}

export default TestRow;
