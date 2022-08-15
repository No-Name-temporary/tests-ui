import { React } from 'react';
import Garbage from '../../../assets/images/icons/garbage_can_slate.png';

function HeaderRow({
  headerKey, headerValue, headers, setHeaders,
}) {
  const handleDeleteHeader = () => {
    const headersCopy = { ...headers };
    delete headersCopy[headerKey];
    setHeaders(headersCopy);
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
        {headerKey}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-table-value">
        {headerValue}
      </td>
      <td>
        <div className="grid align-items-end justify-items-end mr-4">
          <button type="button" className="pl-2" onClick={handleDeleteHeader}>
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

export default HeaderRow;
