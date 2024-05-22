import {getMatching, getRoommate, postFlask} from "../../api/UserData";
import Cookies from "js-cookie";
import React, {useState} from "react";
import Modal from "react-modal";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setFooterState, setUserDTO} from "../../store/footerState";

const customModalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 15,
    },
    content: {
        display: "flex",
        width: "320px",
        height: "220px",
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

const MainFooterFingerComponent = (props) => {
    const purpose = props.purpose;
    const mainPage = props.mainPage;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [roomModalIsOpen, setRoomModalIsOpen] = useState(false);

    const getMatch = () => {
        getMatching(Cookies.get("accessToken")).then((res) => {
            if (res.data.matchingState === "none" && res.data.name !== null) {
                dispatch(setFooterState("peopleMatch"));
                dispatch(setUserDTO(res.data));
            } else if (res.data.matchingState !== "none" && res.data.name === null) dispatch(setFooterState("matching"));
            else dispatch(setFooterState("none"));
        });
    }

    const clickMatching = () => {
        if (mainPage === "mainPage") {
            if (purpose === "") {
                setModalIsOpen(!modalIsOpen);
            } else if (purpose === "roommate") {
                getRoommate(Cookies.get("accessToken")).then((res) => {
                    if (res.data === "") {
                        setRoomModalIsOpen(!roomModalIsOpen);
                    } else postFlask(purpose, Cookies.get("accessToken")).then(() => {
                        getMatch();
                    });
                });
            } else postFlask(purpose, Cookies.get("accessToken")).then(() => {
                getMatch();
            });
        } else navigate("/main");
    }

    const clickRoomModalButton = (data) => {
        if (data === "close") setRoomModalIsOpen(!roomModalIsOpen);
        if (data === "go") {
            setRoomModalIsOpen(!roomModalIsOpen);
            navigate("/roommate");
        }
    }

    const clickModalButton = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <>
            <svg onClick={clickMatching} className="plusInCircle" xmlns="http://www.w3.org/2000/svg" width="60"
                 height="60" viewBox="0 0 60 60" fill="none">
                <path
                    d="M32.9962 39.7332L34 30.5322H41.5C42.163 30.5322 42.7989 30.2638 43.2678 29.7858C43.7366 29.3079 44 28.6597 44 27.9839C44 27.308 43.7366 26.6598 43.2678 26.1819C42.7989 25.704 42.163 25.4355 41.5 25.4355H26.5L28.015 21.5734C28.1415 21.2509 28.202 20.9055 28.1928 20.5584C28.1835 20.2112 28.1048 19.8697 27.9614 19.5546C27.818 19.2396 27.613 18.9578 27.3589 18.7265C27.1048 18.4952 26.807 18.3193 26.4837 18.2095L26.0588 18.0655C25.8203 17.9843 25.5633 17.9785 25.3215 18.0487C25.0797 18.119 24.8644 18.2621 24.7038 18.4592L19.2888 25.0812C19.1025 25.3093 19 25.5986 19 25.8967V39.4516C19 40.1275 19.2634 40.7757 19.7322 41.2536C20.2011 41.7315 20.837 42 21.5 42H30.5125C31.1275 41.9998 31.7209 41.7684 32.1791 41.3502C32.6374 40.932 32.9283 40.3563 32.9962 39.7332Z"
                    fill="white"/>
            </svg>
            {
                roomModalIsOpen ? (<Modal
                    isOpen={true}
                    onRequestClose={clickRoomModalButton}
                    style={customModalStyles}
                    ariaHideApp={false}
                    shouldCloseOnOverlayClick={true}
                >
                    <div className="modalDiv">
                        <div className="modalNoticeDiv">
                            <div className="noticeCircle">
                                <p className="modalNotice">!</p>
                            </div>
                        </div>

                        <div className="modalContextDiv">
                            <div className="modalContext">
                                <p className="modalRoommate">룸메이트 정보</p>
                                <p className="modalText">가 입력되지 않았습니다.</p>
                            </div>
                        </div>
                        <div className="modalUnderContextDiv">
                            <div className="modalUnderContext">
                                <p className="modalUnder">룸메이트 정보를 입력하시겠습니까?</p>
                            </div>
                        </div>


                        <div className="modalButton">
                            <div className="modalButtonDiv">
                                <button className="modalCloseButton"
                                        onClick={() => clickRoomModalButton("close")}>취소
                                </button>
                                <button className="modalAcceptButton"
                                        onClick={() => clickRoomModalButton("go")}>확인
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>) : (<></>)
            }

            {
                modalIsOpen ? (<Modal
                    isOpen={true}
                    onRequestClose={clickModalButton}
                    style={customModalStyles}
                    ariaHideApp={false}
                    shouldCloseOnOverlayClick={true}
                >
                    <div className="modalDiv">
                        <div className="modalNoticeDiv">
                            <div className="noticeCircle">
                                <p className="modalNotice">!</p>
                            </div>
                        </div>

                        <div className="modalContextDiv">
                            <div className="modalContext">
                                <p className="modalRoommate">분야</p>
                                <p className="modalText">가 선택되지 않았습니다.</p>
                            </div>
                        </div>
                        <div className="modalUnderContextDiv">
                            <div className="modalUnderContext">
                                <p className="modalUnder">분야를 선택하고 다시 매칭해주세요!</p>
                            </div>
                        </div>


                        <div className="modalButton">
                            <div className="ModalButtonDiv">
                                <button className="modalCloseButton"
                                        onClick={() => clickModalButton("close")}>확인
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>) : (<></>)
            }
        </>
    );
}

export default MainFooterFingerComponent;