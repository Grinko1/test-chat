import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URLS } from '../../../constants/urls';
import { IMessages } from '../../../interface/messages';

export type IInitialState = {
    messages: IMessages [] ,
    status: 'idle' | 'pending' | 'succeeded' | 'error'

}

const initialState: IInitialState = {
  messages: [],
  status: 'idle',
};


export const messagesFetch = createAsyncThunk(
  'messages/messagesFetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(URLS.MAIN + URLS.MESSAGES);
      return response?.data.response;
    } catch (error) {
      return rejectWithValue('failed to load');
    }
  },
);






const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: {
    [messagesFetch.pending.toString()]: (state) => {
      state.status = 'pending';
    },
    [messagesFetch.fulfilled.toString()]: (state, action) => {
     
      state.status = 'succeeded';
       state.messages = action.payload;
    },
    [messagesFetch.rejected.toString()]: (state) => {
      state.status = 'error';
    },
  },
});

export default messagesSlice.reducer