import { React } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAlertChannel } from '../../../features/newtest/newtest';
import { camelCaseToDisplayName } from '../../../utils/helpers';
import Garbage from '../../../assets/images/icons/garbage_can_slate.png';

function AlertChannelRow({ id, type, destination }) {
  const dispatch = useDispatch();
  const handleDeleteAlertChannel = () => {
    dispatch(deleteAlertChannel(id));
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
        {camelCaseToDisplayName(type)}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
        {destination}
      </td>
      <td>
        <div className="grid align-items-end justify-items-end mr-4">
          <button type="button" className="pl-2" onClick={handleDeleteAlertChannel}>
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

export default AlertChannelRow;
