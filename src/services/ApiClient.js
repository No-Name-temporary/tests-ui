/* eslint-disable consistent-return */
import axios from 'axios';

const URL = 'http://testscrud-env.eba-fpb5kcf8.us-east-1.elasticbeanstalk.com';

function logError(errorResponse) {
  const { response } = errorResponse;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error('Error: ', errorResponse);
  }
}

const apiClient = {
  createTest: async (test) => {
    try {
      const { data } = await axios.post(`${URL}/api/tests`, test);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  getTests: async () => {
    try {
      const { data } = await axios.get(`${URL}/api/tests`);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  getTest: async (id) => {
    try {
      const { data } = await axios.get(`${URL}/api/tests/${id}`);
      return data;
    } catch (e) {
      logError(e);
    }
  },
};

export default apiClient;
