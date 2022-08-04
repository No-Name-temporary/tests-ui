/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  locations: [],
  minutesBetweenRuns: '',
  type: 'api',
  httpRequest: {
    method: 'get',
    url: '',
    headers: {},
    body: {},
    assertions: [],
  },
  alertChannels: [],
};

export const newtestSlice = createSlice({
  name: 'newtest',
  initialState,
  reducers: {
    addTitle: (state, action) => {
      state.title = action.payload;
    },
    addMethod: (state, action) => {
      state.httpRequest.method = action.payload;
    },
    addUrl: (state, action) => {
      state.httpRequest.url = action.payload;
    },
    addRequestBody: (state, action) => {
      state.httpRequest.body = JSON.parse(action.payload);
    },
    addAssertion: (state, action) => {
      state.httpRequest.assertions.push(action.payload);
    },
    deleteAssertion: (state, action) => {
      state.httpRequest.assertions = state.httpRequest.assertions
        .filter((a) => a.id !== action.payload);
    },
    toggleLocation: (state, action) => {
      const location = action.payload;
      if (state.locations.includes(location)) {
        state.locations = state.locations.filter((l) => l !== location);
      } else {
        state.locations.push(location);
      }
    },
    setMinutesBetweenRuns: (state, action) => {
      state.minutesBetweenRuns = action.payload;
    },
    addAlertChannel: (state, action) => {
      state.alertChannels.push(action.payload);
    },
    deleteAlertChannel: (state, action) => {
      state.alertChannels = state.alertChannels.filter((a) => a.id !== action.payload);
    },
    addHeader: (state, action) => {
      const headersCopy = JSON.parse(JSON.stringify(state.httpRequest.headers));
      headersCopy[action.payload.headerKey] = action.payload.headerValue;
      state.httpRequest.headers = headersCopy;
    },
    deleteHeader: (state, action) => {
      const headersCopy = JSON.parse(JSON.stringify(state.httpRequest.headers));
      const filteredHeaders = Object.fromEntries(
        Object.entries(headersCopy).filter(([key]) => key !== action.payload),
      );
      state.httpRequest.headers = filteredHeaders;
    },
  },
});

export const {
  addTitle,
  addMethod,
  toggleLocation,
  addUrl,
  addRequestBody,
  addAssertion,
  deleteAssertion,
  setMinutesBetweenRuns,
  addAlertChannel,
  deleteAlertChannel,
  addHeader,
  deleteHeader,
} = newtestSlice.actions;

export default newtestSlice.reducer;
