import React from 'react';
import HeaderRows from './HeaderRows';
import NewHeaderRow from './NewHeaderRow';

function HeadersInput({ headers, setHeaders }) {
  return (
    <div className="mt-8 flex flex-col">
      <h4 className="text-heading-h4">Headers</h4>
      <table className="min-w-full divide-y divide-slate-300">
        <tbody className="divide-y divide-slate-200">
          <HeaderRows headers={headers} setHeaders={setHeaders} />
          <NewHeaderRow headers={headers} setHeaders={setHeaders} />
        </tbody>
      </table>
    </div>
  );
}

export default HeadersInput;
