import "./MatchingPeopleComponent.css";
import {useSelector} from "react-redux";

const MatchingPeopleComponent = () => {
    const user = useSelector(state => state.user);

    //TODO matchingPeopleDiv 백엔드에서 데이터 받아서 for문으로 랜더링 해야함

    return (
        <div className="MatchingPeople">


            <div className="matchingPeopleDiv">
                <div className="peopleFaceDiv">
                    <div className="peopleFace">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                             fill="none">
                            <path
                                d="M38.1999 21.32C40.4219 23.948 39.9599 27.164 39.9599 30C39.9599 37.812 29.4259 40 23.9999 40C18.5739 40 8.03985 37.812 8.03985 30C8.03985 27.164 7.57785 23.948 9.79985 21.32M38.1999 21.32C37.8099 20.86 37.3399 20.42 36.7679 20M38.1999 21.32C39.5999 22.126 39.9579 19.11 39.9599 18.124V14.376C39.9599 11.126 37.7259 10 35.8099 10C33.8959 10 30.0639 13.126 28.7879 13.126C27.2559 13.126 26.9599 12.812 23.9999 12.812C21.0399 12.812 20.7439 13.126 19.2119 13.126C17.9359 13.126 14.1039 10 12.1899 10C10.2739 10 8.03985 11.126 8.03985 14.376V18.126C8.04385 19.11 8.39985 22.126 9.79985 21.32M9.79985 21.32C10.1899 20.86 10.6599 20.42 11.2319 20"
                                stroke="#A4A4A4" strokeWidth="3" strokeLinecap="round"/>
                            <path
                                d="M25.652 32C25.652 32.346 24.93 32.626 24.038 32.626C23.148 32.626 22.426 32.346 22.426 32C22.426 31.654 23.148 31.376 24.038 31.376C24.93 31.376 25.652 31.656 25.652 32ZM31 27.188C31 28.05 30.566 28.75 30.032 28.75C29.498 28.75 29.064 28.05 29.064 27.188C29.064 26.324 29.498 25.626 30.032 25.626C30.566 25.626 31 26.328 31 27.188ZM19 27.188C19 28.05 18.566 28.75 18.032 28.75C17.498 28.75 17.064 28.05 17.064 27.188C17.064 26.324 17.498 25.626 18.032 25.626C18.566 25.626 19 26.328 19 27.188Z"
                                stroke="#A4A4A4" strokeWidth="3"/>
                            <path
                                d="M44 30.938C43.034 30.312 38.84 28.75 37.226 28.75M40.774 35.938C39.806 35.312 37.548 33.75 35.934 33.75M4 30.938C4.968 30.312 9.16 28.75 10.774 28.75M7.226 35.938C8.194 35.312 10.452 33.75 12.066 33.75"
                                stroke="#A4A4A4" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
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