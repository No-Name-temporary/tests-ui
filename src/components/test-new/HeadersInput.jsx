import { React } from 'react';
import { useSelector } from 'react-redux';
import HeaderRows from './HeaderRows';
import NewHeaderRow from './NewHeaderRow';

function HeadersInput() {
  const headers = useSelector((state) => state.newtest.headers);

  return (
    <div className="mt-8 flex flex-col">
      <h2>Headers</h2>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              My-X-Header
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Value
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900" />
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <HeaderRows headers={headers} />
          <NewHeaderRow />
        </tbody>
      </table>
    </div>
  );
}

export default HeadersInput;
