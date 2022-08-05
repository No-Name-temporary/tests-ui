import { React } from 'react';
import { useDispatch } from 'react-redux';
import { deleteHeader } from '../../../features/newtest/newtest';

function HeaderRow({ headerKey, headerValue }) {
  const dispatch = useDispatch();
  const handleDeleteHeader = () => {
    dispatch(deleteHeader(headerKey));
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {headerKey}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {headerValue}
      </td>
      <td>
        <button type="button" className="pl-2" onClick={handleDeleteHeader}>
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

export default HeaderRow;
