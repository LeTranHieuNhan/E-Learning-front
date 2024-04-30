import React from 'react'
import {CourseDetailComponent} from "../components/CourseDetailComponent.jsx";
import Footer from "../components/Footer.jsx";
import ReviewSection from "../components/ReviewSection.jsx";
import {CourseCustomSection} from "../components/CourseCustomSection.jsx";

const CourseDetail = () => {
    console.log("CourseDetail")
    return (
        <>
            <div className="mx-64 my-0">
                <CourseDetailComponent/>
                <ReviewSection/>
            <CourseCustomSection sectionName={"Related Course"}/>
            </div>
            <Footer/>
        </>
    )
}
export default CourseDetail
