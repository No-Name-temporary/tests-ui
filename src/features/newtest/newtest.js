import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  locations: [],
  minutesBetweenRuns: '',
  type: 'API',
  httpRequest: {
    method: 'GET',
    url: '',
    headers: {},
    body: {},
    assertions: [],
  },
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
      state.httpRequest.body = action.payload;
    },
    addAssertion: (state, action) => {
      state.httpRequest.assertions.push(action.payload);
    },
    deleteAssertion: (state, action) => {
      state.httpRequest.assertions = state.httpRequest.assertions.filter((a) => a.id !== action.payload);
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
} = newtestSlice.actions;

export default newtestSlice.reducer;
