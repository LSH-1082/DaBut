import {useEffect} from "react";
import Cookies from "js-cookie";
import MainFooter from "../main/MainFooter";
import {getMatching} from "../api/UserData";

const MatchingCheckPage =  () => {

    useEffect(() => {
        getMatching(Cookies.get("accessToken")).then((res) => {console.log(res)});
    }, []);

    return (<>
        <MainFooter/>
    </>);
}

export default MatchingCheckPage;