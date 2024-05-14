import RegisterPage5 from "../register/registerPage/RegisterPage5";
import "../register/Register.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {setPage} from "../store/page";
import {editFriend} from "../api/UserData";
import Cookies from "js-cookie";

const EditFriendProfilePage = () => {
    const page = useSelector(state => state.page);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if(page.page === 13) {
            editFriend({
                wantAge: user.wantAge,
                wantGender: user.wantGender,
                wantHeight: user.wantHeight,
                wantOccupation: user.wantOccupation,
                wantSmoke: user.wantSmoke,
            } ,Cookies.get("accessToken"));
            navigate("/main");
            dispatch(setPage(1));
        }
    }, [page.page, dispatch, user, navigate]);

    return (
        <div className="Register">
            {page.page === 12 ? (<RegisterPage5/>) : (<></>)}
        </div>
    );
}
export default EditFriendProfilePage;