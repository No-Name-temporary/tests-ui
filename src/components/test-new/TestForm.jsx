import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TextSelect from '../shared/TextSelect';
import TextInput from '../shared/TextInput';
import AssertionsInput from './assertions-input/AssertionsInput';
import LocationsInput from './locations-input/LocationsInput';
import TextBlockInput from './text-block-input/TextBlockInput';
import { fetchSideloads } from '../../features/sideloads/sideloads';
import FrequencyInput from './frequency-input/FrequencyInput';
import AlertChannelsInput from './alert-channels-input/AlertChannelsInput';
import Button from '../shared/Button';
import {
  addMethod, addTitle, addUrl, replaceConfiguration,
} from '../../features/newtest/newtest';
import apiClient from '../../services/ApiClient';
import HeadersInput from './headers-input/HeadersInput';
import NameInput from './NameInput';
import MethodInput from './MethodInput';
import UrlInput from './UrlInput';

function TestForm({
  mode,
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
}) {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const httpMethods = useSelector((state) => state.sideloads.httpMethods);
  const newTestConfiguration = useSelector((state) => state.newtest);

  useEffect(() => {
    dispatch(fetchSideloads());
  }, [dispatch]);

  // if (mode === 'edit') {
  //   dispatch(replaceConfiguration(configuration.test));
  // }

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleSubmitNewTitle = () => {
  //   dispatch(addTitle(title));
  // };

  // const handleSubmitNewMethod = (e) => {
  //   dispatch(addMethod(e.target.value));
  // };

  // const handleUrlChange = (e) => {
  //   setUrl(e.target.value);
  // };

  // const handleSubmitNewUrl = () => {
  //   dispatch(addUrl(url));
  // };

  // const handleSaveConfiguration = () => {
  //   console.log(newTestConfiguration);
  //   if (mode === 'create') {
  //     apiClient.createTest({ test: newTestConfiguration });
  //   } else if (mode === 'edit') {
  //     apiClient.editTest({ test: newTestConfiguration }, testId);
  //   }

  //   navigate('/tests');
  // };

  return (
    <div className="max-w-7xl mx-auto px-8 pb-20">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold text-heading-h2 mb-3">
            {mode === 'create' ? 'Create' : 'Edit'}
            {' '}
            a test
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
        <Button onClick={() => console.log('save!')} message="Save" save />
      </div>
    </div>
  );
}

export default TestForm;
