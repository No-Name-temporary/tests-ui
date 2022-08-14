import React from 'react';
import AlertChannelRow from './AlertChannelRow';

function AlertChannelRows({ alertChannels, setAlertChannels }) {
  if (alertChannels) {
    return (
      <>
        {alertChannels.map((alertChannel) => (
          <AlertChannelRow
            key={alertChannel.id}
            id={alertChannel.id}
            type={alertChannel.type}
            destination={alertChannel.destination}
            alertChannels={alertChannels}
            setAlertChannels={setAlertChannels}
          />
        ))}
      </>
    );
  }
}

export default AlertChannelRows;
