import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CourseDetailComponent} from "../components/CourseDetailComponent.jsx";
import Footer from "../components/Footer.jsx";
import ReviewSection from "../components/ReviewSection.jsx";
import {CourseCustomSection} from "../components/CourseCustomSection.jsx";
import {getCourseById} from "../redux/courseActions.js";
import {useParams} from "react-router-dom";

const CourseDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
        const selectedCourse = useSelector(state => state.course.course.selectedCourse);
        console.log(id)
    useEffect(() => {
        if(id)
        dispatch(getCourseById(id));
    }, [dispatch, id]);
    console.log(selectedCourse)
    if (!selectedCourse) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="mx-64 my-0">
                <CourseDetailComponent course={selectedCourse}/>
                <ReviewSection courseId={id}/>
                <CourseCustomSection sectionName={"Related Course"}/>
            </div>
            <Footer/>
        </>
    );
};

export default CourseDetail;
