import './register.css';
import {Link} from "react-router-dom";
export default function Register() {
    return (
        <>
            <div className={'row'}>
                <div className={"offset-5 col-2"} id={"formRegister"} >
                    <h1 style={{textAlign:'center'}}>Register</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input type="text" className={'form-control'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="text" className={'form-control'}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <div style={{textAlign: 'center'}} >
                            <Link style={{color: "black"}} to={'/'}>
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}