import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import CourseDetail from "./pages/CourseDetail";
import {TeacherProfile} from "./pages/TeacherProfile.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="course/:id" element={<CourseDetail/>}/>
                <Route path="teacher/:id" element={<TeacherProfile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
