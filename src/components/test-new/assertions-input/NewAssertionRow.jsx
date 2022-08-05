import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TextSelect from '../../shared/TextSelect';
import TextInput from '../../shared/TextInput';
import { addAssertion } from '../../../features/newtest/newtest';

function NewAssertionRow() {
  const dispatch = useDispatch();

  const assertionTypes = useSelector((state) => state.sideloads.assertionTypes);
  const comparisonTypes = useSelector((state) => state.sideloads.comparisons);

  const [type, setType] = useState('responseTime');
  const [property, setProperty] = useState('');
  const [comparisonType, setComparisonType] = useState('equalTo');
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
    setProperty('');
    setTarget('');

    const newAssertion = {
      id: uuidv4(), // for assertion lookup and deletion
      type,
      property,
      comparison: comparisonType,
      target,
    };

    dispatch(addAssertion(newAssertion));
  };

  const propertyInput = () => {
    if (['body', 'header'].includes(type)) {
      return <TextInput onChange={handlePropertyChange} value={property} type="text" />;
    }
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-primary-700">
        <TextSelect onChange={handleNewType} options={assertionTypes} />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-primary-700">
        { propertyInput() }
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-primary-700">
        <TextSelect onChange={handleNewComparisonType} options={comparisonTypes} />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-primary-700">
        <TextInput onChange={handleTargetChange} value={target} type="text" />
      </td>
      <td className="text-sm text-primary-700">
        { type === 'responseTime' ? 'ms' : ''}
      </td>
      <td className="text-label-input">
        <button type="button" onClick={handleNewAssertionSubmit}>Add</button>
      </td>
    </tr>
  );
}

export default NewAssertionRow;
