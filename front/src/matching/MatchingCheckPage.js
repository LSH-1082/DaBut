import MainFooter from "../main/MainFooter";
import "./MatchingCheckPage.css";
import {renderIcon, renderInsta, renderPersonality, renderPurpose} from "../component/renderComponent";
import {useLocation, useNavigate} from "react-router-dom";
import {getMatched, getMatching} from "../api/UserData";
import Cookies from "js-cookie";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../store/matching";

const MatchingCheckPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const matchingPeople = useSelector(state => state.matching.user);
    const date = matchingPeople.connectAt.split('T')[0].split('-');

    const clickButton = (result) => {
        getMatched(result, Cookies.get("accessToken")).then(() => {
            getMatching(Cookies.get("accessToken")).then((res) => dispatch(setUser(res.data)));
        });
    }

    useEffect(() => {
        if(matchingPeople === null){
            getMatching(Cookies.get("accessToken")).then((res) => dispatch(setUser(res.data)));
        }
    }, []);

    return (
        <div className="MatchingCheckPage">
            <div className="MatchingCheck">
                <div className="matchingCheckTitleDiv">
                    <p className="matchingCheckTitle">매칭이 완료되었습니다 !<br/> 프로필을 보고 수락을 완료해주세요 :)</p>
                </div>
                <div className="peopleDiv">
                    <div className="matchingFace">
                        {renderIcon(matchingPeople.face)}
                    </div>
                    <div className="peopleInfo">
                        <p className="matchingPeopleNickname">{matchingPeople.nickname}</p>
                        <p className="matchingPeopleInfo">가입날짜: {date[0]}.{date[1]}.{date[2]} 매칭 완료된 횟수: 6회 신고된 횟수: 0</p>
                    </div>

                </div>
                <hr className="matchingHorizon"/>
                <div className="peopleStatDiv">
                    <div className="peopleStat1Div">
                        <div className="peopleStat">
                            <p>{matchingPeople.height}cm</p>
                        </div>
                        <div className="peopleStat">
                            <p>{matchingPeople.weight}</p>
                        </div>
                        <div className="peopleStat">
                            <p>{matchingPeople.smoke ? "흡연자야!" : "안펴!"}</p>
                        </div>
                    </div>
                    <div className="peopleStat2Div">
                        <div className="peopleStat">
                            <p>{matchingPeople.mbti}</p>
                        </div>
                        <div className="peopleStat">
                            <p>대학생</p>
                        </div>
                        {matchingPeople.occupation === "student" ?
                            (<div className="peopleStat"><p>{matchingPeople.major}</p></div>) : (<></>)
                        }
                    </div>
                    <div className="peopleStat3Div">
                        <div className="peopleStatInsta">
                            {renderInsta(matchingPeople.frequency)}
                        </div>
                    </div>
                    <div className="peopleStat4Div">
                        <div className="peopleStat">
                            {renderPersonality(matchingPeople.personality)}
                        </div>
                        <div className="peoplePurpose">
                            {renderPurpose(matchingPeople.purpose)}
                        </div>
                    </div>
                    <div className="peopleTextArea">
                        <textarea disabled={true} value={matchingPeople.intro}/>
                    </div>

                    <div className="matchingClickButtonDiv">
                        <div className="matchingClickButton">
                            {matchingPeople.myResult === "standby" ? (
                                <>
                                    <button onClick={() => {
                                        clickButton("reject");
                                       navigate("/main");
                                        getMatching(Cookies.get("accessToken"))
                                    }}>거절하기
                                    </button>
                                    <button onClick={() => {
                                        clickButton("accept");
                                    }}>수락하기
                                    </button>
                                </>
                            ) : (<></>)
                            }
                            {matchingPeople.myResult === "accept"? (
                                <div className="waitPeople">
                                    <p>상대방의 답변을 기다리는 중 . . .</p>
                                </div>
                            ) : (<></>)
                            }

                        </div>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
}

export default MatchingCheckPage;