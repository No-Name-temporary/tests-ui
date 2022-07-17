import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './form-components/Dropdown';
import RadioButtons from './form-components/RadioButtons';
import apiClient from '../services/ApiClient';
import formatter from '../utils/dataFormatting';

function CreateTest() {
  const [locations, setLocations] = useState([]);
  const [sourceValue, setSourceValue] = useState('jsonBody');
  const [comparisonTypes, setComparisonTypes] = useState([]);
  // const [methods, setMethods] = useState('GET');

  const getSideloadHook = () => {
    const run = async () => {
      const sideload = await apiClient.getSideload();

      setLocations(formatter.formatRegion(sideload.regions));
      // setMethods(formatter.formMethod(sideload.method));
      setComparisonTypes(formatter.formatComparisonTypes(sideload.comparisonTypes));
    };
    run();
  };

  useEffect(getSideloadHook, []);

  const source = [
    { id: '01', value: 'jsonBody', displayedName: 'Json' },
    { id: '02', value: 'statusCode', displayedName: 'Status Code' },
    { id: '03', value: 'headers', displayedName: 'Headers' },
    { id: '04', value: 'textBody', displayedName: 'Text Body' },
    { id: '05', value: 'responseTime', displayedName: 'Response Time' },
  ];

  const [title, setTitle] = useState('');
  const [frequency, setFrequency] = useState('1');
  const [method, setMethod] = useState('1');
  const [url, setUrl] = useState('1');
  const [body, setBody] = useState('1');
  const [property, setProperty] = useState('1');
  const [target, setTarget] = useState('1');
  const [locationValue, setLocationValue] = useState('us-west-1');
  const [comparisonValue, setComparisonValue] = useState('equal_to');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const testData = {
      test: {
        title,
        locations: [locationValue],
        minutesBetweenRuns: Number(frequency),
        type: 'API',
        httpRequest: {
          method,
          url,
          headers: {},
          body: JSON.parse(body === '' ? '{}' : body),
          assertions: {
            [sourceValue]: {
              comparison: comparisonValue,
              property,
              target,
            },
          },
        },
      },
    };

    const data = await apiClient.createTest(testData);
    console.log(data);

    setLocationValue('us-west-1');
    setSourceValue('jsonBody');
    setComparisonValue('equal_to');
    setTitle('');
    setFrequency('1');
    setMethod('');
    setUrl('');
    setBody('');
    setProperty('');
    setTarget('');
  };

  const handleUpdateLocation = (event) => {
    setLocationValue(event.target.value);
  };

  const handleUpdateSource = (event) => {
    setSourceValue(event.target.value);
  };

  const handleUpdateComparison = (event) => {
    setComparisonValue(event.target.value);
  };

  const handleUpdateFrequency = (event) => {
    setFrequency(event.target.value);
  };

  const handleUpdateTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleUpdateMethod = (event) => {
    setMethod(event.target.value);
  };

  const handleUpdateUrl = (event) => {
    setUrl(event.target.value);
  };

  const handleUpdateBody = (event) => {
    setBody(event.target.value);
  };

  const handleUpdateProperty = (event) => {
    setProperty(event.target.value);
  };

  const handleUpdateTarget = (event) => {
    setTarget(event.target.value);
  };

  return (
    <div>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <h1>Create an API test</h1>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>Test Name</dt>
          <dd>
            <input
              type="text"
              placeholder="Eneter name..."
              value={title}
              onChange={handleUpdateTitle}
            />
          </dd>
          <h2>Make an HTTP request</h2>
          <dt>Method</dt>
          <dd>
            <input
              type="text"
              placeholder="GET"
              value={method}
              onChange={handleUpdateMethod}
            />
          </dd>
          <dt>URL</dt>
          <dd>
            <input
              type="text"
              placeholder="https://example-website.com"
              value={url}
              onChange={handleUpdateUrl}
            />
          </dd>
          <Dropdown
            label="Location"
            options={locations}
            value={locationValue}
            onChange={handleUpdateLocation}
          />
          <dt>Body</dt>
          <dd>
            <textarea
              type="textarea"
              placeholder="Enter JSON body..."
              value={body}
              onChange={handleUpdateBody}
            />
          </dd>
          <h2>Add assertions</h2>
          <Dropdown
            label="Source"
            options={source}
            value={sourceValue}
            onChange={handleUpdateSource}
          />
          <dt>Property</dt>
          <dd>
            <input
              type="text"
              placeholder=""
              value={property}
              onChange={handleUpdateProperty}
            />
          </dd>
          <Dropdown
            label="Comparison"
            options={comparisonTypes}
            value={comparisonValue}
            onChange={handleUpdateComparison}
          />
          <dt>Target</dt>
          <dd>
            <input
              type="text"
              placeholder=""
              value={target}
              onChange={handleUpdateTarget}
            />
          </dd>
          <RadioButtons frequency={frequency} handleFrequency={handleUpdateFrequency} />
        </dl>
        <button className="button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateTest;
