import {useState} from "react";
import RegisterPage1 from "./RegisterPage1";
import "./Register.css";

const Register = () => {
    const [page, setPage] = useState(1);

    return (
            <div className="Register">
                {page === 1 ? (<RegisterPage1/>) : (<></>)}
            </div>
    );
}
export default Register;