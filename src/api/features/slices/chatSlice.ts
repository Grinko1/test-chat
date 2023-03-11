import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URLS } from '../../../constants/urls';

export type IInitialState = {
 
    chat:  [] ,
    status: 'idle' | 'pending' | 'succeeded' | 'error'

}

const initialState: IInitialState = {
  chat: [],
  status: 'idle',
};


export const chatFetch = createAsyncThunk(
  'chat/chatFetch',
  async (id:string,{ rejectWithValue }) => {
    try {

      const response = await axios.get(`${URLS.MAIN }${URLS.LIST}?chat_id=${id}`);
      return response?.data.response;
    } catch (error) {
      return rejectWithValue('failed to load');
    }
  },
);






const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
  },
  extraReducers: {
    [chatFetch.pending.toString()]: (state) => {
      state.status = 'pending';
    },
    [chatFetch.fulfilled.toString()]: (state, action) => {
     
      state.status = 'succeeded';
       state.chat = action.payload;
    },
    [chatFetch.rejected.toString()]: (state) => {
      state.status = 'error';
    },
  },
});

export default chatSlice.reducer