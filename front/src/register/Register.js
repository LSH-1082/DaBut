import RegisterPage1 from "./registerPage/RegisterPage1";
import RegisterPage2 from "./registerPage/RegisterPage2";
import RegisterPage3 from "./registerPage/RegisterPage3";
import RegisterPage4 from "./registerPage/RegisterPage4";
import RegisterPage5 from "./registerPage/RegisterPage5";
import "./Register.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {sendUser} from "../api/UserData";
import Cookies from "js-cookie";
import {setPage} from "../store/page";

const Register = () => {
    const page = useSelector(state => state.page);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if(page.page === 6) {
            sendUser(user, Cookies.get("accessToken")).then(() => console.log("success")).catch((e) => console.log(e));
            console.log(user);
            navigate("/main");
            dispatch(setPage(1));
        }
    }, [page.page, dispatch, user, navigate]);

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