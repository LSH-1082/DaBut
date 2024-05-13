import "../register/registerFooter/RegisterFooter.css";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {editRoommate} from "../api/UserData";
import Cookies from "js-cookie";

const RoommatePageFooter = () => {
    const navigate = useNavigate();
    let roommate = useSelector(state => state.roommate);

    const clickRoomButton = () => {
        editRoommate(roommate, Cookies.get("accessToken"));
        console.log(roommate);
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