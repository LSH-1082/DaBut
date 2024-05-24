import "./matchingList.css";
import React, {useEffect, useState} from "react";
import MainFooter from "../main/MainFooter";
import MatchingPeopleComponent from "../component/MatchingPeopleComponent";
import {setMainPage} from "../store/mainPage";
import {useDispatch} from "react-redux";
import {getHistory} from "../api/UserData";
import Cookies from "js-cookie";

const MatchingList = () => {
    const [select, setSelect] = useState("all");
    const [matchingHistory, setMatchingHistory] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMainPage("listPage"));
        getHistory(Cookies.get("accessToken")).then((res) => {
            setMatchingHistory(res.data);
        });
    }, [dispatch]);

    const generateMatchingList = () => {
        return matchingHistory.map((item, index) => (
            <div key={index} className="MatchingPeopleDiv">
                <MatchingPeopleComponent user={item} index={index}/>
            </div>
        ));
    }

    return (
        <div className="MatchingCheckPage">
            <div className="matchingCheck">
                <div className="matchingCheckDiv">
                    <div className="purposeText">
                        <p className={`allPurposeText ${select === "all" ? 'select' : ''}`}
                           onClick={() => setSelect("all")}>전체</p>
                        <div className="allPurposeDiv">
                            <p onClick={() => setSelect("sports")}
                               className={`pText ${select === "sports" ? 'select' : ''}`}>운동/스포츠</p>
                            <p onClick={() => setSelect("pet")}
                               className={`pText ${select === "pet" ? 'select' : ''}`}>반려동물</p>
                            <p onClick={() => setSelect("cook")}
                               className={`pText ${select === "cook" ? 'select' : ''}`}>요리/베이킹</p>
                            <p onClick={() => setSelect("roommate")}
                               className={`pText ${select === "roommate" ? 'select' : ''}`}>룸메이트</p>
                            <p onClick={() => setSelect("study")}
                               className={`pText ${select === "study" ? 'select' : ''}`}>스터디</p>
                            <p onClick={() => setSelect("read")}
                               className={`pText ${select === "read" ? 'select' : ''}`}>독서</p>
                            <p onClick={() => setSelect("eat")}
                               className={`pText ${select === "eat" ? 'select' : ''}`}>밥친구</p>

                            <p onClick={() => setSelect("baby")}
                               className={`pText ${select === "baby" ? 'select' : ''}`}>육아</p>

                            <p onClick={() => setSelect("single")}
                               className={`pText ${select === "single" ? 'select' : ''}`}>돌싱</p>

                            <p onClick={() => setSelect("diet")}
                               className={`pText ${select === "diet" ? 'select' : ''}`}>다이어트</p>

                            <p onClick={() => setSelect("trip")}
                               className={`pText ${select === "trip" ? 'select' : ''}`}>여행</p>

                            <p onClick={() => setSelect("paint")}
                               className={`pText ${select === "paint" ? 'select' : ''}`}>그림</p>

                            <p onClick={() => setSelect("music")}
                               className={`pText ${select === "music" ? 'select' : ''}`}>음악</p>

                            <p onClick={() => setSelect("ott")}
                               className={`pText ${select === "ott" ? 'select' : ''}`}>OTT</p>

                            <p onClick={() => setSelect("dance")}
                               className={`pText ${select === "dance" ? 'select' : ''}`}>춤</p>

                            <p onClick={() => setSelect("photo")}
                               className={`pText ${select === "photo" ? 'select' : ''}`}>사진</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                matchingHistory.length > 0 ?
                    (
                        <div className="MatchingPeople">
                            {generateMatchingList()}
                        </div>
                    ) : (
                        <div className="emptyDiv">
                            <img className="emptyImg" src="/images/empty.png" alt="emptyImg"/>
                            <p className="emptyTitle">앗...</p>
                            <p className="emptyUnder">아직 아무와도 매칭을 하지 않으셨군요!</p>
                            <p className="emptyUnder">매칭을 시작하러 가볼까요?</p>
                        </div>
                    )
            }
            <MainFooter/>
        </div>
    );
}

export default MatchingList;