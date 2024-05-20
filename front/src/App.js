import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from "./login/Login";
import Main from "./main/Main";
import Register from "./register/Register";
import Profile from "./profile/Profile";
import MatchingList from "./matching/matchingList";
import RoommatePage from "./roommate/RoommatePage";
import EditProfilePage from "./editProfile/EditProfilePage";
import EditFriendProfilePage from "./editProfile/EditFriendProfilePage";
import StatisticsPage from "./statistics/StatisticsPage";
import MatchingCheckPage from "./matching/MatchingCheckPage";


function App() {
    return (
        <div className="App">
            <div className="appDiv">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>}></Route>
                        <Route path="/register" element={<Register/>}></Route>
                        <Route path="/main" element={<Main/>}></Route>
                        <Route path="/list" element={<MatchingList/>}></Route>
                        <Route path="/profile" element={<Profile/>}></Route>
                        <Route path="/roommate" element={<RoommatePage/>}></Route>
                        <Route path="/editprofile" element={<EditProfilePage/>}></Route>
                        <Route path="/editfriend" element={<EditFriendProfilePage/>}></Route>
                        <Route path="/meta" element={<StatisticsPage/>}></Route>
                        <Route path="/matching" element={<MatchingCheckPage/>}></Route>
                        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
