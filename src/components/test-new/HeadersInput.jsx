import { React } from 'react';
import { useSelector } from 'react-redux';
import HeaderRows from './HeaderRows';
import NewHeaderRow from './NewHeaderRow';

function HeadersInput() {
  const headers = useSelector((state) => {
    const headersArray = Object.entries(state.newtest.httpRequest.headers);
    return headersArray;
  });

  return (
    <div className="mt-8 flex flex-col">
      <h2>Headers</h2>
      <table className="min-w-full divide-y divide-gray-300">
        <tbody className="divide-y divide-gray-200">
          <HeaderRows headers={headers} />
          <NewHeaderRow />
        </tbody>
      </table>
    </div>
  );
}

export default HeadersInput;
