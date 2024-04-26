import React from 'react'
import Course from "./Course.jsx";

const CourseList = () => {
    return (
        <div className="flex justify-around xl:gap-4  ">
            {
                [1,1,1,1,1].map((item,index) => {
                    return <Course key={index}/>
                })
            }
        </div>
    )
}
export default CourseList