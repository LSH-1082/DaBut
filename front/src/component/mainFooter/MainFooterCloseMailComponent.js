import Modal from "react-modal";
import React, {useState} from "react";
import {getCancel, getMatching} from "../../api/UserData";
import Cookies from "js-cookie";
import {setFooterState, setUserDTO} from "../../store/footerState";
import {useDispatch} from "react-redux";

const customModalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 15,
    },
    content: {
        display: "flex",
        width: "320px",
        height: "230px",
        zIndex: 150,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "25px",
        border: "none",
        boxShadow: "2px 2px 2px rgba(0.25, 0.25, 0.25, 0.25)",
        backgroundColor: "white",
        justifyContent: "center",
        alignContent: "center",
        overflow: "auto",
    },
};

const MainFooterCloseMailComponent = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();

    const clickModalButton = () => {
        setModalIsOpen(!modalIsOpen);
        getCancel(Cookies.get("accessToken")).then(() => {
            getMatching(Cookies.get("accessToken")).then((res) => {
                if (res.data.matchingState === "none" && res.data.name !== null) {
                    dispatch(setFooterState("peopleMatch"));
                    dispatch(setUserDTO(res.data));
                } else if (res.data.matchingState !== "none" && res.data.name === null) dispatch(setFooterState("matching"));
                else dispatch(setFooterState("none"));
            });
        });
    }

    const clickCloseMail = () => {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <>
            <svg onClick={clickCloseMail} className="plusInCircle" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
                 fill="none">
                <path
                    d="M42.6166 19.75H17.8847C17.5842 19.75 17.2959 19.8694 17.0834 20.0819C16.8709 20.2945 16.7515 20.5827 16.7515 20.8833V40.3155C16.7515 40.616 16.8709 40.9043 17.0834 41.1168C17.2959 41.3294 17.5842 41.4488 17.8847 41.4488H42.6166C42.9172 41.4488 43.2054 41.3294 43.418 41.1168C43.6305 40.9043 43.7499 40.616 43.7499 40.3155V20.8833C43.7499 20.5827 43.6305 20.2945 43.418 20.0819C43.2054 19.8694 42.9172 19.75 42.6166 19.75ZM19.018 39.1822V22.0166H41.4833V39.1822H19.018Z"
                    fill="white" stroke="white" strokeWidth="0.5"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M43.1891 21.5546L30.7436 32.154C30.5834 32.2906 30.3797 32.3654 30.1692 32.3651C29.9586 32.3648 29.7552 32.2893 29.5954 32.1522L17.3072 21.5528C17.1704 21.4351 17.0729 21.2783 17.0279 21.1036C16.9829 20.9288 16.9925 20.7444 17.0554 20.5753C17.1184 20.4062 17.2316 20.2604 17.3799 20.1575C17.5281 20.0547 17.7044 19.9997 17.8848 20H42.6167C42.7971 20.0003 42.9731 20.0559 43.121 20.1593C43.2689 20.2626 43.3816 20.4088 43.4439 20.5781C43.5062 20.7474 43.5152 20.9317 43.4697 21.1063C43.4241 21.2809 43.3262 21.4373 43.1891 21.5546ZM40.2177 21.7666H20.2609L30.1748 30.3185L40.2177 21.7666Z"
                      fill="white" stroke="white" strokeWidth="0.5"/>
            </svg>
            {
                modalIsOpen ? (<Modal
                    isOpen={true}
                    onRequestClose={clickCloseMail}
                    style={customModalStyles}
                    ariaHideApp={false}
                    shouldCloseOnOverlayClick={true}
                >
                    <div className="modalDiv">
                        <div className="modalNoticeDiv">
                            <div className="noticeCircle">
                                <svg className="handIcon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27"
                                     fill="none">
                                    <path
                                        d="M15.6011 1.6875C15.6011 0.754102 14.8266 0 13.8679 0C12.9093 0 12.1348 0.754102 12.1348 1.6875V12.6562C12.1348 13.1203 11.7448 13.5 11.2682 13.5C10.7916 13.5 10.4016 13.1203 10.4016 12.6562V3.375C10.4016 2.4416 9.62715 1.6875 8.6685 1.6875C7.70985 1.6875 6.93535 2.4416 6.93535 3.375V17.7188C6.93535 17.7979 6.93535 17.8822 6.94076 17.9613L3.66403 14.9238C2.79745 14.1223 1.42718 14.1539 0.598517 14.9977C-0.230146 15.8414 -0.192233 17.1756 0.674342 17.9824L6.76203 23.625C9.09637 25.7924 12.1998 27 15.4278 27H16.4677C21.7321 27 26 22.8445 26 17.7188V6.75C26 5.8166 25.2255 5.0625 24.2668 5.0625C23.3082 5.0625 22.5337 5.8166 22.5337 6.75V12.6562C22.5337 13.1203 22.1437 13.5 21.6671 13.5C21.1905 13.5 20.8006 13.1203 20.8006 12.6562V3.375C20.8006 2.4416 20.026 1.6875 19.0674 1.6875C18.1088 1.6875 17.3342 2.4416 17.3342 3.375V12.6562C17.3342 13.1203 16.9443 13.5 16.4677 13.5C15.9911 13.5 15.6011 13.1203 15.6011 12.6562V1.6875Z"
                                        fill="white"/>
                                </svg>
                            </div>
                        </div>

                        <div className="modalContextDiv">
                            <div className="modalContext">
                                <p className="modalText">아직 매칭이</p>
                                <div>&nbsp;</div>
                                <p className="modalRoommate">완료되지 않았습니다!</p>
                            </div>
                        </div>
                        <div className="modalUnderContextDiv">
                            <div className="modalUnderContext">
                                <p className="modalUnder">매칭을 취소하시겠습니까?</p>
                            </div>
                        </div>


                        <div className="modalButton">
                            <div className="modalButtonDiv">
                                <button className="modalAcceptButton"
                                        onClick={() => clickModalButton()}>네
                                </button>
                                <button className="modalCloseButton"
                                        onClick={() => clickCloseMail()}>아니요
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>) : (<></>)
            }
        </>
    );
}

export default MainFooterCloseMailComponent;