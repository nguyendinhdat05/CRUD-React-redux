import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteStudent, getStudents} from "../../../services/studentsService";
import {Link} from "react-router-dom";
import {current} from "@reduxjs/toolkit";


export default function ListStudent() {
    let dispatch = useDispatch();
    let students = useSelector(state => {
        return state.students.students;
    })
    useEffect(() => {
        dispatch(getStudents());
    }, [])
    return (
        <div className={"row"}>
            <div className={"col-12"}>
                <span>  List Student</span>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        <th scope="col">Score</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        // students != undefined &&
                        students.map((item, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.action}</td>
                                <td>{item.score}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(deleteStudent(item.id))
                                    }}> Delete
                                    </button>
                                </td>
                                <td>
                                    <button>
                                    <Link to={`edit/${item.id}`}>Update</Link></button>
                                </td>

                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}