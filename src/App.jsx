import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AssignDes from "./components/AssignDes";
import CourseDetail from "./pages/CourseDetail";
import CourseAssignment from "./pages/CourseAssignment";
// import UserProfile from "./pages/UserProfile";
import {TeacherProfile} from "./pages/TeacherProfile.jsx";
import VideoCoursePage from "./pages/VideoCoursePage.jsx";

import UserProfile from "./pages/UserProfile.jsx";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="course/:id" element={<CourseDetail/>}/>
                <Route path="teacher/:id" element={<TeacherProfile/>}/>
                <Route path="/CourseAssignment" element={<CourseAssignment />} />
                <Route path="/AssignDes" element={<AssignDes />} />
                <Route path="/UserProfile" element={<UserProfile />} />
                <Route path ="course/:id/:videoId" element={<VideoCoursePage/>}/>
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
