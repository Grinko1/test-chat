import { createSlice } from '@reduxjs/toolkit';



export type IInitialState = {
 
    name:  string,
    id:string

}

const initialState: IInitialState = {
  name:'',
  id:''
};


const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
      setHeader(state, action) {
          state.name = action.payload.title
          state.id = action.payload.id
      }
  },
  extraReducers: {},
});

export default headerSlice.reducer
export const {setHeader} = headerSlice.actions