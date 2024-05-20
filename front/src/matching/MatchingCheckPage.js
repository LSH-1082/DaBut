import {useEffect} from "react";
import {getMatching} from "../api/UserData";
import Cookies from "js-cookie";
import MainFooter from "../main/MainFooter";
import "./MatchingCheckPage.css";
import CatIconComponent from "../component/animalIcon/CatIconComponent";

const MatchingCheckPage = () => {

    useEffect(() => {
        getMatching(Cookies.get("accessToken")).then((res) => {
            console.log(res.data);
        });
    }, []);

    return (
        <div className="MatchingCheckPage">
            <div className="MatchingCheck">
                <p className="matchingCheckTitle">매칭이 완료되었습니다 !<br/> 프로필을 보고 수락을 완료해주세요 :)</p>
                <div className="peopleDiv">
                    <div className="matchingFace">
                        <CatIconComponent width={47} height={49}/>
                    </div>
                    <div className="peopleInfo">
                        <p className="matchingPeopleNickname">상큼한 곰돌이</p>
                        <p className="matchingPeopleInfo">가입날짜: 2024.04.15 매칭 완료된 횟수: 6회 신고된 횟수: 0</p>
                    </div>

                </div>
                <hr className="matchingHorizon"/>
                <div className="peopleStatDiv">
                    <div className="peopleStat1Div">
                        <div className="peopleStat">
                            <p>168cm</p>
                        </div>
                        <div className="peopleStat">
                            <p>보통체중</p>
                        </div>
                        <div className="peopleStat">
                            <p>흡연자야!</p>
                        </div>
                    </div>
                    <div className="peopleStat2Div">
                        <div className="peopleStat">
                            <p>ENFJ</p>
                        </div>
                        <div className="peopleStat">
                            <p>공학계열</p>
                        </div>
                        <div className="peopleStat">
                            <p>대학생</p>
                        </div>
                    </div>
                    <div className="peopleStat3Div">
                        <div className="peopleStatInsta">
                            <p>맛집에 가면 스토리는 무조건 올려 !</p>
                        </div>
                    </div>
                    <div className="peopleStat4Div">
                        <div className="peopleStat">
                            <p>활발한</p>
                        </div>
                        <div className="peoplePurpose">
                            <p>운동 / 스포츠</p>
                        </div>
                    </div>
                    <div className="peopleTextArea">
                        <textarea disabled={true}></textarea>
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