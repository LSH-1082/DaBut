import "./MainFooter.css";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setMainPage} from "../store/mainPage";
import {useEffect, useState} from "react";
import MainFooterFingerComponent from "../component/mainFooter/MainFooterFingerComponent";
import MainFooterCloseMailComponent from "../component/mainFooter/MainFooterCloseMailComponent";
import MainFooterOpenMailComponent from "../component/mainFooter/MainFooterOpenMailComponent";
import {getMatching} from "../api/UserData";
import Cookies from "js-cookie";
import {setFooterState, setUserDTO} from "../store/footerState";
import {setUser} from "../store/matching";

const MainFooter = (props) => {
    const navigate = useNavigate();
    const mainPage = useSelector(state => state.mainPage);
    const footerState = useSelector(state => state.footerState.footerState);
    const user = useSelector(state => state.footerState.userDTO);
    const dispatch = useDispatch();

    const clickMainFooterButton = (value) => {
        dispatch(setMainPage(value));
        if (value === "mainPage") navigate("/main");
        if (value === "metaPage") navigate("/meta");
        if (value === "listPage") navigate("/list");
        if (value === "profilePage") navigate("/profile");
    }

    useEffect(() => {
        getMatching(Cookies.get("accessToken")).then((res) => {
            console.log(res.data);
            if (res.data.matchingState === "none" && res.data.name !== null) {
                dispatch(setFooterState("peopleMatch"));
                dispatch(setUserDTO(res.data));
                dispatch(setUser(res.data));
            }
            else if(res.data.matchingState !== "none" && res.data.name === null) dispatch(setFooterState("matching"));
            else dispatch(setFooterState("none"));
        });
    }, []);

    return (
        <nav className="MainNav">
            <div className="MainFooterDiv">
                <div className="MainFooter">
                    <svg onClick={() => {
                        clickMainFooterButton("mainPage")
                    }} className="mainFooterHome" xmlns="http://www.w3.org/2000/svg" width="24" height="22"
                         viewBox="0 0 24 22" fill="none">
                        <path
                            d="M10.2343 0.491678C10.617 0.193938 11.083 0.0228272 11.5674 0.00212779C12.0519 -0.0185716 12.5307 0.112169 12.9374 0.376178L13.0996 0.492844L22.8809 8.09951C23.7221 8.75401 23.3126 10.0735 22.2988 10.182L22.1634 10.189H21.0003V19.5223C21.0005 20.111 20.7781 20.678 20.3779 21.1096C19.9776 21.5413 19.429 21.8057 18.8419 21.8498L18.6669 21.8557H4.66695C4.07848 21.8556 3.51178 21.6331 3.08038 21.2329C2.64898 20.8326 2.38475 20.2842 2.34062 19.6973L2.33362 19.5223V10.189H1.17045C0.105283 10.189 -0.383551 8.89634 0.350283 8.18818L0.452949 8.09951L10.2343 0.491678ZM11.6669 2.33384L4.22945 8.11818C4.49662 8.33401 4.66695 8.66418 4.66695 9.03401V19.5223H8.16695V13.689C8.16695 12.7608 8.5357 11.8705 9.19207 11.2141C9.84845 10.5578 10.7387 10.189 11.6669 10.189C12.5952 10.189 13.4854 10.5578 14.1418 11.2141C14.7982 11.8705 15.1669 12.7608 15.1669 13.689V19.5223H18.6669V9.03401C18.6669 8.66418 18.8373 8.33401 19.1044 8.11818L11.6669 2.33384ZM11.6669 12.5223C11.3575 12.5223 11.0608 12.6453 10.842 12.8641C10.6232 13.0828 10.5003 13.3796 10.5003 13.689V19.5223H12.8336V13.689C12.8336 13.3796 12.7107 13.0828 12.4919 12.8641C12.2731 12.6453 11.9764 12.5223 11.6669 12.5223Z"
                            fill={mainPage.mainPage === "mainPage" ? "#EB604A" : "#9D9D9D"}/>
                    </svg>

                    <svg onClick={() => {
                        clickMainFooterButton("metaPage")
                    }} className="mainFooterAlarm" xmlns="http://www.w3.org/2000/svg" width="26" height="25"
                         viewBox="0 0 26 25" fill="none">
                        <path
                            d="M2 6.66667C2 7.90434 2.51507 9.09133 3.4319 9.9665C4.34874 10.8417 5.59223 11.3333 6.88883 11.3333C8.18543 11.3333 9.42892 10.8417 10.3458 9.9665C11.2626 9.09133 11.7777 7.90434 11.7777 6.66667C11.7777 5.42899 11.2626 4.242 10.3458 3.36683C9.42892 2.49167 8.18543 2 6.88883 2C5.59223 2 4.34874 2.49167 3.4319 3.36683C2.51507 4.242 2 5.42899 2 6.66667Z"
                            stroke={mainPage.mainPage === "metaPage" ? "#EB604A" : "#9D9D9D"} strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M6.88916 2V6.66667H11.778M9.33357 18.3333V23M19.1112 14.8333V23M14.2224 13.6667V23M24.0001 12.5V23"
                            stroke={mainPage.mainPage === "metaPage" ? "#EB604A" : "#9D9D9D"} strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round"/>
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
                        {footerState === "" ? (<MainFooterFingerComponent purpose={props.purpose}
                                                                    mainPage={mainPage.mainPage}/>) : (<></>)}
                        {footerState === "none" ? (<MainFooterFingerComponent purpose={props.purpose}
                                                                        mainPage={mainPage.mainPage}/>) : (<></>)}
                        {footerState === "matching" ? (<MainFooterCloseMailComponent/>) : (<></>)}
                        {footerState === "peopleMatch" ? (<MainFooterOpenMailComponent matchingPeople={user}/>) : (<></>)}
                    </div>

                    <svg onClick={() => {
                        clickMainFooterButton("listPage")
                    }} className="mainFooterList" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                         viewBox="0 0 32 32" fill="none">
                        <path
                            d="M14.4762 11.4287H22.0953M9.9048 11.4287H11.4286M14.4762 16.0002H22.0953M9.9048 16.0002H11.4286M14.4762 20.5716H22.0953M9.9048 20.5716H11.4286M25.1429 23.6192V8.38111C25.1429 7.57284 24.8218 6.79766 24.2503 6.22612C23.6787 5.65458 22.9036 5.3335 22.0953 5.3335H9.9048C9.09652 5.3335 8.32134 5.65458 7.7498 6.22612C7.17827 6.79766 6.85718 7.57284 6.85718 8.38111V23.6192C6.85718 24.4275 7.17827 25.2027 7.7498 25.7742C8.32134 26.3457 9.09652 26.6668 9.9048 26.6668H22.0953C22.9036 26.6668 23.6787 26.3457 24.2503 25.7742C24.8218 25.2027 25.1429 24.4275 25.1429 23.6192Z"
                            stroke={mainPage.mainPage === "listPage" ? "#EB604A" : "#9D9D9D"} strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <svg onClick={() => {
                        clickMainFooterButton("profilePage")
                    }} className="mainFooterProfile" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
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