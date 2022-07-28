import React from 'react';
import AlertChannelRow from './AlertChannelRow';

function AlertChannelRows({ alertChannels }) {
  console.log('ALERT CHANNELS >>', alertChannels);
  if (alertChannels) {
    return (
      <>
        {alertChannels.map((alertChannel) => (
          <AlertChannelRow
            type={alertChannel.type}
            destination={alertChannel.destination}
          />
        ))}
      </>
    );
  }
}

export default AlertChannelRows;
