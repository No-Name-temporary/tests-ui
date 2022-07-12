import React from 'react';
import Dropdown from "./form/Dropdown";
import RadioButtons from './form/RadioButtons'
import apiClient from '../services/ApiClient';
import { useState } from 'react';

const CreateTest = () => {

	//locations, source, comparison are hardcoded for now, ideally 
	// we should get them from DB 
	const locations = [
    { label: 'us-east-2', value: 'us-east-2' },
    { label: 'us-east-1', value: 'us-east-1' },
    { label: 'us-west-1', value: 'us-west-1' },
  ];

	const source = [
		{ label: 'Status code', value: 'Status code' },
    { label: 'JSON body', value: 'JSON body' },
    { label: 'Headers', value: 'Headers' },
		{ label: 'Text body', value: 'Text body' },
		{ label: 'Response Time', value: 'Response Time'},
	];

	const comparison = [
    { label: 'Equals', value: 'Equals' },
    { label: 'Not equals', value: 'Not equals' },
    { label: 'Has key', value: 'Has key'},
  ];

	const [locationValue, setLocationValue] = useState('us-east-1');
	const [sourceValue, setSourceValue] = useState('JSON body');
	const [comparisonValue, setComparisonValue] = useState('Equals');

	/*
	example payload for POST
			const data = {
			"test": {
				"title": "My new test",
				"locations": ["us-east-1"],
				"minutesBetweenRuns": 60,
				"type": "API",
				"http_request": {
					"http_method": "GET",
					"url": "https://mysite.com/api/users",
					"headers": {},
					"body": {},
					"assertions": {
						"status_code": 200,
						"contains_properties": []
					},
				},
			}
		}


	*/

	const handleSubmit = () => {
		//collect data from the form and send a post request 
	}

  const handleLocationChange = (event) => {
    setLocationValue(event.target.value);
  };

	const handleSourceChange = (event) => {
    setSourceValue(event.target.value);
  };

	const handleComparisonChange = (event) => {
		setComparisonValue(event.target.value);
	}


	return (
		<div>
			<h1>Create an API test</h1>
			<form onSubmit={handleSubmit}>
          <dl>
            <dt>Test Name</dt>
            <dd>
              <input
                type="text"
                placeholder='Enetr name...'
                value={""}
              />
            </dd>
						<h2>Make an HTTP request</h2>
						<dt>Method</dt>
            <dd>
              <input
                type="text"
                placeholder='GET'
                value={""}
              />
            </dd>
						<dt>URL</dt>
            <dd>
              <input
                type="text"
                placeholder='https://example-website.com'
                value={""}
              />
            </dd>
						<Dropdown
							label="Location"
							options={locations}
							value={locationValue}
							onChange={handleLocationChange}
						/>
						<dt>Body</dt>
            <dd>
              <input
                type="text"
                placeholder='Enter JSON body'
                value={""}
              />
            </dd>
						<h2>Add assertions</h2>
						<Dropdown
							label="Source"
							options={source}
							value={sourceValue}
							onChange={handleSourceChange}
						/>
						<dt>Property</dt>
						<dd>
							<input
                type="text"
                placeholder=''
                value={""}
              />
						</dd>
							<Dropdown
								label="Comparison"
								options={comparison}
								value={comparisonValue}
								onChange={handleComparisonChange}
							/>
						<dt>Target</dt>
						<dd>
							<input
                type="text"
                placeholder=''
                value={""}
              />
						</dd>
							<RadioButtons/>
          </dl>
          <button className="button" type="submit">
            Create
          </button>
        </form>
		</div>
	)
}

export default CreateTest;