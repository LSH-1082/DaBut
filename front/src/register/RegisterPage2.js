import RegisterFooter from "./RegisterFooter";
import {useSelector, useDispatch} from "react-redux";
import "./RegisterPage2.css";
import {setFrequency, setOccupation, setPersonality} from "../store/user";
import {useState} from "react";
import MajorSelect from "./select/MajorSelect";
import SelectRange from "./range/SelectRange";

const RegisterPage2 = () => {
    let user = useSelector(state => state.user);
    let dispatch = useDispatch();
    let username = user.name.name.slice(1);

    const [isActive, setIsActive] = useState(false);
    const [frequency, setFreq] = useState(user.frequency);

    const changeFrequency = (value) => {
        dispatch(setFrequency({frequency: value[0]}));
        setFreq(value[0]);
    }


    return (
        <div className="RegisterPage2">
            <div className="registerContent">
                <div className="registerPage2Title">
                    <p className="username">{username}</p>
                    <p className="nameTitle">님은 어떤 사람인가요?</p>
                </div>
                <div className="smallTextDiv">
                    <p className="registerSmallText">조금씩 가까워지는 중이에요 ☺️</p>
                </div>

                <div className="occupationDiv">
                    <p className="registerPageTitle">직업은 무엇인가요?</p>
                    <div className="selectOccupation">
                        <div className="occupation1">
                            <button
                                className={user.occupation.occupation === "student" ? "selectedThreeOccupation" : "three"}
                                onClick={() => {
                                    dispatch(setOccupation({occupation: "student"}));
                                    setIsActive(true)
                                }}>대학생
                            </button>
                            <button
                                className={user.occupation.occupation === "graduate" ? "selectedFourOccupation" : "four"}
                                onClick={() => {
                                    dispatch(setOccupation({occupation: "graduate"}));
                                    setIsActive(false)
                                }}>대학원생
                            </button>
                            <button
                                className={user.occupation.occupation === "salary" ? "selectedThreeOccupation" : "three"}
                                onClick={() => {
                                    dispatch(setOccupation({occupation: "salary"}));
                                    setIsActive(false)
                                }}>직장인
                            </button>
                        </div>
                        <div className="occupation2">
                            <button
                                className={user.occupation.occupation === "free" ? "selectedFourOccupation" : "four"}
                                onClick={() => {
                                    dispatch(setOccupation({occupation: "free"}));
                                    setIsActive(false)
                                }}>프리랜서
                            </button>
                            <button className={user.occupation.occupation === "house" ? "selectedTwoOccupation" : "two"}
                                    onClick={() => {
                                        dispatch(setOccupation({occupation: "house"}));
                                        setIsActive(false)
                                    }}>주부
                            </button>
                            <button className={user.occupation.occupation === "none" ? "selectedTwoOccupation" : "two"}
                                    onClick={() => {
                                        dispatch(setOccupation({occupation: "none"}));
                                        setIsActive(false)
                                    }}>무직
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`majorPage ${isActive ? 'active' : ''}`}>
                    {user.occupation.occupation === "student" ? (
                        <div className="majorDiv">
                            <p className="majorTitle">대학생이시네요?</p>
                            <p className="registerMajorTitle">전공 분야를 알려주세요 !</p>
                            <div className="mSelect">
                                <MajorSelect/>
                            </div>
                        </div>

                    ) : (<></>)}
                </div>
                <div className={`underDiv ${isActive ? 'active' : ''}`}>
                    <div className="personalityDiv">
                        <p className={`personalityTitle ${isActive ? 'active' : ''}`}>성격은요?</p>
                        <div className="selectOccupation">
                            <div className="personality1">
                                <button
                                    className={user.personality.personality === "activity" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setPersonality({personality: "activity"}))
                                    }}>활발한
                                </button>
                                <button
                                    className={user.personality.personality === "enthusiastic" ? "selectedFourOccupation" : "four"}
                                    onClick={() => {
                                        dispatch(setPersonality({personality: "enthusiastic"}))
                                    }}>적극적인
                                </button>
                                <button
                                    className={user.personality.personality === "positive" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setPersonality({personality: "positive"}))
                                    }}>긍정적
                                </button>
                            </div>
                            <div className="personality2">
                                <button
                                    className={user.personality.personality === "clean" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setPersonality({personality: "clean"}))
                                    }}>깔끔한
                                </button>
                                <button
                                    className={user.personality.personality === "timid" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setPersonality({personality: "timid"}))
                                    }}>소심한
                                </button>
                                <button
                                    className={user.personality.personality === "lively" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setPersonality({personality: "lively"}))
                                    }}>발랄한
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="snsDiv">
                        <p className="registerPageTitle">SNS 사용빈도는</p>
                        <div className="snsSelectDiv">
                            <div className="snsSelect">
                                {frequency === 4 ? (<p className="snsFrequency">“ 맛집가면 스토리는 무조건 “</p>) : (<></>)}
                                {frequency === 3 ? (<p className="snsFrequency">“ 3단계 “</p>) : (<></>)}
                                {frequency === 2 ? (<p className="snsFrequency">“ 2단계 “</p>) : (<></>)}
                                {frequency === 1 ? (<p className="snsFrequency">“ 1단계 “</p>) : (<></>)}
                                {frequency === 0 ? (<p className="snsFrequency">“ 인스타 안해! “</p>) : (<></>)}
                                <SelectRange min={0} max={4} step={1} values={[frequency]} onChange={(value) => {changeFrequency(value)}}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <RegisterFooter/>
        </div>
    );
}

export default RegisterPage2;