import {useSelector} from "react-redux";
import {useEffect} from "react";
import "./Profile.css";

const Profile = () => {
    let user = useSelector(state => state.user);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className="MyPage">
            <div className="mypageContainer">
                <div className="mypageTextDiv">
                    <div className="mypageContent">
                        <p className="title">My</p>
                    </div>
                    <div className="profileNameDiv">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <g clip-path="url(#clip0_181_1705)">
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
                            <p className="mypageNameText">이연지</p>
                            <p className="kakaoIdText">카톡ID</p>
                        </div>
                    </div>
                    <div className="profileContainer">
                        <p className="profileText">01년생, 여자, 경주, ESFP</p>
                        <p className="profile">날짜</p>
                        <p className="profile">성별</p>
                    </div>
                    <p className="introduce">자기소개 전체 보기></p>
                </div>
            </div>
            <div className="managementContainer">
                <div className="managementList">
                    <div className="managementText">
                        <p className="smallText">내 관리</p>
                        <p className="listText">내 정보 수정</p>
                        <p className="listText">친구 정보 수정</p>
                        <p className="listText">룸메이트 정보 수정</p>
                        <p className="listText">매칭 내역 확인하기</p>
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
        </div>
    );
}

export default Profile;