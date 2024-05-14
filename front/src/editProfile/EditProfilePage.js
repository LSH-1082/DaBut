import RegisterPage1 from "../register/registerPage/RegisterPage1";
import RegisterPage2 from "../register/registerPage/RegisterPage2";
import RegisterPage3 from "../register/registerPage/RegisterPage3";
import RegisterPage4 from "../register/registerPage/RegisterPage4";
import "../register/Register.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {setPage} from "../store/page";
import {editProfile} from "../api/UserData";
import Cookies from "js-cookie";

const EditProfilePage = () => {
    const page = useSelector(state => state.page);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if(page.page === 11) {
            editProfile({
                name: user.name,
                gender: user.gender,
                age: user.age,
                kakaoId: user.kakaoId,
                nickname: user.nickname,
                height: user.height,
                face: user.face,
                frequency: user.frequency,
                intro: user.intro,
                major: user.major,
                mbti: user.mbti,
                occupation: user.occupation,
                personality: user.personality,
                smoke: user.smoke,
                state: user.state,
                weight: user.weight
            }, Cookies.get("accessToken"));
            navigate("/main");
            dispatch(setPage(1));
        }
    }, [page.page, dispatch, user, navigate]);

    return (
        <div className="Register">
            {page.page === 7 ? (<RegisterPage1/>) : (<></>)}
            {page.page === 8 ? (<RegisterPage2/>) : (<></>)}
            {page.page === 9 ? (<RegisterPage3/>) : (<></>)}
            {page.page === 10 ? (<RegisterPage4/>) : (<></>)}
        </div>
    );
}
export default EditProfilePage;