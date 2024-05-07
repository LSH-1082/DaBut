import "./matchingCheck.css";
import {useState} from "react";
import MainFooter from "../main/MainFooter";
import MatchingPeopleComponent from "../component/MatchingPeopleComponent";

const MatchingCheck = () => {
    const [select, setSelect] = useState("all");
    return (
        <div className="MatchingCheckPage">
            <div className="matchingCheckDiv">
                <div className="purposeText">
                    <p className={`allPurposeText ${select === "all" ? 'select' : ''}`} onClick={() => setSelect("all")}>전체</p>
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
            <MatchingPeopleComponent/>
            <MainFooter/>
        </div>
    );
}

export default MatchingCheck;