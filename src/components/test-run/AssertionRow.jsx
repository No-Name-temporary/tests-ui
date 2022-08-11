import React from 'react';
import {
  GREEN_CHECK_MARK, RED_X,
} from '../../constants/IconUrls';
import { camelCaseToDisplayName, shortenString } from '../../utils/helpers';

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
      <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
        {camelCaseToDisplayName(assertion.type)}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
        {assertion.property}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
        {camelCaseToDisplayName(assertion.comparison)}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
        {assertion.expectedValue}
        {' '}
        {assertion.type === 'responseTime' ? 'ms' : ''}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
        {shortenString(String(assertion.actualValue), 40)}
        {' '}
        {assertion.type === 'responseTime' ? 'ms' : ''}
      </td>
    </tr>
  );
}

export default AssertionRow;
