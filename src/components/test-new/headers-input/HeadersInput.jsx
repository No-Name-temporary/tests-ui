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
      <h4 className="text-heading-h4">Headers</h4>
      <table className="min-w-full divide-y divide-slate-300">
        <tbody className="divide-y divide-slate-200">
          <HeaderRows headers={headers} />
          <NewHeaderRow />
        </tbody>
      </table>
    </div>
  );
}

export default HeadersInput;
