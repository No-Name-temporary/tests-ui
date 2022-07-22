import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMinutesBetweenRuns } from '../../features/newtest/newtest';
import TextInput from '../shared/TextInput';
import TextSelect from '../shared/TextSelect';

const unitsOfTime = [
  { displayName: 'minutes' },
  { displayName: 'hours' },
  { displayName: 'days' },
];

function FrequencyInput() {
  const dispatch = useDispatch();

  const [intervalValue, setIntervalValue] = useState(null);
  const [intervalUnits, setIntervalUnits] = useState('minutes');

  const minutes = (value, units) => {
    switch (units) {
      case 'minutes':
        return value;
      case 'hours':
        return Number(value) * 60;
      case 'days':
        return Number(value) * 60 * 24;
      default:
        console.log('Unknown units of time');
    }
  };

  const handleIntervalValueChange = (e) => {
    setIntervalValue(e.target.value);
    dispatch(setMinutesBetweenRuns(
      String(minutes(intervalValue, intervalUnits)),
    ));
  };

  const handleIntervalValueSelect = (e) => {
    setIntervalUnits(e.target.value);
    dispatch(setMinutesBetweenRuns(
      String(minutes(intervalValue, intervalUnits)),
    ));
  };

  return (
    <div className="mt-8">
      <h2>Time between test runs?</h2>
      <div className="mt-4 flex">
        <div className="pr-3">
          <TextInput onChange={handleIntervalValueChange} label="Value" placeholder="#" type="text" name="frequency_value" id="frequency_value" />
        </div>
        <div>
          <TextSelect onChange={handleIntervalValueSelect} label="Units" options={unitsOfTime} />
        </div>
      </div>
    </div>
  );
}

export default FrequencyInput;
