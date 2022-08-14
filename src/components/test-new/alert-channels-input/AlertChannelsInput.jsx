import { React } from 'react';
// import { useSelector } from 'react-redux';
import AlertChannelRows from './AlertChannelRows';
import NewAlertChannelRow from './NewAlertChannelRow';

function AlertChannelsInput({ alertChannels, setAlertChannels }) {
  // const alertChannels = useSelector((state) => state.newtest.alertChannels);

  return (
    <div className="mt-8 flex flex-col">
      <h2 className="text-1xl font-bold text-heading-h2">Alert Channels</h2>
      <table className="min-w-full divide-y divide-slate-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Type
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label">
              Destination
            </th>
            <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-table-label" />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <AlertChannelRows alertChannels={alertChannels} setAlertChannels={setAlertChannels} />
          <NewAlertChannelRow alertChannels={alertChannels} setAlertChannels={setAlertChannels} />
        </tbody>

      </table>
    </div>

  );
}

export default AlertChannelsInput;
