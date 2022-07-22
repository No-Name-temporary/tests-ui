import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  locations: [],
  minutesBetweenRuns: '',
  type: 'API',
  httpRequest: {
    method: '',
    url: '',
    headers: {},
    body: {},
    assertions: {
      headers: [],
      jsonBody: [],
    },
  },
};

export const newtestSlice = createSlice({
  name: 'newtest',
  initialState,
  reducers: {
    addTitle: (state, action) => {
      state.title = action.payload;
    },
    addLocation: (state, action) => {
      state.locations.push(action.payload);
    },
  },
});

export const { addTitle, addLocation } = newtestSlice.actions;

export default newtestSlice.reducer;
