import { React } from 'react';
import { useSelector } from 'react-redux';
import AlertChannelRows from './AlertChannelRows';
import NewAlertChannelRow from './NewAlertChannelRow';

function AlertChannelsInput() {
  const alertChannels = useSelector((state) => state.newtest.alertChannels);

  return (
    <div className="mt-8 flex flex-col">
      <h2>Alert Channels</h2>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Type
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Destination
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900" />
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <AlertChannelRows alertChannels={alertChannels} />
          <NewAlertChannelRow />
        </tbody>

      </table>
    </div>

  );
}

export default AlertChannelsInput;
