import {useEffect} from "react";
import {getMeta} from "../api/UserData";
import Cookies from "js-cookie";
import MainFooter from "../main/MainFooter";

const MatchingCheckPage =  () => {

    useEffect(() => {
        getMeta(Cookies.get("accessToken")).then((res) => {
            console.log(res.data);
        });
    }, []);

    return (<>
        <MainFooter/>
    </>);
}

export default MatchingCheckPage;