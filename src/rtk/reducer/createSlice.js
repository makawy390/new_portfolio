import {createSlice} from '@reduxjs/toolkit'

const initialState = {
 mode : false,
};

const createSliceMode = createSlice({
 name : 'mode',
 initialState,
 reducers : {
  changeMode : (state)=>{
   state.mode = !state.mode 
  }
 }
});

export const {changeMode} = createSliceMode.actions;
export default createSliceMode.reducer
