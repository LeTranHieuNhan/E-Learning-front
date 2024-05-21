import React from 'react';
import Course from "./Course.jsx";

const CourseList = ({ courses }) => {
    if (!Array.isArray(courses)) {
        return <div>No courses available</div>; // Return a message if courses is not an array
    }

    return (
        <div className="flex justify-around xl:gap-4">
            {courses.map((course, index) => (
                <Course key={index} course={course} />
            ))}
        </div>
    );
}
export default CourseList;
