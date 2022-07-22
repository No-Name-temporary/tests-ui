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
    addMethod: (state, action) => {
      state.httpRequest.method = action.payload;
    },
    addUrl: (state, action) => {
      state.httpRequest.url = action.payload;
    },
    addAssertion: (state, action) => {
      console.log('action.payload: ', action.payload);
      switch (action.payload.name) {
        case 'statusCode':
        case 'responseTime':
          state.httpRequest.assertions[action.payload.name] = {
            comparison: action.payload.comparisonType,
            target: action.payload.target,
          };
          break;
        case 'body':
          state.httpRequest.assertions.jsonBody.push(
            {
              comparison: action.payload.comparisonType,
              property: action.payload.property,
              target: action.payload.target,
            },
          );
          break;
        case 'headers':
          state.httpRequest.assertions[action.payload.name].push(
            {
              comparison: action.payload.comparisonType,
              property: action.payload.property,
              target: action.payload.target,
            },
          );
          break;
        default:
          console.log('Assertion type not found');
      }
    },
    toggleLocation: (state, action) => {
      const location = action.payload;
      if (state.locations.includes(location)) {
        state.locations.filter((l) => l !== location);
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
  addTitle, addMethod, toggleLocation, addUrl, addAssertion, setMinutesBetweenRuns,
} = newtestSlice.actions;

export default newtestSlice.reducer;
