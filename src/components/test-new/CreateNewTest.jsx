import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TextSelect from '../shared/TextSelect';
import TextInput from '../shared/TextInput';
import AssertionsInput from './AssertionsInput';
import LocationsInput from './LocationsInput';
import TextBlockInput from './TextBlockInput';
import { fetchSideloads } from '../../features/sideloads/sideloads';
import FrequencyInput from './FrequencyInput';
import AlertChannelsInput from './AlertChannelsInput';
import Button from '../shared/Button';
import { addMethod, addTitle, addUrl } from '../../features/newtest/newtest';
import apiClient from '../../services/ApiClient';
import HeadersInput from './HeadersInput';

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
    apiClient.createTest({ test: newTestConfiguration });
    navigate('/tests');
  };

  return (
    <div className="max-w-7xl mx-auto px-8 pb-20">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create a test</h1>
        </div>
      </div>
      <TextInput onChange={handleTitleChange} onBlur={handleSubmitNewTitle} label="Test name" placeholder="My new test" type="text" name="test_name" id="test_name" />

      <h2 className="text-1xl font-bold text-gray-900 pt-6">HTTP request</h2>

      <div className="flex py-2">
        <div className="flex-none">
          <TextSelect onChange={handleSubmitNewMethod} label="Method" options={httpMethods} />
        </div>
        <div className="flex-1 pl-4">
          <TextInput onChange={handleUrlChange} onBlur={handleSubmitNewUrl} label="URL" placeholder="My new test!" type="text" name="test_name" id="test_name" />
        </div>
      </div>

      <TextBlockInput label="Body" placeholder="JSON goes here" name="test_name" id="test_name" />
      <HeadersInput />
      <AssertionsInput />
      <LocationsInput />
      <FrequencyInput />
      <AlertChannelsInput />
      <div className="mt-5 flex">
        <Button onClick={handleSaveConfiguration} message="Save" save />
      </div>
    </div>
  );
}

export default CreateNewTest;
