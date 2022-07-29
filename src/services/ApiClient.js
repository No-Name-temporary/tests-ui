/* eslint-disable consistent-return */
import axios from 'axios';
import getTestsResponse from '../fixtures/getTests';

const baseUrl = '/api';

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
      const { data } = await axios.post(`${baseUrl}/tests`, test);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  getTests: async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/tests`);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  getTestsTemp: async () => getTestsResponse,
  getTest: async (id) => {
    try {
      const { data } = await axios.get(`${baseUrl}/tests/${id}`);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  getSideload: async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/sideload`);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  runTestNow: async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/test/run`);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  getTestRuns: async ({ testId }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/tests/${testId}/runs`);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  getTestRun: async ({ testId, runId }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/tests/${testId}/runs/${runId}`);
      return data;
    } catch (e) {
      logError(e);
    }
  },
};

export default apiClient;
