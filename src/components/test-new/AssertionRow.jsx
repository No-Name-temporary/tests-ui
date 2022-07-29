import { React } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAssertion } from '../../features/newtest/newtest';
import { camelCaseToDisplayName } from '../../utils/helpers';

function AssertionRow({
  id, type, property, comparison, target,
}) {
  const dispatch = useDispatch();

  const handleDeleteAssertion = () => {
    dispatch(deleteAssertion(id));
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {camelCaseToDisplayName(type)}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {property}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {camelCaseToDisplayName(comparison)}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {target}
        {' '}
        {type === 'responseTime' ? 'ms' : ''}
      </td>
      <td />
      <td>
        <button type="button" className="pl-2" onClick={handleDeleteAssertion}>
          <img
            className="h-6 w-auto"
            src="https://img.icons8.com/external-others-iconmarket/344/external-delete-essential-others-iconmarket-3.png"
            alt="NoName"
          />
        </button>
      </td>
    </tr>
  );
}

export default AssertionRow;
