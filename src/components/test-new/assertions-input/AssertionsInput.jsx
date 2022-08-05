import { React } from 'react';
import { useSelector } from 'react-redux';
import AssertionRows from './AssertionRows';
import NewAssertionRow from './NewAssertionRow';

function AssertionsInput() {
  const assertions = useSelector((state) => state.newtest.httpRequest.assertions);

  return (
    <div className="mt-8 flex flex-col">
      <h2 className="text-label-input">Assertions</h2>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-label-column">
              Source
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-label-column">
              Property
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-label-column">
              Comparison
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-label-column">
              Target
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-label-column" />
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-label-column" />
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <AssertionRows assertions={assertions} />
          <NewAssertionRow />
        </tbody>

      </table>
    </div>
  );
}

export default AssertionsInput;