import { createSlice } from "@reduxjs/toolkit";
import { clearData, getUser, setUser } from "./localStorage";





const userSlice = createSlice({
  name:'userInfo',
  initialState:{
    user: getUser()
  },
  reducers:{
    userAdd : (state,action) =>{
      setUser(action.payload)
      state.user = action.payload
    },
    removeUserSession: (state,action) => {
      state.user = null
      clearData()
    }
  }
})

export const {userAdd, removeUserSession} = userSlice.actions;
export default userSlice.reducer