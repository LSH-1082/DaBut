import "./RegisterFooter.css";
import {incPage} from "../../store/page";
import {useDispatch, useSelector} from "react-redux";

const RegisterFooter = () => {
    const page = useSelector(state => state.page);
    const dispatch = useDispatch();

    return (
        <nav className="RegisterNav">
            <div className="RegisterFooter">
                <button onClick={() => {dispatch(incPage())}}>
                    {page.page === 1 ? ("반가워요 🙌🏻") : ("")}
                    {page.page === 2 ? ("환영해주셔서 감사합니다 😌") : ("")}
                    {page.page === 3 ? ("저는 이런 사람이에요 😙") : ("")}
                    {page.page === 4 ? ("잘 부탁해요 🤭") : ("")}
                    {page.page === 5 ? ("이런 친구를 원해요 😊") : ("")}

                    {page.page === 7 ? ("수정할 게 있으신가요? 🧐") : ("")}
                    {page.page === 8 ? ("이렇게 수정할래요 😃") : ("")}
                    {page.page === 9 ? ("내 정보가 바뀌고 있어요 😶") : ("")}
                    {page.page === 10 ? ("다시 한 번 잘 부탁해요 😉") : ("")}

                    {page.page === 12 ? ("이런 친구를 만날래요 😎") : ("")}
                </button>
            </div>
        </nav>
    );
}

export default RegisterFooter;