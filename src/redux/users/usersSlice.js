import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../services/usersService";
let initialState = {
    user:{}
}

let usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers : builder => {
        builder.addCase(login.fulfilled , (state , action)=>{
            state.user = action.payload
        })
    }
})
export default usersSlice.reducer