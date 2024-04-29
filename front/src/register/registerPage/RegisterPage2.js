import RegisterFooter from "../registerFooter/RegisterFooter";

import "./RegisterPage2.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import StateSelect from "../select/StateSelect";
import {setMbti} from "../../store/user";

const RegisterPage2 = () => {
    const [isActive, setIsActive] = useState(false);
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");
    const dispatch = useDispatch();
    let user = useSelector(state => state.user);
    let username = user.name.slice(1);

    const clickNoButton = () => {
        setIsActive(false);
        setFirst("n");
        setSecond("o");
        setThird("n");
        setFourth("e");
    }

    useEffect(() => {
        let mbti = first + second + third + fourth;
        dispatch(setMbti(mbti));
    }, [first, second, third, fourth]);

    return (
        <div className="RegisterPage3">
            <div className="registerPage3Content">
                <div className="registerPage3TextDiv">
                    <p className="registerText">안녕하세요</p>
                    <p className="registerNameText">{username}</p>
                    <p className="registerText">님</p>
                </div>
                <div className="registerPage3UnderTextDiv">
                    <p className="registerText">환영합니다!</p>
                    <p className="registerSmallText">환영해요 😊</p>
                </div>
                <div className="mbtiQuestionDiv">
                    <div className="mbtiQuestion">
                        <div className="questionTextDiv">
                            <p>MBTI를</p>
                            <p>아시나요?</p>
                        </div>
                        <div className="mbtiAnswer">
                            <button className={`mbtiYesButton ${isActive ? 'active' : ''}`}
                                    onClick={() => setIsActive(true)}>네
                            </button>
                            <button className={`mbtiNoButton ${isActive ? '' : 'active'}`}
                                    onClick={clickNoButton}>아니요
                            </button>
                        </div>
                    </div>
                    <div className="mbtiSelectDiv">
                        <div className={`mbtiSelect ${isActive ? 'active' : ''}`}>
                            <p>당신의 MBTI를 알려주세요</p>
                        </div>
                        <div className="mbtiSelectButtonDiv">
                            <div className={`mbtiSelectButton ${isActive ? 'active' : ''}`}>
                                <p>외향형</p>
                                <button
                                    className={first === "E" ? "selectedMbtiButton" : `mbtiButton ${isActive ? 'active' : ''}`}
                                    onClick={() => setFirst("E")} disabled={!isActive}>E
                                </button>
                                <button
                                    className={first === "I" ? "selectedMbtiButton" : `mbtiButton ${isActive ? 'active' : ''}`}
                                    onClick={() => setFirst("I")} disabled={!isActive}>I
                                </button>
                                <p>내향형</p>
                            </div>
                            <div className={`mbtiSelectButton ${isActive ? 'active' : ''}`}>
                                <p>감각형</p>
                                <button
                                    className={second === "S" ? "selectedMbtiButton" : `mbtiButton ${isActive ? 'active' : ''}`}
                                    onClick={() => setSecond("S")} disabled={!isActive}>S
                                </button>
                                <button
                                    className={second === "N" ? "selectedMbtiButton" : `mbtiButton ${isActive ? 'active' : ''}`}
                                    onClick={() => setSecond("N")} disabled={!isActive}>N
                                </button>
                                <p>직관형</p>
                            </div>
                            <div className={`mbtiSelectButton ${isActive ? 'active' : ''}`}>
                                <p>사고형</p>
                                <button
                                    className={third === "T" ? "selectedMbtiButton" : `mbtiButton ${isActive ? 'active' : ''}`}
                                    onClick={() => setThird("T")} disabled={!isActive}>T
                                </button>
                                <button
                                    className={third === "F" ? "selectedMbtiButton" : `mbtiButton ${isActive ? 'active' : ''}`}
                                    onClick={() => setThird("F")} disabled={!isActive}>F
                                </button>
                                <p>감정형</p>
                            </div>
                            <div className={`mbtiSelectButton ${isActive ? 'active' : ''}`}>
                                <p>판단형</p>
                                <button
                                    className={fourth === "J" ? "selectedMbtiButton" : `mbtiButton ${isActive ? 'active' : ''}`}
                                    onClick={() => setFourth("J")} disabled={!isActive}>J
                                </button>
                                <button
                                    className={fourth === "P" ? "selectedMbtiButton" : `mbtiButton ${isActive ? 'active' : ''}`}
                                    onClick={() => setFourth("P")} disabled={!isActive}>P
                                </button>
                                <p>인식형</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="selectStateDiv">
                    <div className="selectState">
                        <p>살고 있는 지역을 알려주세요.</p>
                    </div>
                    <div className="selectStateInput">
                        <StateSelect/>
                    </div>
                </div>
            </div>
            <RegisterFooter/>
        </div>
    );
}

export default RegisterPage2;