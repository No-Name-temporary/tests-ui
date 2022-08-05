import { React } from 'react';
import { useDispatch } from 'react-redux';
import { setMinutesBetweenRuns } from '../../../features/newtest/newtest';
import TextSelect from '../../shared/TextSelect';

const frequencyOptions = [
  { displayName: 'Select value', value: '5' },
  { displayName: '1 minute', value: '1' },
  { displayName: '5 minutes', value: '5' },
  { displayName: '15 minutes', value: '15' },
  { displayName: '30 minutes', value: '30' },
  { displayName: '1 hour', value: '60' },
  { displayName: '3 hours', value: '180' },
  { displayName: '6 hours', value: '360' },
  { displayName: '12 hours', value: '720' },
  { displayName: '1 day', value: '1440' },
  { displayName: '2 days', value: '2880' },
  { displayName: '1 week', value: '10080' },
];

function FrequencyInput() {
  const dispatch = useDispatch();

  const handleIntervalUnitsSelect = async (e) => {
    dispatch(setMinutesBetweenRuns(e.target.value));
  };

  return (
    <div className="mt-8">
      <h3 className="text-heading-h3">Time between test runs?</h3>
      <div className="mt-4 flex">
        <div>
          <TextSelect onChange={handleIntervalUnitsSelect} options={frequencyOptions} />
        </div>
      </div>
    </div>
  );
}

export default FrequencyInput;