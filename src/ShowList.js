import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Edit from "./Edit";

export default function ShowList() {
    let [list, setData] = useState([]);
    useEffect(() => {
        showList()
    }, []);

    let showList = () => {
        axios.get('http://localhost:3000/students').then(res => {
            setData(res.data);
        })
    }

    return (
        <>
            {list.map(item =>
                <h2>{item.name},{item.description} , {item.score},{item.action}
                    <button
                        onClick={() =>
                            axios.delete(`http://localhost:3000/students/${item.id}`).then(() =>
                                showList())
                        }>Delete
                    </button>
                    <Link to={'/edit/'+item.id}>Edit</Link>
                </h2>
            )}

        </>
    )
}
