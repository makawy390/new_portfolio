import {configureStore} from '@reduxjs/toolkit'
import mode from '../reducer/createSlice';
import token from '../reducer/addToken'
// import dataSharing '../reducer/asyncSyncProjects'
const store = configureStore({
 reducer: {
  mode : mode,
  token : token,
 }
})
export default store;