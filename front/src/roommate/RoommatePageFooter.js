import "../register/registerFooter/RegisterFooter.css";
import {useNavigate} from "react-router-dom";

const RoommatePageFooter = () => {
    const navigate = useNavigate();

    const clickRoomButton = () => {
        //todo api만들어서 서버로 룸메정보 보내는 함수 작성 해야함
        navigate("/main");
    }

    return (
        <nav className="RegisterNav">
            <div className="RegisterFooter">
                <button onClick={clickRoomButton}>
                    난 이렇게 살고 있어
                </button>
            </div>
        </nav>
    );
}

export default RoommatePageFooter;