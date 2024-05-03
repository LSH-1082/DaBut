import "./MainFooter.css";
import {useDispatch, useSelector} from "react-redux";
import {setMainPage} from "../store/mainPage";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const MainFooter = () => {
    const mainPage = useSelector(state => state.mainPage);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(mainPage.mainPage === "mainPage") navigate("/main");
        if(mainPage.mainPage === "listPage") navigate("/list");
        if(mainPage.mainPage === "alarmPage") navigate("/alarm");
        if(mainPage.mainPage === "profilePage") navigate("/profile");
    }, [mainPage.mainPage, navigate]);

    return (
        <nav className="MainNav">
            <div className="MainFooterDiv">
                <div className="MainFooter">
                    <svg onClick={() => {dispatch(setMainPage("mainPage"))}} className="mainFooterHome" xmlns="http://www.w3.org/2000/svg" width="24" height="22"
                         viewBox="0 0 24 22" fill="none">
                        <path
                            d="M10.2343 0.491678C10.617 0.193938 11.083 0.0228272 11.5674 0.00212779C12.0519 -0.0185716 12.5307 0.112169 12.9374 0.376178L13.0996 0.492844L22.8809 8.09951C23.7221 8.75401 23.3126 10.0735 22.2988 10.182L22.1634 10.189H21.0003V19.5223C21.0005 20.111 20.7781 20.678 20.3779 21.1096C19.9776 21.5413 19.429 21.8057 18.8419 21.8498L18.6669 21.8557H4.66695C4.07848 21.8556 3.51178 21.6331 3.08038 21.2329C2.64898 20.8326 2.38475 20.2842 2.34062 19.6973L2.33362 19.5223V10.189H1.17045C0.105283 10.189 -0.383551 8.89634 0.350283 8.18818L0.452949 8.09951L10.2343 0.491678ZM11.6669 2.33384L4.22945 8.11818C4.49662 8.33401 4.66695 8.66418 4.66695 9.03401V19.5223H8.16695V13.689C8.16695 12.7608 8.5357 11.8705 9.19207 11.2141C9.84845 10.5578 10.7387 10.189 11.6669 10.189C12.5952 10.189 13.4854 10.5578 14.1418 11.2141C14.7982 11.8705 15.1669 12.7608 15.1669 13.689V19.5223H18.6669V9.03401C18.6669 8.66418 18.8373 8.33401 19.1044 8.11818L11.6669 2.33384ZM11.6669 12.5223C11.3575 12.5223 11.0608 12.6453 10.842 12.8641C10.6232 13.0828 10.5003 13.3796 10.5003 13.689V19.5223H12.8336V13.689C12.8336 13.3796 12.7107 13.0828 12.4919 12.8641C12.2731 12.6453 11.9764 12.5223 11.6669 12.5223Z"
                            fill={mainPage.mainPage === "mainPage" ? "#EB604A" : "#9D9D9D"}/>
                    </svg>

                    <svg onClick={() => {dispatch(setMainPage("listPage"))}} className="mainFooterList" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                         viewBox="0 0 32 32" fill="none">
                        <path
                            d="M14.4762 11.4287H22.0953M9.9048 11.4287H11.4286M14.4762 16.0002H22.0953M9.9048 16.0002H11.4286M14.4762 20.5716H22.0953M9.9048 20.5716H11.4286M25.1429 23.6192V8.38111C25.1429 7.57284 24.8218 6.79766 24.2503 6.22612C23.6787 5.65458 22.9036 5.3335 22.0953 5.3335H9.9048C9.09652 5.3335 8.32134 5.65458 7.7498 6.22612C7.17827 6.79766 6.85718 7.57284 6.85718 8.38111V23.6192C6.85718 24.4275 7.17827 25.2027 7.7498 25.7742C8.32134 26.3457 9.09652 26.6668 9.9048 26.6668H22.0953C22.9036 26.6668 23.6787 26.3457 24.2503 25.7742C24.8218 25.2027 25.1429 24.4275 25.1429 23.6192Z"
                            stroke={mainPage.mainPage === "listPage" ? "#EB604A" : "#9D9D9D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <div className="footerCircle">
                        <svg className="grayCircle" xmlns="http://www.w3.org/2000/svg" width="80" height="80"
                             viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="40" r="40" fill="#F9F9F9"/>
                        </svg>
                        <svg className="orangeCircle" xmlns="http://www.w3.org/2000/svg" width="68" height="68"
                             viewBox="0 0 68 68" fill="none">
                            <g filter="url(#filter0_d_395_377)">
                                <circle cx="34" cy="30" r="30" fill="#EB604A"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_395_377" x="0" y="0" width="68" height="68"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_395_377"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_395_377"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                        <svg onClick={() => {dispatch(setMainPage("???"))}} className="plusInCircle" xmlns="http://www.w3.org/2000/svg" width="60" height="60"
                             viewBox="0 0 60 60" fill="none">
                            <path
                                d="M15.8333 32C15.0819 32 14.3612 31.7893 13.8299 31.4142C13.2985 31.0391 13 30.5304 13 30C13 29.4696 13.2985 28.9609 13.8299 28.5858C14.3612 28.2107 15.0819 28 15.8333 28H44.1667C44.9181 28 45.6388 28.2107 46.1701 28.5858C46.7015 28.9609 47 29.4696 47 30C47 30.5304 46.7015 31.0391 46.1701 31.4142C45.6388 31.7893 44.9181 32 44.1667 32H15.8333Z"
                                fill="white"/>
                            <path
                                d="M28 15.8333C28 15.0819 28.2107 14.3612 28.5858 13.8299C28.9609 13.2985 29.4696 13 30 13C30.5304 13 31.0391 13.2985 31.4142 13.8299C31.7893 14.3612 32 15.0819 32 15.8333V44.1667C32 44.9181 31.7893 45.6388 31.4142 46.1701C31.0391 46.7015 30.5304 47 30 47C29.4696 47 28.9609 46.7015 28.5858 46.1701C28.2107 45.6388 28 44.9181 28 44.1667V15.8333Z"
                                fill="white"/>
                        </svg>
                    </div>


                    <svg onClick={() => {dispatch(setMainPage("alarmPage"))}} className="mainFooterAlarm" xmlns="http://www.w3.org/2000/svg" width="20" height="22"
                         viewBox="0 0 20 22" fill="none">
                        <path
                            d="M19.2607 14.5276L17.2808 12.5367V7.63101C17.3072 5.80932 16.6735 4.03962 15.4969 2.64868C14.3202 1.25773 12.6801 0.339475 10.8792 0.0634629C9.83408 -0.074175 8.7716 0.0126623 7.76267 0.318181C6.75375 0.623699 5.82158 1.14087 5.02837 1.83519C4.23516 2.52951 3.59914 3.38502 3.16275 4.34462C2.72637 5.30422 2.49965 6.34585 2.49772 7.40002V12.5367L0.517844 14.5276C0.269156 14.7804 0.100511 15.101 0.0329936 15.4491C-0.0345239 15.7973 0.00208109 16.1576 0.138232 16.4851C0.274384 16.8125 0.50404 17.0926 0.798493 17.2903C1.09295 17.4879 1.43913 17.5944 1.79377 17.5964H5.48954V17.9704C5.54092 19.087 6.03286 20.1378 6.85756 20.8924C7.68226 21.647 8.77246 22.0439 9.88928 21.9961C11.0061 22.0439 12.0963 21.647 12.921 20.8924C13.7457 20.1378 14.2376 19.087 14.289 17.9704V17.5964H17.9848C18.3394 17.5944 18.6856 17.4879 18.9801 17.2903C19.2745 17.0926 19.5042 16.8125 19.6403 16.4851C19.7765 16.1576 19.8131 15.7973 19.7456 15.4491C19.678 15.101 19.5094 14.7804 19.2607 14.5276ZM12.0891 17.9704C12.0281 18.4995 11.7654 18.9846 11.3556 19.3247C10.9458 19.6649 10.4205 19.8338 9.88928 19.7963C9.35803 19.8338 8.83279 19.6649 8.42299 19.3247C8.01318 18.9846 7.75041 18.4995 7.68941 17.9704V17.5964H12.0891V17.9704ZM2.75071 15.3965L4.04863 14.0986C4.2545 13.894 4.41784 13.6506 4.52922 13.3825C4.6406 13.1145 4.69782 12.827 4.69759 12.5367V7.40002C4.69819 6.65801 4.8575 5.92471 5.16484 5.24933C5.47217 4.57396 5.92041 3.97213 6.47948 3.48426C7.03101 2.98454 7.68454 2.61063 8.39484 2.38843C9.10514 2.16622 9.85525 2.10102 10.5932 2.19733C11.8653 2.40388 13.0199 3.06299 13.8445 4.05334C14.6691 5.04368 15.1082 6.29859 15.081 7.58701V12.5367C15.0793 12.8262 15.1348 13.1132 15.2443 13.3813C15.3537 13.6493 15.515 13.8931 15.7189 14.0986L17.0278 15.3965H2.75071Z"
                            fill={mainPage.mainPage === "alarmPage" ? "#EB604A" : "#9D9D9D"}/>
                    </svg>

                    <svg onClick={() => {dispatch(setMainPage("profilePage"))}} className="mainFooterProfile" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                         viewBox="0 0 18 18" fill="none">
                        <path
                            d="M9 9C11.4862 9 13.5 6.98625 13.5 4.5C13.5 2.01375 11.4862 0 9 0C6.51375 0 4.5 2.01375 4.5 4.5C4.5 6.98625 6.51375 9 9 9ZM9 11.25C5.99625 11.25 0 12.7575 0 15.75V16.875C0 17.4937 0.50625 18 1.125 18H16.875C17.4937 18 18 17.4937 18 16.875V15.75C18 12.7575 12.0037 11.25 9 11.25Z"
                            fill={mainPage.mainPage === "profilePage" ? "#EB604A" : "#9D9D9D"}/>
                    </svg>
                </div>
            </div>
        </nav>
    );
}

export default MainFooter;