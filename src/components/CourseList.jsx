import React from 'react';
import Course from "./Course.jsx";

const CourseList = ({ courses,defaultCount =5 }) => {
    if (!Array.isArray(courses)) {
        return <div>No courses available</div>; // Return a message if courses is not an array
    }
    const defaultCourses = courses.slice(0, defaultCount);



    return (
        <div className="flex justify-around xl:gap-4">
            {defaultCourses.map((course, index) => (
                <Course key={index} course={course} />
            ))}
        </div>
    );
}
export default CourseList;
