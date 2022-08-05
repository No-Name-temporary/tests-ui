import { React } from 'react';
import { useDispatch } from 'react-redux';
import { deleteHeader } from '../../../features/newtest/newtest';
import Garbage from '../../../assets/images/icons/garbage_can_slate.png';

function HeaderRow({ headerKey, headerValue }) {
  const dispatch = useDispatch();
  const handleDeleteHeader = () => {
    dispatch(deleteHeader(headerKey));
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-slate-500">
        {headerKey}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-slate-500">
        {headerValue}
      </td>
      <td>
        <button type="button" className="pl-2" onClick={handleDeleteHeader}>
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

export default HeaderRow;
