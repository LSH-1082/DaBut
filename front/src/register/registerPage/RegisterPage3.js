import RegisterFooter from "../registerFooter/RegisterFooter";
import {useSelector, useDispatch} from "react-redux";
import "./RegisterPage3.css";
import {setFrequency, setOccupation, setPersonality} from "../../store/user";
import {useState} from "react";
import MajorSelect from "../../component/select/MajorSelect";
import SelectRange from "../range/SelectRange";

const RegisterPage3 = () => {
    let user = useSelector(state => state.user);
    let dispatch = useDispatch();
    let username = user.name.slice(1);

    const [isActive, setIsActive] = useState(false);
    const [frequency, setFreq] = useState(user.frequency);

    const changeFrequency = (value) => {
        dispatch(setFrequency(value[0]));
        setFreq(value[0]);
    }


    return (
        <div className="RegisterPage3">
            <div className="registerContent">
                <div className="registerPage3Title">
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
                                className={user.occupation === "student" ? "selectedThreeOccupation" : "three"}
                                onClick={() => {
                                    dispatch(setOccupation("student"));
                                    setIsActive(true)
                                }}>대학생
                            </button>
                            <button
                                className={user.occupation === "graduate" ? "selectedFourOccupation" : "four"}
                                onClick={() => {
                                    dispatch(setOccupation("graduate"));
                                    setIsActive(false)
                                }}>대학원생
                            </button>
                            <button
                                className={user.occupation === "salary" ? "selectedThreeOccupation" : "three"}
                                onClick={() => {
                                    dispatch(setOccupation("salary"));
                                    setIsActive(false)
                                }}>직장인
                            </button>
                        </div>
                        <div className="occupation2">
                            <button
                                className={user.occupation === "free" ? "selectedFourOccupation" : "four"}
                                onClick={() => {
                                    dispatch(setOccupation("free"));
                                    setIsActive(false)
                                }}>프리랜서
                            </button>
                            <button className={user.occupation === "house" ? "selectedTwoOccupation" : "two"}
                                    onClick={() => {
                                        dispatch(setOccupation("house"));
                                        setIsActive(false)
                                    }}>주부
                            </button>
                            <button className={user.occupation === "none" ? "selectedTwoOccupation" : "two"}
                                    onClick={() => {
                                        dispatch(setOccupation("none"));
                                        setIsActive(false)
                                    }}>무직
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`majorPage ${user.occupation === "student" ? 'active' : ''}`}>
                    {user.occupation === "student" ? (
                        <div className="majorDiv">
                            <p className="majorTitle">대학생이시네요?</p>
                            <p className="registerMajorTitle">전공 분야를 알려주세요 !</p>
                            <div className="mSelect">
                                <MajorSelect major={user.major}/>
                            </div>
                        </div>

                    ) : (<></>)}
                </div>
                <div className={`underDiv ${user.occupation === "student" ? 'active' : ''}`}>
                    <div className="personalityDiv">
                        <p className={`personalityTitle ${isActive ? 'active' : ''}`}>성격은요?</p>
                        <div className="selectOccupation">
                            <div className="personality1">
                                <button
                                    className={user.personality === "activity" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setPersonality("activity"))
                                    }}>활발한
                                </button>
                                <button
                                    className={user.personality === "enthusiastic" ? "selectedFourOccupation" : "four"}
                                    onClick={() => {
                                        dispatch(setPersonality("enthusiastic"))
                                    }}>적극적인
                                </button>
                                <button
                                    className={user.personality === "positive" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setPersonality("positive"))
                                    }}>긍정적
                                </button>
                            </div>
                            <div className="personality2">
                                <button
                                    className={user.personality === "clean" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setPersonality("clean"))
                                    }}>깔끔한
                                </button>
                                <button
                                    className={user.personality.personality === "timid" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setPersonality({personality: "timid"}))
                                    }}>소심한
                                </button>
                                <button
                                    className={user.personality === "lively" ? "selectedThreeOccupation" : "three"}
                                    onClick={() => {
                                        dispatch(setPersonality("lively"))
                                    }}>발랄한
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="snsDiv">
                        <p className="registerPageTitle">SNS 사용빈도는</p>
                        <div className="snsSelectDiv">
                            <div className="snsSelect">
                                {frequency === 4 ? (<p className="snsFrequency">“ 맛집가면 스토리는 무조건! “</p>) : (<></>)}
                                {frequency === 3 ? (<p className="snsFrequency">“ 거의 매일 접속해! “</p>) : (<></>)}
                                {frequency === 2 ? (<p className="snsFrequency">“ 가끔씩 해! “</p>) : (<></>)}
                                {frequency === 1 ? (<p className="snsFrequency">“ 계정은 있어! “</p>) : (<></>)}
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

export default RegisterPage3;