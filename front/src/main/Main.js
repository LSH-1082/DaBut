import {useSelector} from "react-redux";
import {useEffect} from "react";

const Main = () => {
    let user = useSelector(state => state.user);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <>
        </>
    );
}

export default Main;