import Navbar from "../../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getStudents} from "../../services/studentsService";
import ListStudent from "./list-student/ListStudent";
import {Outlet} from "react-router";

export default function Home() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className={"row"} id={"logo"}>
                <div className={"col-2"}>
                    <span> Home</span>
                </div>
                <div className={"col-2"}>
                    <span>Student</span>
                </div>
                <div className="col-6">

                </div>
                <div className={"col-2"}>
                    <span>Order</span>
                </div>
            </div>
            <div className="row" id={"body"}>
                <div className={"col-2"}>
                    <span>Side bar</span>
                </div>
                <div className={"col-10"}>
                    <Outlet></Outlet>
                </div>
            </div>

        </>
    )
}