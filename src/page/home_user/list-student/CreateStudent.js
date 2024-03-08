import {useNavigate} from "react-router";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addStudent} from "../../../services/studentsService";

export default function CreateStudent(){
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const handleAdd = (value) =>{
        dispatch(addStudent(value)) ;
        navigate("/homeUser")

    }
    return (
        <>
            <span>  Create Student</span>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    action: '',
                    score: ''
                }}
                onSubmit={(values) => {
                    handleAdd(values)
                    }}>
                <Form>
                    name: <Field name={'name'}/>
                    description: <Field name={'description'}/>
                    action: <Field name={'action'}/>
                    score: <Field name={'score'}/>
                    <button type={"submit"}>Save</button>
                </Form>
            </Formik>
        </>
    )
}