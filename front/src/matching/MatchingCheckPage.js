import {useEffect} from "react";
import {getMatching} from "../api/UserData";
import Cookies from "js-cookie";
import MainFooter from "../main/MainFooter";

const MatchingCheckPage =  () => {

    useEffect(() => {
        getMatching(Cookies.get("accessToken")).then((res) => {
            console.log(res.data);
        });
    }, []);

    return (<>
        <MainFooter/>
    </>);
}

export default MatchingCheckPage;