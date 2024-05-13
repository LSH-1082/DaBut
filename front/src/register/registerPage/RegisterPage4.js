import RegisterFooter from "../registerFooter/RegisterFooter";
import {useDispatch, useSelector} from "react-redux";
import "./RegisterPage4.css";
import {setFace, setIntro} from "../../store/user";
import {useState} from "react";
import DogIconComponent from "../../component/animalIcon/DogIconComponent";
import CatIconComponent from "../../component/animalIcon/CatIconComponent";
import DeerIconComponent from "../../component/animalIcon/DeerIconComponent";
import RabbitIconComponent from "../../component/animalIcon/RabbitIconComponent";
import FrogIconComponent from "../../component/animalIcon/FrogIconComponent";
import HamsterIconComponent from "../../component/HamsterIconComponent";
import FoxIconComponent from "../../component/animalIcon/FoxIconComponent";
import BearIconComponent from "../../component/animalIcon/BearIconComponent";
import DinoIconComponent from "../../component/animalIcon/DinoIconComponent";

const RegisterPage4 = () => {
    let user = useSelector(state => state.user);
    let username = user.name.slice(1);
    const dispatch = useDispatch();
    const [animal, setAnimal] = useState(user.face);

    const clickFace = (face) => {
        dispatch(setFace(face));
        setAnimal(face);
    }

    return (
        <div className="RegisterPage4">
            <div className="registerPage5TitleDiv">
                <div className="registerPage4Div">
                    <div className="registerPage4Title">
                        <p className="username">{username}</p>
                        <p className="nameTitle">님을 표현해주세요.</p>
                    </div>
                    <div className="smallTextDiv">
                        <p className="register3SmallText">이제 거의 다왔어요 😊️</p>
                    </div>
                </div>
                <div className="selectFaceDiv">
                    <div className="firstFace">
                        <div className={animal === "dog" ? "selectedFaceDiv" : "animal"} onClick={() => {
                            clickFace("dog")
                        }}>
                            <DogIconComponent width={48} height={48} animal={animal}/>
                            <p className={animal === "dog" ? "selectedFace" : "animalP"}>강아지</p>
                        </div>
                        <div className={animal === "cat" ? "selectedFaceDiv" : "animal"} onClick={() => {
                            clickFace("cat")
                        }}>
                            <CatIconComponent width={48} height={48} animal={animal}/>
                            <p className={animal === "cat" ? "selectedFace" : "animalP"}>고양이</p>
                        </div>
                        <div className={animal === "deer" ? "selectedFaceDiv" : "animal"} onClick={() => {
                            clickFace("deer")
                        }}>
                            <DeerIconComponent width={48} height={48} animal={animal}/>
                            <p className={animal === "deer" ? "selectedFace" : "animalP"}>사슴</p>
                        </div>
                    </div>
                    <div className="secondFace">
                        <div className={animal === "rabbit" ? "selectedFaceDiv" : "animal"} onClick={() => {
                            clickFace("rabbit")
                        }}>
                            <RabbitIconComponent width={45} height={44} animal={animal}/>
                            <p className={animal === "rabbit" ? "selectedRabbit" : "rabbitP"}>토끼</p>
                        </div>
                        <div className={animal === "frog" ? "selectedFaceDiv" : "animal"} onClick={() => {
                            clickFace("frog")
                        }}>
                            <FrogIconComponent width={44} height={36} animal={animal}/>
                            <p className={animal === "frog" ? "selectedFrog" : "frogP"}>개구리</p>
                        </div>
                        <div className={animal === "hamster" ? "selectedFaceDiv" : "animal"} onClick={() => {
                            clickFace("hamster")
                        }}>
                            <HamsterIconComponent width={36} height={35} animal={animal}/>
                            <p className={animal === "hamster" ? "selectedFrog" : "hamsterP"}>햄스터</p>
                        </div>
                    </div>
                    <div className="thirdFace">
                        <div className={animal === "fox" ? "selectedFaceDiv" : "animal"} onClick={() => {
                            clickFace("fox")
                        }}>
                            <FoxIconComponent width={38} height={38} animal={animal}/>
                            <p className={animal === "fox" ? "selectedFox" : "foxP"}>여우</p>
                        </div>
                        <div className={animal === "bear" ? "selectedFaceDiv" : "animal"} onClick={() => {
                            clickFace("bear")
                        }}>
                            <BearIconComponent width={44} height={44} animal={animal}/>
                            <p className={animal === "bear" ? "selectedFace" : "animalP"}>곰</p>
                        </div>
                        <div className={animal === "dino" ? "selectedFaceDiv" : "animal"} onClick={() => {
                            clickFace("dino")
                        }}>
                            <DinoIconComponent width={40} height={34} animal={animal}/>
                            <p className={animal === "dino" ? "selectedDino" : "dinoP"}>공룡</p>
                        </div>
                    </div>
                    <div className="textInputDiv">
                        <textarea className="inputIntro" value={user.intro} onChange={(e) => {dispatch(setIntro(e.target.value))}} placeholder="자기소개를 입력해주세요."></textarea>
                    </div>
                    <div className="inputSmallTextDiv">
                        <p className="inputSmallText">본인이 쓴 글은 모두에게 공개됩니다 :)</p>
                    </div>
                </div>
            </div>
            <RegisterFooter/>
        </div>
    );
}

export default RegisterPage4;