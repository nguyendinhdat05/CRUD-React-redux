import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function Navbar() {
    let user = useSelector( state => {
        console.log(state)
        return state.user.user;
    })
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                               <Link to={"/homeUser"}>Home Admin</Link>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={"add"}>Add User</Link>
                                </li>
                            </ul>
                        </div>
                        <div style={{marginRight: 10}}>
                            {user.username}
                        </div>
                        <button onClick={()=>{
                            window.location.reload()
                        }}> <Link to={"/"}>Logout</Link></button>
                    </nav>
                </div>
            </div>
        </>
    )
}