import React from 'react';
import AlertChannelRow from './AlertChannelRow';

function AlertChannelRows({ alertChannels }) {
  if (alertChannels) {
    return (
      <>
        {alertChannels.map((alertChannel) => (
          <AlertChannelRow
            key={alertChannel.id}
            id={alertChannel.id}
            type={alertChannel.type}
            destination={alertChannel.destination}
          />
        ))}
      </>
    );
  }
}

export default AlertChannelRows;
