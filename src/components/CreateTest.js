import React from 'react';
import Dropdown from "./form-components/Dropdown";
import RadioButtons from './form-components/RadioButtons'
import apiClient from '../services/ApiClient';
import { useState } from 'react';
import { Link } from "react-router-dom";

const CreateTest = () => {

  //locations, source, comparison are hardcoded for now, ideally 
  // we should get them from DB 
  const locations = [
    {value: 'us-west-1' },
    {value: 'eu-north-1' },
    {value: 'us-east-1' },
  ];

  const source = [
    {value: 'jsonBody' },
    {value: 'statusCode' },
    {value: 'headers' },
    {value: 'textBody' },
    {value: 'responseTime'},
  ];

  const comparison = [
    {value: 'equal_to' },
    {value: 'not_equal_to' },
    {value: 'has_key'},
  ];

  const [locationValue, setLocationValue] = useState('us-west-1');
  const [sourceValue, setSourceValue] = useState('jsonBody');
  const [comparisonValue, setComparisonValue] = useState('equal_to');

  const [title, setTitle] = useState("");
  const [frequency, setFrequency] = useState("1");
  const [method, setMethod] = useState("");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const [property, setProperty] = useState("");
  const [target, setTarget] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    const testData = {
      "test": {
        "title": title,
        "locations": [locationValue],
        "minutesBetweenRuns": Number(frequency),
        "type": "API",
        "httpRequest": {
          "method": method,
          "url": url,
          "headers": {},
          "body": JSON.parse(body === "" ? "{}" : body),
          "assertions": {
            [sourceValue]: {
              comparison: comparisonValue,
              property: property,
              target: target
            }
          }
        }
      }
    };

    console.log(testData);
    const data = await apiClient.createTest(testData);
    console.log(data);

    setLocationValue("us-west-1");
    setSourceValue("jsonBody");
    setComparisonValue("equal_to");
    setTitle("");
    setFrequency("1");
    setMethod("");
    setUrl("");
    setBody("");
    setProperty("");
    setTarget("");
  }

  const handleUpdateLocation = (event) => {
    setLocationValue(event.target.value);
  };

  const handleUpdateSource = (event) => {
    setSourceValue(event.target.value);
  };

  const handleUpdateComparison = (event) => {
    setComparisonValue(event.target.value);
  }

  const handleUpdateFrequency = (event) => {
    setFrequency(event.target.value)
  }

  const handleUpdateTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleUpdateMethod = (event) => {
    setMethod(event.target.value);
  }

  const handleUpdateUrl = (event) => {
    setUrl(event.target.value);
  }

  const handleUpdateBody = (event) => {
    setBody(event.target.value);
  }

  const handleUpdateProperty = (event) => {
    setProperty(event.target.value); 
  }

  const handleUpdateTarget = (event) => {
    setTarget(event.target.value);
  }


  return (
    <div>
        <Link to="/">
        <button>Home</button>
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
                placeholder='https://example-website.com'
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
                placeholder='Enter JSON body...'
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
                options={comparison}
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
              <RadioButtons frequency={frequency} handleFrequency={handleUpdateFrequency}/>
          </dl>
          <button className="button" type="submit">
            Create
          </button>
        </form>
    </div>
  )
}

export default CreateTest;
