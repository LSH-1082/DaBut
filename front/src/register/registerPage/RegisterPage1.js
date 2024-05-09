import RegisterFooter from "../registerFooter/RegisterFooter";
import "./RegisterPage1.css";
import AgeSelect from "../../component/select/AgeSelect";
import {useSelector, useDispatch} from "react-redux";
import {setGender, setHeight, setKakaoId, setName, setNickname, setSmoke} from "../../store/user";
import SelectRange from "../range/SelectRange";
import {useState} from "react";
import WeightSelect from "../../component/select/WeightSelect";

const RegisterPage1 = () => {
    let user = useSelector(state => state.user);
    let dispatch = useDispatch();

    const [height, setHei] = useState(user.height);
    const [smoke, setSmk] = useState("");

    const changeHeight = (value) => {
        dispatch(setHeight(value[0]));
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
                                dispatch(setGender("M"))
                            }} className={user.gender === "M" ? "selectedGender" : "genderButton"}>남성
                            </button>
                            <button onClick={() => {
                                dispatch(setGender("F"))
                            }} className={user.gender === "F" ? "selectedGender" : "genderButton"}>여성
                            </button>
                        </div>
                    </div>
                    <div className="name">
                        <p>이름은</p>
                        <div className="nameInput">
                            <input type="text" value={user.name || ""} onChange={(e) => {
                                dispatch(setName(e.target.value))
                            }}/>
                        </div>
                    </div>
                    <div className="kakaoTitle">
                        <p className="kakaoText">카카오톡ID</p>
                        <div className="nameInput">
                            <input type="text" value={user.kakaoId || ""} onChange={(e) => {
                                dispatch(setKakaoId(e.target.value))
                            }}/>
                            <p className="kakaoUnderText">매칭이 완료되었을 시에만 공개됩니다</p>
                        </div>
                    </div>
                    <div className="name">
                        <p>별명은</p>
                        <div className="nameInput">
                            <input type="text" value={user?.nickname || ''} onChange={(e) => {
                                dispatch(setNickname(e.target.value))
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
                        <WeightSelect/>
                    </div>
                    <div className="smoke">
                        <p>흡연유무</p>
                        <div className="smokeButtonDiv">
                            <button onClick={() => {
                                setSmk("F");
                                dispatch(setSmoke(false));
                            }} className={smoke === "F" ? "selectedSmoke" : "smokeButton"}>안펴!
                            </button>
                            <button onClick={() => {
                                setSmk("T");
                                dispatch(setSmoke(true));
                            }} className={smoke === "T" ? "selectedSmoke" : "smokeButton"}>흡연자야!
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