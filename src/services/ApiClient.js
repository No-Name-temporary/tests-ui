/* eslint-disable consistent-return */
import axios from 'axios';
import getTestRunsResponse from '../fixtures/getTestRuns';
import getTestsResponse from '../fixtures/getTests';
import getTestRunResponse from '../fixtures/getTestRun';

const config = require('../config.json');

const URL = config.testsCrudUrl;

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
  getTestsTemp: async () => getTestsResponse,
  getTest: async (id) => {
    try {
      const { data } = await axios.get(`${URL}/api/tests/${id}`);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  getSideload: async () => {
    try {
      const { data } = await axios.get(`${URL}/api/sideload`);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  runTestNow: async () => {
    try {
      const { data } = await axios.get(`${URL}/api/test/run`);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  // TODO: replace with call to /api/tests/:id/runs endpoint once implemented in tests-crud
  getTestRuns: async () => getTestRunsResponse,
  getTestRun: async ({ testName, testRunId }) => {
    console.log(`fetching test run ${testRunId} for test: ${testName}`);
    return getTestRunResponse;
  },
};

export default apiClient;
