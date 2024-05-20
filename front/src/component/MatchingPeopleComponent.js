import "./MatchingPeopleComponent.css";
import {renderIcon, renderPurpose} from "./renderComponent";
import {useNavigate} from "react-router-dom";

const MatchingPeopleComponent = (props) => {
    const user = props.user;
    const navigate = useNavigate();


    const clickPeople = (user) => {
        navigate("/matching/info", {state: {user: user}});
    }

    return (
        <div className="matchingPeopleDiv" onClick={() => clickPeople(user)}>
            <div className="peopleFaceDiv">
                <div className="people">
                    <div className="peopleFace">
                        {renderIcon(user.face)}
                    </div>
                    <p className="peopleFaceText">{user.nickname}</p>

                </div>
                <div className="matchingComp">
                    {renderPurpose(user.matchingState)}
                </div>
            </div>
            <div className="peopleIntro">
                <textarea readOnly={true} disabled={true} className="peopleIntroText" style={{ pointerEvents: 'none' }} value={user.intro}></textarea>
            </div>
        </div>
    );
}

export default MatchingPeopleComponent;