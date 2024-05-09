import "./RegisterPage4.css";
import RegisterFooter from "../registerFooter/RegisterFooter";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const RegisterPage4 = () => {
    let user = useSelector(state => state.user);
    let dispatch = useDispatch();
    let username = user.name.slice(1);

    let place = [];

    const buttonClick = (value) => {
        if (place.findIndex(value) !== null) place.push(value)
    }

    return (
        <div className="RegisterPage4">
            <div className="registerContent">
                <div className="registerPage4Title">
                    <p className="username">{username}</p>
                    <p className='nameTitle'>님은 평소에</p>
                    {/*<p className='nameTitle'>어디를 자주 가시나요?</p>*/}
                </div>
                <div className="registerPage4Title">
                    <p className="register4SmallText">선호하시는 장소를 알려주세요😆</p>
                </div>

                <div className="placeDiv">
                    <div className="selectPlace">
                        <button
                            className={user.place === "park" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>공원
                        </button>
                        <button
                            className={user.place === "golf" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>골프장
                        </button>
                        <button
                            className={user.place === "stage" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>공연장
                        </button>
                    </div>
                    <div className="selectPlace">
                        <button
                            className={user.place === "sing" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>노래방
                        </button>
                        <button
                            className={user.place === "amusement" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>놀이공원
                        </button>
                        <button
                            className={user.place === "playground" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>놀이터
                        </button>
                    </div>
                    <div className="selectPlace">
                        <button
                            className={user.place === "billiards" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>당구장
                        </button>
                        <button
                            className={user.place === "library" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>도서관
                        </button>
                        <button
                            className={user.place === "sea" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>바다
                        </button>
                    </div>
                    <div className="selectPlace">
                        <button
                            className={user.place === "bowling" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>볼링장
                        </button>
                        <button
                            className={user.place === "boardgame" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>보드게임 카페
                        </button>
                    </div>
                    <div className="selectPlace">
                        <button
                            className={user.place === "mountain" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>산
                        </button>
                        <button
                            className={user.place === "pool" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>수영장
                        </button>
                        <button
                            className={user.place === "restaurant" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>식당
                        </button>
                    </div>
                    <div className="selectPlace">
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>술집
                        </button>
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>스키장
                        </button>
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>스크린 골프
                        </button>
                    </div>
                    <div className="selectPlace">
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>스크린 야구
                        </button>
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>스터디 카페
                        </button>
                    </div>
                    <div className="selectPlace">
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>야구장
                        </button>
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>영화관
                        </button>
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>전시회
                        </button>
                    </div>
                    <div className="selectPlace">
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>축제
                        </button>
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>카페
                        </button>
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>클럽
                        </button>
                    </div>
                    <div className="selectPlace">
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>탁구장
                        </button>
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>피시방
                        </button>
                        <button
                            className={user.place === "" ? "selectedThreePlace" : "three"}
                            onClick={() => {
                            }}>헬스장
                        </button>
                    </div>
                </div>
            </div>
            <RegisterFooter/>
        </div>
    );
}

export default RegisterPage4;