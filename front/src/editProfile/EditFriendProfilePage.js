import RegisterPage5 from "../register/registerPage/RegisterPage5";
import "../register/Register.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {setPage} from "../store/page";

const EditFriendProfilePage = () => {
    const page = useSelector(state => state.page);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if(page.page === 2) {
            //todo 유저 수정하는 api 만들기
            navigate("/main");
            dispatch(setPage(1));
        }
    }, [page.page, dispatch, user, navigate]);

    return (
        <div className="Register">
            {page.page === 1 ? (<RegisterPage5/>) : (<></>)}
        </div>
    );
}
export default EditFriendProfilePage;