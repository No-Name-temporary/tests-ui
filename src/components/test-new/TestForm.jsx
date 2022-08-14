import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AssertionsInput from './assertions-input/AssertionsInput';
import LocationsInput from './locations-input/LocationsInput';
import TextBlockInput from './text-block-input/TextBlockInput';
import { fetchSideloads } from '../../features/sideloads/sideloads';
import FrequencyInput from './frequency-input/FrequencyInput';
import AlertChannelsInput from './alert-channels-input/AlertChannelsInput';
import Button from '../shared/Button';
import HeadersInput from './headers-input/HeadersInput';
import NameInput from './NameInput';
import MethodInput from './MethodInput';
import UrlInput from './UrlInput';

function TestForm({
  mode,
  heading,
  title,
  setTitle,
  method,
  setMethod,
  url,
  setUrl,
  requestBody,
  setRequestBody,
  headers,
  setHeaders,
  assertions,
  setAssertions,
  regions,
  setRegions,
  minutesBetweenRuns,
  setMinutesBetweenRuns,
  alertChannels,
  setAlertChannels,
  handleSubmitForm,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSideloads());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-8 pb-20">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold text-heading-h2 mb-3">
            {heading}
          </h2>
        </div>
      </div>
      <NameInput mode={mode} title={title} setTitle={setTitle} />
      <h3 className="text-1xl font-bold text-heading-h3 pt-6">HTTP request</h3>

      <div className="flex py-2">
        <MethodInput method={method} setMethod={setMethod} />
        <UrlInput url={url} setUrl={setUrl} />
      </div>

      <TextBlockInput requestBody={requestBody} setRequestBody={setRequestBody} label="Body" placeholder="JSON goes here" name="test_name" id="test_name" />
      <HeadersInput headers={headers} setHeaders={setHeaders} />
      <AssertionsInput assertions={assertions} setAssertions={setAssertions} />
      <LocationsInput locations={regions} setLocations={setRegions} />
      <FrequencyInput
        minutesBetweenRuns={minutesBetweenRuns}
        setMinutesBetweenRuns={setMinutesBetweenRuns}
      />
      <AlertChannelsInput alertChannels={alertChannels} setAlertChannels={setAlertChannels} />
      <div className="mt-5 flex text-tertiary-900">
        <Button onClick={handleSubmitForm} message="Save" save />
      </div>
    </div>
  );
}

export default TestForm;
