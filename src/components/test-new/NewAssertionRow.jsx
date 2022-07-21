import { React, useEffect, useState } from 'react';
import TextSelect from '../shared/TextSelect';
import TextInput from '../shared/TextInput';
import apiClient from '../../services/ApiClient';

function NewAssertionRow() {
  const [assertionTypes, setAssertionTypes] = useState([]);
  const [comparisonTypes, setComparisonTypes] = useState([]);

  const getSideloadsHook = () => {
    const run = async () => {
      try {
        const sideloads = await apiClient.getSideload();
        console.log(sideloads);
        setAssertionTypes(sideloads.assertionTypes);
        setComparisonTypes(sideloads.comparisonTypes);
      } catch (err) {
        console.log(err);
      }
    };
    run();
  };

  useEffect(getSideloadsHook, []);

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextSelect options={assertionTypes} />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextInput type="text" />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextSelect options={comparisonTypes} />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextInput type="text" />
      </td>
      <td>
        Add
      </td>
    </tr>
  );
}

export default NewAssertionRow;
