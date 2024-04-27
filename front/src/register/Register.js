import RegisterPage1 from "./RegisterPage1";
import RegisterPage2 from "./RegisterPage2";
import RegisterPage3 from "./RegisterPage3";
import "./Register.css";
import {useSelector} from "react-redux";

const Register = () => {
    const page = useSelector(state => state.page);

    return (
            <div className="Register">
                {page.page === 1 ? (<RegisterPage1/>) : (<></>)}
                {page.page === 2 ? (<RegisterPage2/>) : (<></>)}
                {page.page === 3 ? (<RegisterPage3/>) : (<></>)}
            </div>
    );
}
export default Register;