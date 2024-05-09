import RegisterPage1 from "./registerPage/RegisterPage1";
import RegisterPage3 from "./registerPage/RegisterPage3";
import RegisterPage5 from "./registerPage/RegisterPage5";
import "./Register.css";
import {useSelector} from "react-redux";
import RegisterPage2 from "./registerPage/RegisterPage2";
import RegisterPage6 from "./registerPage/RegisterPage5";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {sendUser} from "../api/UserData";
import Cookies from "js-cookie";
import RegisterPage4 from "./registerPage/RegisterPage4";

const Register = () => {
    const page = useSelector(state => state.page);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();


    useEffect(() => {
        if(page.page === 6) {
            sendUser(user, Cookies.get("accessToken")).then(() => console.log("success")).catch((e) => console.log(e));
            navigate("/main");
        }
    }, [page.page, user, navigate]);

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