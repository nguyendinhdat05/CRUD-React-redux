import './login.css';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../services/usersService";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";

export default function Login() {
    let dispatch = useDispatch();
    let navigate =useNavigate()
    return (
        <>
            <div className={'row'}>
                <div className={"offset-5 col-2"} id={"formLogin"}>
                    <Formik initialValues={{
                        username: '',
                        password: '',
                    }}
                            onSubmit={
                                (values) => {
                                    dispatch(login(values))
                                    navigate('/homeUser')
                                }
                            }>
                        <Form>
                            <h1 style={{textAlign: 'center'}}>Login</h1>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Username</label>
                                <Field type="text" className={'form-control'} name={'username'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <Field type="text" className={'form-control'} name={'password'}/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            <div style={{textAlign: 'center'}}>
                                <Link style={{color: "black"}} to={'register'}>
                                    Register
                                </Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>

    )
}