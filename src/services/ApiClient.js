import axios from "axios";

const URL = "http://testscrud-env.eba-fpb5kcf8.us-east-1.elasticbeanstalk.com";
const testURL = "http://localhost:5001"; //for local testing

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
};

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
	createTest: async (test) => {
		try {
			const { data } = await axios.post(`${testURL}/api/tests`, test);
			return data;
		} catch (e) {
			logError(e);
		}
	},
	getTests: async () => {
		try {
			const { data } = await axios.get(`${testURL}/api/tests`);
			return data; 
		} catch (e) {
			logError(e);
		}
	}
};

export default apiClient;