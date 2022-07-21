import { React } from 'react';
import { useSelector } from 'react-redux';
import TextSelect from '../shared/TextSelect';
import TextInput from '../shared/TextInput';
import Toggle from './Toggle';
import TextBlockInput from '../shared/TextBlockInput';
import KeyValueInput from './KeyValueInput';
import AssertionsInput from './AssertionsInput';
import LocationsInput from './LocationsInput';

const httpMethods = [
  { name: 'GET' },
  { name: 'POST' },
  { name: 'PUT' },
  { name: 'DELETE' },
];

const configuredHeaders = [
  { name: 'Content-Type', value: 'application/json' },
  { name: 'Content-Type', value: 'application/json' },
];

const configuredQueryParams = [
  { name: 'age', value: '144d' },
];

function CreateNewTest() {
  const sideloads = useSelector((state) => state.sideloads);
  console.log('sideloads: ', sideloads);

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create a test</h1>
        </div>
        <div className="flex">
          <Toggle />
          <div className="pl-2">Activated</div>
        </div>
      </div>
      <TextInput label="Test name" placeholder="My new test" type="text" name="test_name" id="test_name" />
      <h2 className="text-1xl font-bold text-gray-900 pt-6">HTTP request</h2>
      <div className="flex py-2">
        <div className="flex-none">
          <TextSelect label="Method" options={httpMethods} />
        </div>
        <div className="flex-1 pl-4">
          <TextInput label="URL" placeholder="My new test!" type="text" name="test_name" id="test_name" />
        </div>
      </div>

      <TextBlockInput label="Body" placeholder="JSON goes here" name="test_name" id="test_name" />
      <KeyValueInput label="Headers" buttonLabel="Add header" data={configuredHeaders} />
      <KeyValueInput label="Query params" buttonLabel="Add query param" data={configuredQueryParams} />
      <AssertionsInput />
      <LocationsInput />
    </div>
  );
}

export default CreateNewTest;
