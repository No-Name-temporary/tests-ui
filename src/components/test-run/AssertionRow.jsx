import React from 'react';
import {
  GREEN_CHECK_MARK, RED_X,
} from '../../constants/IconUrls';
import { camelCaseToDisplayName } from '../../utils/helpers';

function AssertionRow({ assertion }) {
  return (
    <tr>
      <td>
        <img
          className="h-6 w-auto"
          src={assertion.success ? GREEN_CHECK_MARK : RED_X}
          alt="result"
        />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {camelCaseToDisplayName(assertion.type)}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {assertion.property}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {camelCaseToDisplayName(assertion.comparison)}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {assertion.expectedValue}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {assertion.actualValue}
      </td>
    </tr>
  );
}

export default AssertionRow;
