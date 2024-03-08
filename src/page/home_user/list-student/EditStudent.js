import {useNavigate, useParams} from "react-router";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {editStudent, getStudents} from "../../../services/studentsService";

export default function EditStudent() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let {id} = useParams()
    let st = useSelector(state => {
        // if (state.students.students == undefined) {
        //     return []
        // }
        return state.students.students.filter(i => i.id == id);
    })
    let handleEdit = async (id, values) => {
        await dispatch(editStudent({id, values}))
    }
    return (
        <>
            <span>  Edit Student</span>

            <Formik
                initialValues={st[0]}
                onSubmit={(values) => {
                    handleEdit(st[0].id, values).then(() => {
                            navigate('/homeUser')
                        }
                    )
                }}>
                <Form>
                    name: <Field name={'name'}/>
                    description: <Field name={'description'}/>
                    action: <Field name={'action'}/>
                    score: <Field name={'score'}/>
                    <button type={"submit"}>Edit</button>
                </Form>
            </Formik>
        </>
    )
}