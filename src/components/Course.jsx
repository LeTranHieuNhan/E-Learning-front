import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {getCourseById} from "../redux/courseActions.js";

const Course = ({ course }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getCourseById(course.id));
    };
    return (
        <Link to={`/course/${course.id}`} onClick={handleClick}>
            <div className="shadow-black border lg:w-48 xl:w-64 cursor-pointer">
                <img
                    className="w-full h-40"
                    src="https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                    alt="Course Image"
                />
                <div className="mt-4 px-2 py-2">
                    <div className="flex justify-between">
                        {/* eslint-disable-next-line react/prop-types */}
                        <p className="font-sans leading-5 text-sm font-normal text-neutral-500">{course.category.name}</p>
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="rounded-full bg-tertiary3-500 font-sans text-white leading-4 text-sm h-6 py-1 px-4">{course.course_duration}</span>
                    </div>
                    {/* eslint-disable-next-line react/prop-types */}
                    <h2 className="font-sora text-[16px] font-bold mt-2 break-words overflow-hidden">{course.title}</h2>
                    <div className="flex mt-4 justify-between">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-yellow-400">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                            {/* eslint-disable-next-line react/prop-types */}
                            <span className="text-sm font-bold font-sans">{course.rating === null ? 5 : course.rating}</span>
                            <span className="ml-2 text-sm text-gray-400 font-sans">({course.reviews})</span>
                        </div>
                        <h2 className="text-xl font-bold font-sora text-neutral-900">$12.000</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Course;
