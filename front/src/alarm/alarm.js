import "./alarm.css"

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
            <p className="alarmTitle">알림</p>
            <p className="matchingAlarm">매칭 알림</p>
            <p className="infoAlarm">공지사항</p>
            <div className="lineAlarm"/>
            <div className="bgAlarm"/>
            <p className="date">2023년 10월 8일 일요일</p>
            <div className="rectangle">
                <svg className="circle" xmlns="http://www.w3.org/2000/svg" width="43" height="44" viewBox="0 0 43 44"
                     fill="none">
                    <ellipse cx="21" cy="21" rx="21" ry="21" fill="#EB604A"/>
                </svg>
                <div className="rectangle-border-radius"/>
                <p className="text">
                    <span style={{color: '#EB604A', fontWeight: 700}}>매칭</span>이 완료되었습니다 !
                </p>
                <p className="content">~~~</p>
            </div>
        </div>
    );
}

export default Alarm;