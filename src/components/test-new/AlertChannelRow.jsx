import { React } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAlertChannel } from '../../features/newtest/newtest';
import { camelCaseToDisplayName } from '../../utils/helpers';

function AlertChannelRow({ id, type, destination }) {
  const dispatch = useDispatch();
  const handleDeleteAlertChannel = () => {
    dispatch(deleteAlertChannel(id));
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-primary-700">
        {camelCaseToDisplayName(type)}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-primary-700">
        {destination}
      </td>
      <td>
        <button type="button" className="pl-2" onClick={handleDeleteAlertChannel}>
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

export default AlertChannelRow;
