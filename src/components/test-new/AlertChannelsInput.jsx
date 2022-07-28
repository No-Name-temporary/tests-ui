import { React } from 'react';
import { useDispatch } from 'react-redux';

function AlertChannelsInput() {
  return (
    <div className="mt-8">
      <h2>Alert Channels</h2>
      {/* <div className="mt-4 flex">
          <div>
            <TextSelect onChange={handleIntervalUnitsSelect} options={frequencyOptions} />
          </div>
        </div> */}
    </div>
  );
}

export default AlertChannelsInput;
