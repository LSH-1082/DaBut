import MainFooter from "../main/MainFooter";
import "./MatchingCheckPage.css";
import {
    renderButton,
    renderIcon,
    renderInsta,
    renderPersonality,
    renderPurpose
} from "../component/renderComponent";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const MatchingHistoryInfoPage = () => {
    const location = useLocation();
    const {user} = location.state;
    const date = user.connectAt.split('T')[0].split('-');

    useEffect(() => {
        console.log(user);
    }, []);

    return (
        <div className="MatchingCheckPage">
            <div className="MatchingCheck">
                <div className="matchingDiv">

                    <div className="matchingCheckTitleDiv">
                        <div className="matchingTextDiv">
                            <div className="matText">
                                <div className="matTextDiv">
                                    {renderPurpose(user.matchingState)}
                                </div>
                                <p className="matchingCheckTitle">분야에서</p>
                            </div>
                        </div>
                        <p className="matchingCheckTitle">매칭되었던 친구의 상세 프로필</p>
                    </div>
                </div>
                <div className="peopleDiv">
                    <div className="matchingFace">
                        {renderIcon(user.face)}
                    </div>
                    <div className="peopleInfo">
                        <p className="matchingPeopleNickname">{user.nickname}</p>
                        <p className="matchingPeopleInfo">가입날짜: {date[0]}.{date[1]}.{date[2]} 매칭 완료된 횟수: 6회 신고된 횟수: 0</p>
                    </div>

                </div>
                <hr className="matchingHorizon"/>
                <div className="peopleStatDiv">
                    <div className="peopleStat1Div">
                        <div className="peopleStat">
                            <p>{user.height}cm</p>
                        </div>
                        <div className="peopleStat">
                            <p>{user.weight}</p>
                        </div>
                        <div className="peopleStat">
                            <p>{user.smoke ? "흡연자야!" : "안펴!"}</p>
                        </div>
                    </div>
                    <div className="peopleStat2Div">
                        <div className="peopleStat">
                            <p>{user.mbti}</p>
                        </div>
                        <div className="peopleStat">
                            <p>대학생</p>
                        </div>
                        {user.occupation === "student" ?
                            (<div className="peopleStat"><p>{user.major}</p></div>) : (<></>)
                        }
                    </div>
                    <div className="peopleStat3Div">
                        <div className="peopleStatInsta">
                            {renderInsta(user.frequency)}
                        </div>
                    </div>
                    <div className="peopleStat4Div">
                        <div className="peopleStat">
                            {renderPersonality(user.personality)}
                        </div>
                        <div className="peoplePurpose">
                            {renderPurpose(user.matchingState)}
                        </div>
                    </div>
                    <div className="peopleTextArea">
                        <textarea disabled={true} value={user.intro}/>
                    </div>

                    <div className="matchingClickButtonDiv">
                        <div className="matchingClickButton">
                            {renderButton(user.result)}
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
}

export default MatchingHistoryInfoPage;