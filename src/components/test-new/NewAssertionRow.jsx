import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextSelect from '../shared/TextSelect';
import TextInput from '../shared/TextInput';
import { addAssertion } from '../../features/newtest/newtest';

function NewAssertionRow() {
  const dispatch = useDispatch();

  const assertionTypes = useSelector((state) => {
    console.log('assertionTypes: ', state.sideloads.assertionTypes);
    return state.sideloads.assertionTypes;
  });
  const comparisonTypes = useSelector((state) => state.sideloads.comparisonTypes);

  const [type, setType] = useState('responseTime');
  const [property, setProperty] = useState('');
  const [comparisonType, setComparisonType] = useState('equalTo');
  const [target, setTarget] = useState('');

  const handleNewType = (e) => {
    console.log('new type:', e.target.value);
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
    setProperty('');
    setTarget('');

    dispatch(addAssertion(newAssertion));
  };

  const propertyInput = () => {
    if (['body', 'headers'].includes(type)) {
      return <TextInput onChange={handlePropertyChange} type="text" />;
    }
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextSelect onChange={handleNewType} options={assertionTypes} />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        { propertyInput() }
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextSelect onChange={handleNewComparisonType} options={comparisonTypes} />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        <TextInput onChange={handleTargetChange} value={target} type="text" />
      </td>
      <td>
        <button type="button" onClick={handleNewAssertionSubmit}>Add</button>
      </td>
    </tr>
  );
}

export default NewAssertionRow;
