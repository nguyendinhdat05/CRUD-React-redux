import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router";

export default function Add() {
    let navigate = useNavigate()
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    action: '',
                    score: ''
                }}
                onSubmit={values => {
                    axios.post('http://localhost:3000/students', values).then(() => {
                        // window.location.reload();
                        navigate("/show")
                    })
                }}
            >
                <Form>
                    name: <Field name={'name'}/>
                    description: <Field name={'description'}/>
                    action: <Field name={'action'}/>
                    score: <Field name={'score'}/>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}