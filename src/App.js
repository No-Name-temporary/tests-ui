import axios from 'axios';

const App = () => {
	
	const handleRunNow = () => {
		console.log('button clicked');
		// const response = axios.post("/")
	
	}
	
	const handleScheduleTest = () => {
		console.log("scheduling events clicked");
		// try {
		// 	const response = axios.post("/schedule")
		// 	console.log(response);
		// } catch (e) {
		// 	console.log(e)
		// }
	}

	const handleCreateTest = () => {
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

		try {
			const response = axios.post(`/api/tests`, data)
			console.log(response);
		} catch(e) {
			console.log(e);
		}
	}

	return (
		<div>
			<h1>Tests</h1>
			<p>Method: POST </p>
			<p>URL:</p> 
			<button onClick={handleRunNow}>Run now</button>
			<button onClick={handleScheduleTest}>Schedule 1 min</button>
			<button onClick={handleCreateTest}>Create Test</button>
		</div>
	)
}


export default App;
