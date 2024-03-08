import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export let login = createAsyncThunk(
    'user/login',
    async (data)=>{
        let res = await axios.post("http://localhost:8080/login",data)
        console.log(res.data)
        return res.data
    }
)