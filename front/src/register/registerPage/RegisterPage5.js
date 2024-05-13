import RegisterFooter from "../registerFooter/RegisterFooter";
import "./RegisterPage5.css";
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {setWantGender, setWantHeight, setWantOccupation, setWantSmoke} from "../../store/user";
import WantAgeSelect from "../../component/select/WantAgeSelect";
import SelectRange from "../range/SelectRange";

const RegisterPage5 = () => {
    let user = useSelector(state => state.user);
    let dispatch = useDispatch();

    const [gender, setGender] = useState(user.wantGender ? user.wantGender : "");
    const [smoke, setSmoke] = useState(user.wantSmoke ? "T" : "F");
    const [height, setHeight] = useState(user.wantHeight);

    const changeHeight = (value) => {
        setHeight(value[0]);
        dispatch(setWantHeight(value[0]));
    }

    const clickGender = (value) => {
        setGender(value);
        if(value === "M") dispatch(setWantGender("M"));
        else dispatch(setWantGender("F"));
    }

    return (
        <div className="RegisterPage5">
            <div className="registerContent">
                <div className="registerTextDiv">
                    <p className="registerText">만나고싶은 친구의</p>
                    <p className="registerText">정보를 입력해주세요.</p>
                    <p className="registerSmallText">어떤 친구를 만나고 싶으신가요🤔</p>
                </div>
                <div className="wantDiv">
                    <div className="wantGender">
                        <p>성별은</p>
                        <div className="wantGenderButtonDiv">
                            <button className={gender === "M" ? "wantGenderButtonActive" : "wantGenderButton"}
                                    onClick={() => clickGender("M")}>남성
                            </button>
                            <button className={gender === "F" ? "wantGenderButtonActive" : "wantGenderButton"}
                                    onClick={() => clickGender("F")}>여성
                            </button>
                        </div>
                    </div>
                    <div className="wantAge">
                        <p>나이는</p>
                        <div className="wantAgeSelectDiv">
                            <WantAgeSelect wantAge={user.wantAge}/>
                        </div>
                    </div>
                    <div className="wantHeight">
                        <p>키는</p>
                        <div className="wantHeightDiv">
                            <SelectRange min={140} max={200} step={5} values={[height]} onChange={(value) => {
                                changeHeight(value)
                            }}/>
                            <p>{height}cm</p>
                        </div>
                    </div>
                    <div className="wantSmoke">
                        <p>흡연유무</p>
                        <div className="wantSmokeDiv">
                            <button className={smoke === "F" ? "wantSmokeButtonActive" : "wantSmokeButton"}
                                    onClick={() => {setSmoke("F"); dispatch(setWantSmoke(false));}}>안펴!
                            </button>
                            <button className={smoke === "T" ? "wantSmokeButtonActive" : "wantSmokeButton"}
                                    onClick={() => {setSmoke("T"); dispatch(setWantSmoke(true));}}>흡연자야!
                            </button>
                        </div>
                    </div>
                    <div className="occupationDiv">
                        <p className="wantOccupation">선호하는 직업은 무엇인가요?</p>
                        <div className="selectOccupation">
                            <div className="occupation1">
                                <button
                                    className={user.wantOccupation === "student" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setWantOccupation("student"));
                                    }}>대학생
                                </button>
                                <button
                                    className={user.wantOccupation === "graduate" ? "selectedFourOccupation" : "four"}
                                    onClick={() => {
                                        dispatch(setWantOccupation("graduate"));
                                    }}>대학원생
                                </button>
                                <button
                                    className={user.wantOccupation.wantOccupation === "salary" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setWantOccupation({wantOccupation: "salary"}));
                                    }}>직장인
                                </button>
                            </div>
                            <div className="occupation2">
                                <button
                                    className={user.wantOccupation === "free" ? "selectedFourOccupation" : "four"}
                                    onClick={() => {
                                        dispatch(setWantOccupation("free"));
                                    }}>프리랜서
                                </button>
                                <button
                                    className={user.wantOccupation === "house" ? "selectedTwoOccupation" : "two"}
                                    onClick={() => {
                                        dispatch(setWantOccupation("house"));
                                    }}>주부
                                </button>
                                <button
                                    className={user.wantOccupation === "none" ? "selectedTwoOccupation" : "two"}
                                    onClick={() => {
                                        dispatch(setWantOccupation("none"));
                                    }}>무직
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RegisterFooter/>
        </div>
    );
}
export default RegisterPage5;