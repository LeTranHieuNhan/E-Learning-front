import React from 'react'
import Course from "./Course.jsx";

const CourseList = () => {
    return (
        <div className="flex justify-between ">
            {
                [1,1,1,1,].map((item,index) => {
                    return <Course key={index}/>
                })
            }
        </div>
    )
}
export default CourseList