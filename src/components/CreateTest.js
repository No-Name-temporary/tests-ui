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

	const [title, setTitle] = useState("");
	const [frequency, setFrequency] = useState("1");
	const [method, setMethod] = useState("");
	const [url, setUrl] = useState("");
	const [body, setBody] = useState("");
	const [property, setProperty] = useState("");
	const [target, setTarget] = useState("");

	

	const handleSubmit = async (event) => {
		event.preventDefault();
/*
how will the assertions be stored in JSON? 
*/

		const testData = {
			"test": {
				"title": title,
				"locations": [locationValue],
				"minutesBetweenRuns": Number(frequency),
				"type": "API",
				"http_request": {
					"http_method": method,
					"url": url,
					"headers": {},
					"body": JSON.stringify(body),
					"assertions": {
						"status_code": 200,
						"contains_properties": [property]
					}
				}
			}
		};

		const data = await apiClient.createTest(testData);

		console.log(data);
		setLocationValue("us-east-1");
		setSourceValue("JSON body");
		setComparisonValue("Equals");
		setTitle("");
		setFrequency("1");
		setMethod("");
		setUrl("");
		setBody("");
		setProperty("");
		setTarget("");

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

	const handleFrequency = (event) => {
    setFrequency(event.target.value)
  }

	const handleTitle = (event) => {
		setTitle(event.target.value);
	}

	const handleMethod = (event) => {
		setMethod(event.target.value);
	}

	const handleUrl = (event) => {
		setUrl(event.target.value);
	}

	const handleBody = (event) => {
		setBody(event.target.value);
	}

	const handleProperty = (event) => {
		setProperty(event.target.value); 
	}

	const handleTarget = (event) => {
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
								onChange={handleTitle}
              />
            </dd>
						<h2>Make an HTTP request</h2>
						<dt>Method</dt>
            <dd>
              <input
                type="text"
                placeholder="GET"
                value={method}
								onChange={handleMethod}
              />
            </dd>
						<dt>URL</dt>
            <dd>
              <input
                type="text"
                placeholder='https://example-website.com'
                value={url}
								onChange={handleUrl}
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
              <textarea
                type="textarea"
                placeholder='Enter JSON body...'
                value={body}
								onChange={handleBody}
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
                placeholder=""
                value={property}
								onChange={handleProperty}
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
                value={target}
								onChange={handleTarget}
              />
						</dd>
							<RadioButtons frequency={frequency} handleFrequency={handleFrequency}/>
          </dl>
          <button className="button" type="submit">
            Create
          </button>
        </form>
		</div>
	)
}

export default CreateTest;
