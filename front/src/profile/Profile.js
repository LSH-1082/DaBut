import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import "./Profile.css";
import MainFooter from "../main/MainFooter";
import {useNavigate} from "react-router-dom";
import {setMainPage} from "../store/mainPage";
import Cookies from "js-cookie";
import {getAllProfile, getProfile} from "../api/UserData";
import {
    setAge, setFace, setFrequency,
    setGender,
    setHeight, setIntro,
    setKakaoId, setMajor,
    setMbti,
    setName,
    setNickname, setOccupation, setPersonality,
    setSmoke, setState, setWantAge, setWantGender, setWantHeight, setWantOccupation, setWantSmoke,
    setWeight
} from "../store/user";
import {setPage} from "../store/page";

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [createYear, setCreateYear] = useState("");
    const [createMonth, setCreateMonth] = useState("");
    const [createDay, setCreateDay] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setMainPage("profilePage"));
        getProfile(Cookies.get("accessToken")).then((res) => {
            setProfile(res.data);
            setCreateYear(res.data.connectedAt.slice(0, 10).slice(2, 4));
            setCreateMonth(res.data.connectedAt.slice(0, 10).slice(5, 7));
            setCreateDay(res.data.connectedAt.slice(0, 10).slice(8, 10));
        });
        getAllProfile(Cookies.get("accessToken")).then((res) => {
            dispatch(setName(res.data.name));
            dispatch(setGender(res.data.gender));
            dispatch(setKakaoId(res.data.kakaoId));
            dispatch(setAge(res.data.age));
            dispatch(setNickname(res.data.nickname));
            dispatch(setHeight(res.data.height));
            dispatch(setWeight(res.data.weight));
            dispatch(setMbti(res.data.mbti));
            dispatch(setSmoke(res.data.smoke));
            dispatch(setOccupation(res.data.occupation));
            dispatch(setMajor(res.data.major));
            dispatch(setPersonality(res.data.personality));
            dispatch(setFrequency(res.data.frequency));
            dispatch(setFace(res.data.face));
            dispatch(setIntro(res.data.intro));
            dispatch(setState(res.data.state));
            dispatch(setWantGender(res.data.wantGender));
            dispatch(setWantAge(res.data.wantAge));
            dispatch(setWantHeight(res.data.wantHeight));
            dispatch(setWantSmoke(res.data.wantSmoke));
            dispatch(setWantOccupation(res.data.wantOccupation));
        });
    }, [dispatch]);

    return (
        <div className="MyPage">
            <div className="mypageContainer">
                <div className="mypageTextDiv">
                    <div className="mypageContent">
                        <p className="title">My</p>
                    </div>
                    <div className="profileNameDiv">
                        <svg className="profileImg" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                             viewBox="0 0 35 35" fill="none">
                            <g clipPath="url(#clip0_181_1705)">
                                <path
                                    d="M17.5 35C12.8587 35 8.40752 33.1563 5.12563 29.8744C1.84374 26.5925 0 22.1413 0 17.5C0 12.8587 1.84374 8.40752 5.12563 5.12563C8.40752 1.84374 12.8587 0 17.5 0C22.1413 0 26.5925 1.84374 29.8744 5.12563C33.1563 8.40752 35 12.8587 35 17.5C35 22.1413 33.1563 26.5925 29.8744 29.8744C26.5925 33.1563 22.1413 35 17.5 35ZM19.3528 17.1828C20.5652 16.7466 21.5849 15.8967 22.2322 14.7826C22.8796 13.6685 23.1131 12.3618 22.8917 11.0925C22.6703 9.82312 22.0082 8.6726 21.0219 7.84345C20.0357 7.01431 18.7885 6.55972 17.5 6.55972C16.2115 6.55972 14.9643 7.01431 13.9781 7.84345C12.9918 8.6726 12.3297 9.82312 12.1083 11.0925C11.8869 12.3618 12.1204 13.6685 12.7678 14.7826C13.4151 15.8967 14.4348 16.7466 15.6472 17.1828C11.9678 18.0709 8.75 21.3828 8.75 24.0625C8.75 24.9266 9.06719 26.2391 10.9375 26.2391H24.0625C25.9328 26.2391 26.25 24.9266 26.25 24.0625C26.25 21.385 23.0344 18.0687 19.3528 17.1828Z"
                                    fill="#E3E3EF"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_181_1705">
                                    <rect width="35" height="35" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="textWrapper">
                            <p className="mypageNameText">{profile.name}</p>
                            <p className="kakaoIdText">{profile.kakaoId}</p>
                        </div>
                    </div>


                    <div className="profileContainerDiv">
                        <div className="profileContainer">
                            <div className="profileTextDiv">
                                <p className="profileText">{profile.age},</p>
                                <p className="profileText">{profile.location},</p>
                                <p className="profileText">{profile.mbti}</p>
                            </div>
                            <div className="createDate">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none">
                                    <path
                                        d="M16.2498 3.33317H13.7498V2.08317C13.7498 1.97266 13.7059 1.86668 13.6278 1.78854C13.5497 1.7104 13.4437 1.6665 13.3332 1.6665C13.2227 1.6665 13.1167 1.7104 13.0385 1.78854C12.9604 1.86668 12.9165 1.97266 12.9165 2.08317V3.33317H7.08317V2.08317C7.08317 1.97266 7.03927 1.86668 6.96113 1.78854C6.88299 1.7104 6.77701 1.6665 6.6665 1.6665C6.556 1.6665 6.45002 1.7104 6.37188 1.78854C6.29374 1.86668 6.24984 1.97266 6.24984 2.08317V3.33317H3.74984C3.19751 3.33383 2.66799 3.55354 2.27743 3.9441C1.88687 4.33465 1.66717 4.86417 1.6665 5.4165V16.2498C1.66717 16.8022 1.88687 17.3317 2.27743 17.7222C2.66799 18.1128 3.19751 18.3325 3.74984 18.3332H16.2498C16.8022 18.3327 17.3319 18.1131 17.7225 17.7225C18.1131 17.3319 18.3327 16.8022 18.3332 16.2498V5.4165C18.3327 4.86411 18.1131 4.33446 17.7225 3.94385C17.3319 3.55325 16.8022 3.33361 16.2498 3.33317ZM17.4998 16.2498C17.4998 16.5814 17.3681 16.8993 17.1337 17.1337C16.8993 17.3681 16.5814 17.4998 16.2498 17.4998H3.74984C3.41832 17.4998 3.10037 17.3681 2.86595 17.1337C2.63153 16.8993 2.49984 16.5814 2.49984 16.2498V9.1665H17.4998V16.2498ZM17.4998 8.33317H2.49984V5.4165C2.49984 4.7265 3.05817 4.1665 3.74984 4.1665H6.24984V5.4165C6.24984 5.52701 6.29374 5.63299 6.37188 5.71113C6.45002 5.78927 6.556 5.83317 6.6665 5.83317C6.77701 5.83317 6.88299 5.78927 6.96113 5.71113C7.03927 5.63299 7.08317 5.52701 7.08317 5.4165V4.1665H12.9165V5.4165C12.9165 5.52701 12.9604 5.63299 13.0385 5.71113C13.1167 5.78927 13.2227 5.83317 13.3332 5.83317C13.4437 5.83317 13.5497 5.78927 13.6278 5.71113C13.7059 5.63299 13.7498 5.52701 13.7498 5.4165V4.1665H16.2498C16.5814 4.1665 16.8993 4.2982 17.1337 4.53262C17.3681 4.76704 17.4998 5.08498 17.4998 5.4165V8.33317Z"
                                        fill="#FFFFFF"/>
                                </svg>
                                <p className="profile">{createYear}년</p>
                                <p className="profile">{createMonth}월</p>
                                <p className="profile">{createDay}일</p>
                            </div>
                            <div className="profileGender">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none">
                                    <path
                                        d="M10.625 2.5V3.75H15.3519L11.6206 7.48125C10.6299 6.68425 9.39651 6.24982 8.125 6.25C5.025 6.25 2.5 8.775 2.5 11.875C2.5 14.975 5.025 17.5 8.125 17.5C11.225 17.5 13.75 14.975 13.75 11.875C13.7494 10.6034 13.315 9.37012 12.5188 8.37875L16.25 4.6475V9.375H17.5V2.5H10.625ZM8.125 7.5C10.5488 7.5 12.5 9.45125 12.5 11.875C12.5 14.2988 10.5488 16.25 8.125 16.25C5.70125 16.25 3.75 14.2988 3.75 11.875C3.75 9.45125 5.70125 7.5 8.125 7.5Z"
                                        fill="#FFFFFF"/>
                                </svg>
                                <p className="profile">{profile.gender === "M" ? "남자" : "여자"}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="managementContainer">
                <div className="managementList">
                    <div className="managementText">
                        <p className="smallText">내 관리</p>
                        <p className="listText" onClick={() => {
                            navigate("/editprofile");
                            dispatch(setPage(7))
                        }}>내 정보 수정</p>
                        <p className="listText" onClick={() => {
                            navigate("/editfriend");
                            dispatch(setPage(12))
                        }}>친구 정보 수정</p>
                        <p className="listText" onClick={() => navigate("/roommate")}>룸메이트 정보 수정</p>
                    </div>
                </div>
            </div>
            <div className="supportContainer">
                <div className="supportList">
                    <div className="supportText">
                        <p className="smallText">고객지원</p>
                        <p className="listText">이벤트</p>
                        <p className="listText">고객센터</p>
                        <p className="listText">문의하기</p>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
}

export default Profile;