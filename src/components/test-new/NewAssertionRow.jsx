import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextSelect from '../shared/TextSelect';
import TextInput from '../shared/TextInput';
import { addAssertion } from '../../features/newtest/newtest';

function NewAssertionRow() {
  const dispatch = useDispatch();

  const assertionTypes = useSelector((state) => state.sideloads.assertionTypes);
  const comparisonTypes = useSelector((state) => state.sideloads.comparisonTypes);

  const [type, setType] = useState('');
  const [property, setProperty] = useState(null);
  const [comparisonType, setComparisonType] = useState(null);
  const [target, setTarget] = useState('');

  const handleNewType = (e) => {
    setType(e.target.value);
  };

  const handlePropertyChange = (e) => {
    setProperty(e.target.value);
  };

  const handleNewComparisonType = (e) => {
    setComparisonType(e.target.value);
  };

  const handleTargetChange = (e) => {
    setTarget(e.target.value);
  };

  const handleNewAssertionSubmit = () => {
    const newAssertion = {
      name: type,
      property,
      comparisonType,
      target,
    };
    dispatch(addAssertion(newAssertion));
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextSelect onChange={handleNewType} options={assertionTypes} />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextInput onChange={handlePropertyChange} type="text" />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextSelect onChange={handleNewComparisonType} options={comparisonTypes} />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextInput onChange={handleTargetChange} type="text" />
      </td>
      <td>
        <button type="button" onClick={handleNewAssertionSubmit}>Add</button>
      </td>
    </tr>
  );
}

export default NewAssertionRow;
