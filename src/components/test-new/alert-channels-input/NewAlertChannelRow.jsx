import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TextSelect from '../../shared/TextSelect';
import TextInput from '../../shared/TextInput';
import { addAlertChannel } from '../../../features/newtest/newtest';

function NewAlertChannelRow({ alertChannels, setAlertChannels }) {
  const dispatch = useDispatch();

  const alertChannelTypes = [
    {
      id: 1, name: 'slack', displayName: 'Slack', value: 'slack',
    },
    {
      id: 2, name: 'discord', displayName: 'Discord', value: 'discord',
    },
    {
      id: 3, name: 'email', displayName: 'Email', value: 'email',
    },
  ];

  const [type, setType] = useState('slack');
  const [destination, setDestination] = useState('');

  const handleNewType = (e) => {
    setType(e.target.value);
  };

  const handleNewDestination = (e) => {
    setDestination(e.target.value);
  };

  const handleNewAlertChannelSubmit = () => {
    setType('slack');
    setDestination('');

    const newAlertChannel = {
      id: uuidv4(), // for assertion lookup and deletion
      type,
      destination,
      alertsOnRecovery: false,
      alertsOnFailure: true,
    };

    const alertChannelsCopy = [...alertChannels];
    alertChannelsCopy.push(newAlertChannel);
    setAlertChannels(alertChannelsCopy);
    // dispatch(addAlertChannel(newAlertChannel));
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-primary-700">
        <TextSelect onChange={handleNewType} options={alertChannelTypes} />
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-primary-700">
        <TextInput
          onChange={handleNewDestination}
          value={destination}
          type="text"
          placeholder="webhook URL or e-mail address"
        />
      </td>
      <td className="text-heading-h4">
        <div className="grid align-items-end justify-items-end mr-4">
          <button type="button" onClick={handleNewAlertChannelSubmit}>Add</button>
        </div>
      </td>
    </tr>
  );
}

export default NewAlertChannelRow;
