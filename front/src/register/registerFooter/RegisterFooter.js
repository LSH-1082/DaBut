import "./RegisterFooter.css";
import {incPage} from "../../store/page";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const RegisterFooter = () => {
    const page = useSelector(state => state.page);
    const dispatch = useDispatch();

    return (
        <nav className="RegisterNav">
            <div className="RegisterFooter">
                <button onClick={() => {dispatch(incPage())}}>
                    {page.page === 1 ? ("반가워요 🙌🏻") : ("")}
                    {page.page === 2 ? ("반가워요 🙌🏻") : ("")}
                    {page.page === 3 ? ("저는 이런 사람이에요 😙") : ("")}
                    {page.page === 4 ? ("잘 부탁해요 🤭") : ("")}
                    {page.page === 5 ? ("이런 친구를 원해요 😊") : ("")}
                </button>
            </div>
        </nav>
    );
}

export default RegisterFooter;