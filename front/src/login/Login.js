import "./Login.css";

const {Kakao} = window;

const Login = () => {
    const kakaoLogin = () => {
        Kakao.Auth.authorize({
            redirectUri: "http://localhost:8080/api/v1/auth/oauth2/kakao"
        })
    }


    return (
        <div className="Login">
            <div className="logoDiv">
                <svg className="logoImg" xmlns="http://www.w3.org/2000/svg" width="178" height="211" viewBox="0 0 178 211" fill="none">
                    <path
                        d="M8.88847 1H65.6693C100.912 1 129.558 32.2163 129.558 70.6861C129.558 109.126 100.939 140.372 65.6693 140.372H8.88847C4.52693 140.372 1 136.525 1 131.768V9.60431C1 4.84698 4.52693 1 8.88847 1Z"
                        stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                    <path
                        d="M71.6193 70.6865C58.427 70.6865 47.7385 86.28 47.7385 105.515C47.7385 124.75 58.427 140.343 71.6193 140.343C58.427 140.343 47.7385 155.937 47.7385 175.172C47.7385 194.406 58.427 210 71.6193 210H168.219C172.581 210 176.108 206.153 176.108 201.396V79.2908C176.108 74.5335 172.581 70.6865 168.219 70.6865H71.6193Z"
                        stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                    <path
                        d="M71.6193 70.6865C58.427 70.6865 47.7385 86.28 47.7385 105.515C47.7385 123.751 57.3501 138.699 69.5732 140.226C103.012 138.023 129.531 107.717 129.531 70.6865H71.6193Z"
                        fill="white" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                </svg>
            </div>
            <div className="titleDiv">
                <p className="appTitle">다벗</p>
                <p className="loginTitle">"내 옆의 다양한 친구"</p>
            </div>
            <div className="kakaoLogin" onClick={kakaoLogin}>
                <img src="/images/kakao_login_medium_wide.png" alt=""/>
            </div>
        </div>
    );
}

export default Login;