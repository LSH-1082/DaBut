import MainFooter from "../main/MainFooter";
import "./StatisticsPage.css";
import DoughnutComponent from "../component/chart/DoughnutComponent";
import BarComponent from "../component/chart/BarComponent";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setMainPage} from "../store/mainPage";

const StatisticsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMainPage("metaPage"));
    }, [dispatch]);

    return (
        <div className="StatisticsPage">
            <div className="StatisticsPageDiv">
                <div className="statPageDiv">
                    <p className="myStatText">최근 매칭된 친구</p>
                    <div className="statDoughnutDiv">
                        <DoughnutComponent/>
                    </div>
                </div>
            </div>
            <hr className="statHorizon"/>
            <div className="StatisticsPageDiv">
                <div className="statPageDiv">
                    <p className="myStatText">내가 선호하는 사람들의 유형</p>
                    <div className="rankDiv">
                        <div className="rank">
                            <div className="statRankFirst">
                                <p className="statRank">1위</p>
                                <p className="statRankText">발랄한</p>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="statRankSecond">
                                <p className="statRank">2위</p>
                                <p className="statRankText">대학생</p>
                            </div>
                        </div>
                    </div>
                    <div className="barStatDiv">
                        <BarComponent/>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
}

export default StatisticsPage;