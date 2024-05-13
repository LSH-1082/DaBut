import RegisterPage1 from "../register/registerPage/RegisterPage1";
import RegisterPage2 from "../register/registerPage/RegisterPage2";
import RegisterPage3 from "../register/registerPage/RegisterPage3";
import RegisterPage4 from "../register/registerPage/RegisterPage4";
import "../register/Register.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {setPage} from "../store/page";

const EditProfilePage = () => {
    const page = useSelector(state => state.page);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if(page.page === 5) {
            //todo 유저 수정하는 api 만들기
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
        </div>
    );
}
export default EditProfilePage;