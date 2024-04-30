import RegisterPage1 from "./registerPage/RegisterPage1";
import RegisterPage3 from "./registerPage/RegisterPage3";
import RegisterPage4 from "./registerPage/RegisterPage4";
import "./Register.css";
import {useSelector} from "react-redux";
import RegisterPage2 from "./registerPage/RegisterPage2";
import RegisterPage5 from "./registerPage/RegisterPage5";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const page = useSelector(state => state.page);
    const navigate = useNavigate();

    useEffect(() => {
        if(page.page === 6) {
            navigate("/main");
        }
    }, [page.page, navigate]);

    return (
            <div className="Register">
                {page.page === 1 ? (<RegisterPage1/>) : (<></>)}
                {page.page === 2 ? (<RegisterPage2/>) : (<></>)}
                {page.page === 3 ? (<RegisterPage3/>) : (<></>)}
                {page.page === 4 ? (<RegisterPage4/>) : (<></>)}
                {page.page === 5 ? (<RegisterPage5/>) : (<></>)}
            </div>
    );
}
export default Register;