import {useEffect, useState} from "react";
import {getMatching} from "../api/UserData";
import Cookies from "js-cookie";
import MainFooter from "../main/MainFooter";
import "./MatchingCheckPage.css";
import CatIconComponent from "../component/animalIcon/CatIconComponent";
import DogIconComponent from "../component/animalIcon/DogIconComponent";
import BearIconComponent from "../component/animalIcon/BearIconComponent";
import DeerIconComponent from "../component/animalIcon/DeerIconComponent";
import DinoIconComponent from "../component/animalIcon/DinoIconComponent";
import FoxIconComponent from "../component/animalIcon/FoxIconComponent";
import FrogIconComponent from "../component/animalIcon/FrogIconComponent";
import RabbitIconComponent from "../component/animalIcon/RabbitIconComponent";
import HamsterIconComponent from "../component/animalIcon/HamsterIconComponent";

const MatchingCheckPage = () => {
    const [matchingPeople, setMatchingPeople] = useState({});

    const renderIcon = (data) => {
        switch (data) {
            case 'cat':
                return <CatIconComponent width={47} height={49}/>;
            case 'dog':
                return <DogIconComponent width={47} height={48}/>;
            case 'bear':
                return <BearIconComponent width={44} height={44}/>;
            case 'deer':
                return <DeerIconComponent width={48} height={48}/>;
            case 'dino':
                return <DinoIconComponent width={40} height={35}/>;
            case 'fox':
                return <FoxIconComponent width={36} height={38}/>;
            case 'frog':
                return <FrogIconComponent width={44} height={36}/>;
            case 'rabbit':
                return <RabbitIconComponent width={45} height={44}/>;
            case 'hamster':
                return <HamsterIconComponent width={36} height={35} vWidth={36} vHeight={35}/>;
        }
    }

    const renderInsta = (data) => {
        switch (data) {
            case 0:
                return <p>인스타 안해!</p>;
            case 1:
                return <p>인스타 계정은 있어!</p>;
            case 2:
                return <p>인스타 가끔씩 해!</p>;
            case 3:
                return <p>인스타 거의 매일 접속해!</p>;
            case 4:
                return <p>맛집에 가면 스토리는 무조건!</p>;
        }
    }

    const renderPersonality = (data) => {
        switch (data) {
            case "activity":
                return <p>활발한</p>;
            case "enthusiastic":
                return <p>적극적</p>;
            case "positive":
                return <p>긍정적</p>;
            case "clean":
                return <p>깔끔한</p>;
            case "timid":
                return <p>소심한</p>;
            case "lively":
                return <p>발랄한</p>;
        }
    }

    const renderPurpose = (data) => {
        switch (data) {
            case "sports":
                return <p>운동/스포츠</p>;
            case "pet":
                return <p>반려동물</p>;
            case "cook":
                return <p>요리/베이킹</p>;
            case "roommate":
                return <p>룸메이트</p>;
            case "study":
                return <p>스터디</p>;
            case "read":
                return <p>독서</p>;
            case "eat":
                return <p>밥친구</p>;
            case "baby":
                return <p>육아</p>;
            case "single":
                return <p>돌싱</p>;
            case "game":
                return <p>게임</p>;
            case "trip":
                return <p>여행</p>;
            case "paint":
                return <p>그림</p>;
            case "music":
                return <p>음악</p>;
            case "OTT":
                return <p>OTT</p>;
            case "dance":
                return <p>춤</p>;
            case "photo":
                return <p>사진</p>;
        }
    }

    useEffect(() => {
        getMatching(Cookies.get("accessToken")).then((res) => {
            setMatchingPeople(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="MatchingCheckPage">
            <div className="MatchingCheck">
                <p className="matchingCheckTitle">매칭이 완료되었습니다 !<br/> 프로필을 보고 수락을 완료해주세요 :)</p>
                <div className="peopleDiv">
                    <div className="matchingFace">
                        {renderIcon(matchingPeople.face)}
                    </div>
                    <div className="peopleInfo">
                        <p className="matchingPeopleNickname">{matchingPeople.nickname}</p>
                        <p className="matchingPeopleInfo">가입날짜: 2024.04.15 매칭 완료된 횟수: 6회 신고된 횟수: 0</p>
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
                            {renderPurpose(matchingPeople.matchingState)}
                        </div>
                    </div>
                    <div className="peopleTextArea">
                        <textarea disabled={true} value={matchingPeople.intro}/>
                    </div>

                    <div className="matchingClickButtonDiv">
                        <div className="matchingClickButton">
                            <button>거절하기</button>
                            <button>수락하기</button>
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
}

export default MatchingCheckPage;