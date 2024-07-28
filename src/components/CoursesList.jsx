import React from 'react';
import { useSelector } from 'react-redux';
import CourseItem from './CourseItem';

const CourseList = () => {
    const userEnrolledCourses = useSelector((state) => state.course.course.userEnrolledCourses);

    return (
        <div className="mt-8 ml-40">
            {userEnrolledCourses.map((course) => (
                <CourseItem key={course.id} course={course} />
            ))}
        </div>
    );
};

export default CourseList;
