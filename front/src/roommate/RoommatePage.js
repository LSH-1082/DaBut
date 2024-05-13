import "./RoommatePage.css";
import {useEffect, useState} from "react";
import RoommatePageFooter from "./RoommatePageFooter";
import RoomAgeSelect from "../component/select/RoomAgeSelect";
import RoomUnivSelect from "../component/select/RoomUnivSelect";
import {useDispatch, useSelector} from "react-redux";
import {setRoomClean, setRoomIntro, setRoomPattern, setRoomWantAge, setRoomWantUniv} from "../store/roommate";
import {getRoommate} from "../api/UserData";
import Cookies from "js-cookie";

const RoommatePage = () => {
    const [select, setSelect] = useState("");
    const [pattern, setPattern] = useState("");
    const dispatch = useDispatch();
    let roommate = useSelector(state => state.roommate);

    const clickCleanButton = (value) => {
        if (select === value) setSelect("");
        else {
            dispatch(setRoomClean(value));
            setSelect(value);
        }
    }

    const clickPatternButton = (value) => {
        if (pattern === value) setPattern("");
        else {
            dispatch(setRoomPattern(value));
            setPattern(value);
        }
    }

    useEffect(() => {
        getRoommate(Cookies.get("accessToken")).then((res) => {
            if(res.data !== null) {
                dispatch(setRoomClean(res.data.roomClean));
                dispatch(setRoomPattern(res.data.roomPattern));
                dispatch(setRoomWantAge(res.data.roomWantAge));
                dispatch(setRoomWantUniv(res.data.roomWantUniv));
                dispatch(setRoomIntro(res.data.roomIntro));
            }
        });
    }, [dispatch]);

    return (
        <div className="RoommatePage">
            <div className="RoommatePageTitleDiv">
                <p className="roommatePageTitle">나의 생활 정보에</p>
                <p className="roommatePageTitle">대해서 입력해주세요</p>
                <p className="roommatePageUnderTitle">룸메이트를 구하기 위한 정보입니다🙂</p>
            </div>

            <div className="centerDiv">
                <div className="roommateDropDiv">
                    <div className="firstDropDiv">
                        <p className="dropText">선호 나이는?</p>
                        <RoomAgeSelect/>
                    </div>
                    <div className="secondDropDiv">
                        <p className="dropText">구하는 학교는?</p>
                        <RoomUnivSelect/>
                    </div>
                </div>

                <div className="roomCleanDiv">
                    <p className="roomCleanText">청소(ex. 설거지, 빨래)는 일주일에 몇 번 하시나요?</p>
                    <div className="roomCleanButtonDiv">
                        <button className={`roomCleanButton ${select === 'everyday' ? 'selected' : ''}`}
                                onClick={() => clickCleanButton("everyday")}>매일
                        </button>
                        <button className={`roomCleanButton ${select === 'three' ? 'selected' : ''}`}
                                onClick={() => clickCleanButton("three")}>세번
                        </button>
                        <button className={`roomCleanButton ${select === 'one' ? 'selected' : ''}`}
                                onClick={() => clickCleanButton("one")}>하루
                        </button>
                    </div>
                </div>

                <div className="roomPatternDiv">
                    <p className="roomPatternText">생활패턴이 어떻게 되시나요?</p>
                    <div className="roomPatternButtonDiv">
                        <button className={`roomPatternButton ${pattern === 'day' ? 'selected' : ''}`}
                                onClick={() => clickPatternButton("day")}>아침형
                        </button>
                        <button className={`roomPatternButton ${pattern === 'night' ? 'selected' : ''}`}
                                onClick={() => clickPatternButton("night")}>밤형
                        </button>
                        <button className={`roomPatternButton ${pattern === 'dawn' ? 'selected' : ''}`}
                                onClick={() => clickPatternButton("dawn")}>새벽형
                        </button>
                    </div>
                </div>

                <div className="roomTextareaDiv">
                    <p className="roomTextareaText">기타사항</p>
                    <textarea className="roomIntro" placeholder="ex) 저는 애인이 있습니다." value={roommate.roomIntro || ""} onChange={(e) => {dispatch(setRoomIntro(e.target.value))}}></textarea>
                    <p className="roomTextareaUnderText">룸메이트 프로필은 매칭된 상대에게만 공개됩니다</p>
                </div>
            </div>
            <RoommatePageFooter/>
        </div>
    );
}

export default RoommatePage;