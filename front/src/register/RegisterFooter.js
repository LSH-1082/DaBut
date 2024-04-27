import "./RegisterFooter.css";
import {incPage} from "../store/page";
import {useDispatch, useSelector} from "react-redux";

const RegisterFooter = () => {
    const page = useSelector(state => state.page);
    const dispatch = useDispatch();


    return (
        <nav className="registerNav">
            <div className="RegisterFooter">
                <button onClick={() => {dispatch(incPage())}}>
                    {page.page === 1 ? ("반가워요 🙌🏻") : ("")}
                    {page.page === 2 ? ("저는 이런 사람이에요 😙") : ("")}
                    {page.page === 3 ? ("잘 부탁해요 🤭") : ("")}
                </button>
            </div>
        </nav>
    );
}

export default RegisterFooter;