import "./Login.css";
import {useNavigate} from "react-router-dom";

const {Kakao} = window;


const Login = () => {
    const navigate = useNavigate();

    const kakaoLogin = () => {
        Kakao.Auth.authorize({
            redirectUri: "http://localhost:8080/api/test"
        })

    }

    return (
        <div className="Login">
            <div className="titleDiv">
                <p className="loginTitle">내 옆의</p>
                <p className="loginTitle">다양한 친구</p>
            </div>
            <div className="appTitleDiv">
                <p className="appTitle">다벗</p>
                <svg className="halfCircle" xmlns="http://www.w3.org/2000/svg" width="244" height="436"
                     viewBox="0 0 244 436" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M218 436C227.487 436 236.833 435.394 246 434.219V1.78145C236.833 0.606016 227.487 0 218 0C97.6019 0 0 97.6019 0 218C0 338.398 97.6019 436 218 436Z"
                          fill="white"/>
                </svg>
            </div>
            <div className="kakaoLogin">
                <div className="kakao" onClick={kakaoLogin}>
                    <p>카카오톡계정 로그인</p>
                </div>
            </div>
        </div>
    );
}

export default Login;