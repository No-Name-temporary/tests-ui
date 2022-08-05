import { React } from 'react';
import { useSelector } from 'react-redux';
import AssertionRows from './AssertionRows';
import NewAssertionRow from './NewAssertionRow';

function AssertionsInput() {
  const assertions = useSelector((state) => state.newtest.httpRequest.assertions);

  return (
    <div className="mt-8 flex flex-col">
      <h2 className="text-1xl font-bold text-heading-h2">Assertions</h2>
      <table className="min-w-full divide-y divide-slate-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Source
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Property
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Comparison
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Target
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label" />
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label" />
          </tr>
        </thead>
        <tbody className="divide-y text-table-value divide-slate-200">
          <AssertionRows assertions={assertions} />
          <NewAssertionRow />
        </tbody>

      </table>
    </div>
  );
}

export default AssertionsInput;
