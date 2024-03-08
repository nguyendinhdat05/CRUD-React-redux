import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import axios from "axios";
import itemList from "./ItemList";
import {Field, Form, Formik} from "formik";
import {Route, Routes} from "react-router";
import ItemList from "./ItemList";
import ShowList from "./ShowList";
import {Link} from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import Navbar from "./components/Navbar";
import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/home_user/Home";
import {useDispatch, useSelector} from "react-redux";
import {getStudents} from "./services/studentsService";
import ListStudent from "./page/home_user/list-student/ListStudent";
import CreateStudent from "./page/home_user/list-student/CreateStudent";
import EditStudent from "./page/home_user/list-student/EditStudent";
// import './App.css';
// import ItemList from "./ItemList";
// import {useState} from "react";
//
// let a = 10;
// let o = {
//     name: 'ABC',
//     age: 20
// }
//
// function App() {
//     let [isShow, setIsShow] = useState(true);
//     return (
//         <div>
//             {isShow && <ItemList></ItemList>}
//             <button onClick={()=> {
//                 setIsShow(!isShow)
//             }}>!Show</button>
//
//         </div>
//     );
// }

// btap crud student
// function App() {
//     let [data, setData] = useState([]);
//
//     useEffect(() => {
//         showStudent()
//     }, []);
//
//     let showStudent = () => {
//         axios.get('http://localhost:3000/students').then(x => {
//             setData(x.data);
//         });
//     }
//     let deleteStudent = (id) => {
//         axios.delete(`http://localhost:3000/students/${id}`).then(() =>
//             showStudent()
//         )
//     }
//     let update=(id)=>{
//
//     }
//
//     return (
//         <>
//             <Formik
//                 initialValues={{
//                     name: '',
//                     description: '',
//                     action: '',
//                     score: ''
//                 }}
//                 onSubmit={values => {
//                     axios.post('http://localhost:3000/students', values).then(() => {
//                         window.location.reload();
//                     })
//                 }}
//             >
//                 <Form>
//                     name: <Field name={'name'}/>
//                     description: <Field name={'description'}/>
//                     action: <Field name={'action'}/>
//                     score: <Field name={'score'}/>
//                     <button>Save</button>
//                     <button>Update</button>
//                 </Form>
//             </Formik>
//
//             <table border="1">
//                 <tr>
//                     <th>Name</th>
//                     <th>Description</th>
//                     <th>Score</th>
//                     <th>Action</th>
//                 </tr>
//                 {data.map(itemList =>
//                     (<tr>
//                         <td>{itemList.name}</td>
//                         <td>{itemList.description}</td>
//                         <td>{itemList.score}</td>
//                         <td>{itemList.action}</td>
//                         <td>
//                             <button onClick={() =>
//                                 deleteStudent(itemList.id)}>Delete
//                             </button>
//                         </td>
//
//                     </tr>))}
//             </table>
//
//         </>
//     )
// }


// function App() {
//     return (
//         <>
//             <Link to={"add"}>Add</Link>
//             <Link to={"show"}>Show</Link>
//             <Routes>
//                 <Route path={"add"} element={<Add/>}></Route>
//                 <Route path={"show"} element={<ShowList/>}></Route>
//                 <Route path={"edit/:id"} element={<Edit/>}></Route>
//             </Routes>
//
//
//         </>
//     )
// }

function App() {
    let user = useSelector(state => {
        console.log(state)
        return state.user.user;
    })
    return (<>
        <div className="container-fluid">
            <Routes>
                <Route path={""} element={<Login></Login>}></Route>
                {user.username === undefined || user.roles === undefined ?
                    <Route path={"*"} element={<Login></Login>}></Route>
                    : user.roles[0].authority === "ROLE_ADMIN"
                        ?
                        <Route path={"homeUser"} element={<Home></Home>}>
                            <Route path={""} element={<ListStudent></ListStudent>}></Route>
                            <Route path={"add"} element={<CreateStudent></CreateStudent>}></Route>
                            <Route path={"edit/:id"} element={<EditStudent></EditStudent>}></Route>
                        </Route>
                        :
                        <Route path={"register"} element={<Register></Register>}></Route>}
                <Route path={"register"} element={<Register></Register>}></Route>
            </Routes>
        </div>
    </>)
}

export default App;
