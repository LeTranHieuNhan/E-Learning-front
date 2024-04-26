import React from 'react'
import {CourseDetailComponent} from "../components/CourseDetailComponent.jsx";
import Footer from "../components/Footer.jsx";

const CourseDetail = () => {
    console.log("CourseDetail")
    return (
        <>
            <div className="mx-64 my-0">
                <CourseDetailComponent/>
            </div>
            <div className=" ">

            <Footer/>
            </div>
        </>
    )
}
export default CourseDetail
