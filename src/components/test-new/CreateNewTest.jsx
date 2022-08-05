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
import { addMethod, addTitle, addUrl } from '../../features/newtest/newtest';
import apiClient from '../../services/ApiClient';
import HeadersInput from './headers-input/HeadersInput';

function CreateNewTest() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const httpMethods = useSelector((state) => state.sideloads.httpMethods);
  const newTestConfiguration = useSelector((state) => state.newtest);

  useEffect(() => {
    dispatch(fetchSideloads());
  }, [dispatch]);

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmitNewTitle = () => {
    dispatch(addTitle(title));
  };

  const handleSubmitNewMethod = (e) => {
    dispatch(addMethod(e.target.value));
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmitNewUrl = () => {
    dispatch(addUrl(url));
  };

  const handleSaveConfiguration = () => {
    console.log(newTestConfiguration);
    apiClient.createTest({ test: newTestConfiguration });
    navigate('/tests');
  };

  return (
    <div className="max-w-7xl mx-auto px-8 pb-20">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold text-heading-h2 mb-3">Create a test</h2>
        </div>
      </div>
      <TextInput onChange={handleTitleChange} onBlur={handleSubmitNewTitle} label="Test name" placeholder="My-new-test" type="text" name="test_name" id="test_name" />

      <h3 className="text-1xl font-bold text-heading-h3 pt-6">HTTP request</h3>

      <div className="flex py-2">
        <div className="flex-none">
          <TextSelect onChange={handleSubmitNewMethod} label="Method" options={httpMethods} />
        </div>
        <div className="flex-1 pl-4">
          <TextInput onChange={handleUrlChange} onBlur={handleSubmitNewUrl} label="URL" placeholder="https://..." type="text" name="test_name" id="test_name" />
        </div>
      </div>

      <TextBlockInput label="Body" placeholder="JSON goes here" name="test_name" id="test_name" />
      <HeadersInput />
      <AssertionsInput />
      <LocationsInput />
      <FrequencyInput />
      <AlertChannelsInput />
      <div className="mt-5 flex text-tertiary-900">
        <Button onClick={handleSaveConfiguration} message="Save" save />
      </div>
    </div>
  );
}

export default CreateNewTest;
