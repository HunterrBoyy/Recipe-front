import { createSlice } from "@reduxjs/toolkit";
import { getUser, setUser } from "./localStorage";





const userSlice = createSlice({
  name:'userInfo',
  initialState:{
    user: getUser()
  },
  reducers:{
    userAdd : (state,action) =>{
      setUser(action.payload)
      state.user = action.payload
    }
  }
})

export const {userAdd} = userSlice.actions;
export default userSlice.reducer