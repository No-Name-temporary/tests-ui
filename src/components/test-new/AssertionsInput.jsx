import { React } from 'react';
import { useSelector } from 'react-redux';
import AssertionRows from './AssertionRows';
import NewAssertionRow from './NewAssertionRow';

function AssertionsInput() {
  const assertions = useSelector((state) => state.newtest.httpRequest.assertions);

  const keyValueToAssertion = (key, value) => ({
    key: `${key}${value.comparison}${value.target}`,
    source: key,
    property: value.property,
    comparison: value.comparison,
    target: value.target,
  });

  const assertionsToArray = (assertions) => {
    const parsed = [];
    const keys = Object.keys(assertions);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = assertions[key];
      if (!Array.isArray(value)) {
        parsed.push(keyValueToAssertion(key, value));
      } else {
        value.forEach((a) => {
          parsed.push(keyValueToAssertion(key, a));
        });
      }
    }
    return parsed;
  };

  const assertionsArr = assertionsToArray(assertions);

  return (
    <div className="mt-8 flex flex-col">
      <h2>Assertions</h2>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Source
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Property
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Comparison
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Target
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900" />
          </tr>
        </thead>
        <AssertionRows assertions={assertionsArr} />
        <NewAssertionRow />
      </table>
    </div>
  );
}

export default AssertionsInput;
