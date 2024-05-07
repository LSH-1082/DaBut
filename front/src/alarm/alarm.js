import "./alarm.css";
import MainFooter from "../main/MainFooter";

const Alarm = () => {
    return (
        <div className="alarmPage">
            <div className="alarmArrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path
                        d="M0.168574 9.5447L9.54465 19.2579L10.9142 17.9359L3.80732 10.5637L23.0589 10.9037L23.0926 8.99482L3.84103 8.6548L11.2038 1.53819L9.8818 0.168627L0.168574 9.5447Z"
                        fill="#4E4E4E"/>
                </svg>
            </div>
            <div className="alarmTitle">알림</div>
            <div className="matchingAlarm">매칭 알림</div>
            <div className="infoAlarm">공지사항</div>
            <div className="lineAlarm"/>
            <div className="bgAlarm"/>

            <div className="calendar">2023년 10월 8일 일요일</div>
            <div className="rectangle">
                <div className="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="44" viewBox="0 0 43 44" fill="none">
                        <ellipse cx="21.5" cy="22" rx="21.5" ry="22" fill="#EB604A"/>
                    </svg>
                </div>
                <div className="rectangle-border-radius"/>
                <div className="text-red">매칭</div>
                <div className="text-black">이 완료되었습니다 !</div>
                <div className="content">~~~</div>
            </div>

            <div className="calendar">2023년 10월 7일 토요일</div>
            <div className="rectangle">
                <div className="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="44" viewBox="0 0 43 44" fill="none">
                        <ellipse cx="21.5" cy="22" rx="21.5" ry="22" fill="#EB604A"/>
                    </svg>
                </div>
                <div className="rectangle-border-radius"/>
                <div className="text-red">매칭중</div>
                <div className="text-black">이에요 !</div>
                <div className="content">~~~</div>
            </div>

            <div className="calendar">2023년 10월 6일 금요일</div>
            <div className="rectangle">
                <div className="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="44" viewBox="0 0 43 44" fill="none">
                        <ellipse cx="21.5" cy="22" rx="21.5" ry="22" fill="#EB604A"/>
                    </svg>
                </div>
                <div className="rectangle-border-radius"/>
                <div className="text-red">매칭</div>
                <div className="text-black">이 완료되었습니다 !</div>
                <div className="content">~~~</div>
            </div>
            <MainFooter/>
        </div>
    );
}

export default Alarm;