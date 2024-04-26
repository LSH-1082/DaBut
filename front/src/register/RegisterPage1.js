import RegisterFooter from "./RegisterFooter";
import "./RegisterPage1.css";
import {useState} from "react";
import AgeSelect from "./select/AgeSelect";

const RegisterPage1 = () => {
    const [selectedAge, setSelectedAge] = useState("");
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedSmoke, setSelectedSmoke] = useState("");
    const [height, setHeight] = useState(170);
    const [name, setName] = useState("");

    const changeAge = (e) => {
        setSelectedAge(e.target.value);
    }

    const changeHeight = (e) => {
        setHeight(e.target.value);
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
                            <button onClick={() => {setSelectedGender("M")}} className={selectedGender === "M" ? "selectedGender" : "genderButton"}>남성</button>
                            <button onClick={() => {setSelectedGender("F")}} className={selectedGender === "F" ? "selectedGender" : "genderButton"}>여성</button>
                        </div>
                    </div>
                    <div className="name">
                        <p>이름은</p>
                        <div className="nameInput">
                            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="age">
                        <p>나이는</p>
                        <AgeSelect />
                    </div>
                    <div className="height">
                        <p>키는</p>

                        <input type="range" min="140" max="200" value={height} step="5" onChange={changeHeight}/>
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
                            <button onClick={() => {setSelectedSmoke("T")}} className={selectedSmoke === "T" ? "selectedSmoke" : "smokeButton"}>안펴!</button>
                            <button onClick={() => {setSelectedSmoke("F")}} className={selectedSmoke === "F" ? "selectedSmoke" : "smokeButton"}>흡연자야!</button>
                        </div>
                    </div>
                </div>
            </div>
            <RegisterFooter/>
        </div>
    );
}
export default RegisterPage1;