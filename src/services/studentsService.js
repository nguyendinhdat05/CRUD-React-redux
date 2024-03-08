import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export let getStudents = createAsyncThunk(
    'students/getStudent',
    async () =>{
        let res = await axios.get('http://localhost:3000/students');
        return res.data
    }
)

export let addStudent = createAsyncThunk(
    'add/addStudent',
    async (data) =>{
        await axios.post('http://localhost:3000/students',data)
        return data
    }
)

export let deleteStudent = createAsyncThunk(
    'delete/deleteStudent',
    async (id) =>{
      let res =   await axios.delete(`http://localhost:3000/students/${id}`)
        return res.data
    }
)

export let editStudent = createAsyncThunk(
    'put/putStudent',
    async ({id,values}) =>{
        await axios.put(`http://localhost:3000/students/`+id,values)

    }
)