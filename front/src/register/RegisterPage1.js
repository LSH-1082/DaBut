import RegisterFooter from "./RegisterFooter";
import "./RegisterPage1.css";
import AgeSelect from "./select/AgeSelect";
import {useSelector, useDispatch} from "react-redux";
import {setGender, setHeight, setName, setSmoke} from "../store/user";
import SelectRange from "./range/SelectRange";
import {useState} from "react";

const RegisterPage1 = () => {
    let user = useSelector(state => state.user);
    let dispatch = useDispatch();

    const [height, setHei] = useState(user.height);

    const changeHeight = (value) => {
        dispatch(setHeight({height: value[0]}));
        setHei(value[0]);
    }

    return (
        <div className="RegisterPage1">
            <div className="registerContent">
                <div className="registerTextDiv">
                    <p className="registerText">안녕하세요!</p>
                    <p className="registerText">다벗입니다 :)</p>
                    <p className="registerSmallText">저에게 당신이 누군지 알려주세요 👐🏻</p>
                </div>
                <div className="registerSelect1">
                    <div className="gender">
                        <p>성별은</p>
                        <div className="genderButtonDiv">
                            <button onClick={() => {
                                dispatch(setGender({gender: "M"}))
                            }} className={user.gender.gender === "M" ? "selectedGender" : "genderButton"}>남성
                            </button>
                            <button onClick={() => {
                                dispatch(setGender({gender: "F"}))
                            }} className={user.gender.gender === "F" ? "selectedGender" : "genderButton"}>여성
                            </button>
                        </div>
                    </div>
                    <div className="name">
                        <p>이름은</p>
                        <div className="nameInput">
                            <input type="text" value={user.name.name || ""} onChange={(e) => {
                                dispatch(setName({name: e.target.value}))
                            }}/>
                        </div>
                    </div>
                    <div className="age">
                        <p>나이는</p>
                        <AgeSelect/>
                    </div>
                    <div className="height">
                        <p>키는</p>
                        <div className="heightRange">
                            <SelectRange min={140} max={200} step={5} values={[height]} onChange={(value) => {
                                changeHeight(value)
                            }}/>
                            <p>{height}cm</p>
                        </div>
                    </div>
                    <div className="name">
                        <p>체형은</p>
                        <div className="nameInput">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="name">
                        <p>MBTI는</p>
                        <div className="nameInput">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="smoke">
                        <p>흡연유무</p>
                        <div className="smokeButtonDiv">
                            <button onClick={() => {
                                dispatch(setSmoke({smoke: "F"}))
                            }} className={user.smoke.smoke === "F" ? "selectedSmoke" : "smokeButton"}>안펴!
                            </button>
                            <button onClick={() => {
                                dispatch(setSmoke({smoke: "T"}))
                            }} className={user.smoke.smoke === "T" ? "selectedSmoke" : "smokeButton"}>흡연자야!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <RegisterFooter/>
        </div>
    );
}
export default RegisterPage1;