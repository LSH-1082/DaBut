import "./MatchingPeopleComponent.css";
import CatIconComponent from "./animalIcon/CatIconComponent";

const MatchingPeopleComponent = () => {

    //TODO matchingPeopleDiv 백엔드에서 데이터 받아서 for문으로 랜더링 해야함
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
                    <textarea readOnly={true} disabled={true} className="peopleIntroText"></textarea>
                </div>
            </div>

        </div>
    );
}

export default MatchingPeopleComponent;