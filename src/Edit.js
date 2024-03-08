import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Edit(){
    let {id} = useParams()
    console.log(id)
    let [data , setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/students/`+id).then(res=>{
            setData(res.data);
            console.log(data)
        })
    }, [id]);
    return (
        <>

        </>
    )
}