import React from 'react';
import { camelCaseToDisplayName } from '../../../utils/helpers';
import Garbage from '../../../assets/images/icons/garbage_can_slate.png';

function AssertionRow({
  id, type, property, comparison, target, assertions, setAssertions,
}) {
  const handleDeleteAssertion = () => {
    const assertionsCopy = assertions.filter((assertion) => assertion.id !== id);
    setAssertions(assertionsCopy);
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm">
        {camelCaseToDisplayName(type)}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm">
        {property}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm">
        {camelCaseToDisplayName(comparison)}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm">
        {target}
        {' '}
        {type === 'responseTime' ? 'ms' : ''}
      </td>
      <td />
      <td>
        <div className="grid align-items-end justify-items-end mr-4">
          <button type="button" className="pl-2" onClick={handleDeleteAssertion}>
            <img
              className="h-6 w-auto"
              src={Garbage}
              alt="NoName"
            />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default AssertionRow;
