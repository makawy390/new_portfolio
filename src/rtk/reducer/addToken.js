// import {createSlice} from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import { api } from './../../api/api';

export const fetchProjects = createAsyncThunk('projectSlice/fetchProject' , async ()=>{
    const res = await fetch(`${api}api/projects`);
    const data = await res.json();
    return data;
});
const initialState = {
 token : '',
};

const addToken = createSlice({
 name : 'token',
 initialState,
 reducers : {
  addedToken : (state , action)=>{
   state.token = action.payload;
  }
 },
  extraReducers : (builder)=>{
        // builder.addCase(fetchProjects.pending , (state , action)=>{
            // show loader here
        // })
        builder.addCase(fetchProjects.fulfilled , (state , action)=>{
            // logical  
            state.data = action.payload;
            console.log(state.data);
        })
        //  builder.addCase(fetchProjects.rejected , (state , action)=>{
            // show rejected here ==> error 
        // })
    }
});

export const {addedToken} = addToken.actions;
export default addToken.reducer;