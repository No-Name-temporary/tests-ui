import { React } from 'react';
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

function FrequencyInput({ minutesBetweenRuns, setMinutesBetweenRuns }) {
  const handleSetMinutesBetweenRuns = async (e) => {
    setMinutesBetweenRuns(e.target.value);
  };

  return (
    <div className="mt-8">
      <h2 className="text-1xl font-bold text-heading-h2">Time between test runs?</h2>
      <div className="mt-4 flex">
        <div>
          <TextSelect
            onChange={handleSetMinutesBetweenRuns}
            options={frequencyOptions}
            selected={minutesBetweenRuns}
          />
        </div>
      </div>
    </div>
  );
}

export default FrequencyInput;
