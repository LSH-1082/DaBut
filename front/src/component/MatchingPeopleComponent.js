import "./MatchingPeopleComponent.css";
import {useSelector} from "react-redux";
import CatIconComponent from "./CatIconComponent";

const MatchingPeopleComponent = () => {
    const user = useSelector(state => state.user);

    //TODO matchingPeopleDiv 백엔드에서 데이터 받아서 for문으로 랜더링 해야함
    //TODO peopleFace에 들어가는 동물 얼굴 컴포넌트로 만들어서(동물 얼굴 컴포넌트를 회원가입 페이지에도 적용) 백엔드 값 받고 랜더링
    //TODO peopleFaceText에 들어가는 닉네임도 값 받아서 랜더링

    return (
        <div className="MatchingPeople">


            <div className="matchingPeopleDiv">
                <div className="peopleFaceDiv">
                    <div className="peopleFace">
                        <CatIconComponent width={48} height={48}/>
                    </div>
                    <p className="peopleFaceText">상큼한 곰돌이</p>
                    <p className="matchingComp">매칭완료</p>
                </div>
                <div className="peopleIntro">
                    <textarea readOnly={true} disabled={true} className="peopleIntroText">{user.intro}</textarea>
                </div>
            </div>

        </div>
    );
}

export default MatchingPeopleComponent;