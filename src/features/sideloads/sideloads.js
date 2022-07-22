import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../services/ApiClient';

const initialState = [];

export const fetchSideloads = createAsyncThunk('sideloads/fetchSideloads', async () => {
  console.log('INSIDE!!');
  const data = await apiClient.getSideload();
  return data;
});

const sideloadsSlice = createSlice({
  name: 'sideloads',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSideloads.fulfilled, (state, action) => {
      console.log('action.payload: ', action.payload);
      return action.payload;
    });
  },
});

export default sideloadsSlice.reducer;
