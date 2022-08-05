import { React } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAssertion } from '../../../features/newtest/newtest';
import { camelCaseToDisplayName } from '../../../utils/helpers';
import Garbage from '../../../assets/images/icons/garbage_can_slate.png';

function AssertionRow({
  id, type, property, comparison, target,
}) {
  const dispatch = useDispatch();

  const handleDeleteAssertion = () => {
    dispatch(deleteAssertion(id));
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
        <button type="button" className="pl-2" onClick={handleDeleteAssertion}>
          <img
            className="h-6 w-auto"
            src={Garbage}
            alt="NoName"
          />
        </button>
      </td>
    </tr>
  );
}

export default AssertionRow;
