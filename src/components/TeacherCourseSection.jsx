import React from 'react';
import Image26 from "../assets/img/Image 26.png";
import StarIcon from "./StarIcon.jsx";

export const TeacherCourseSection = ({ courses }) => {
    return (
        <div className="mt-12 bg-whitesmoke border shadow-sm p-7">
            <h2 className="text-neutral-900 text-2xl font-sora font-bold">Courses</h2>
            <div className="flex flex-col divide-y">
                {courses?.length > 0 ? (
                    courses.map((course, index) => (
                        <div key={course.id} className="flex flex-col mt-8 relative">
                            <h2 className={`text-neutral-900 font-sora font-bold text-xl ${index > 0 ? "mt-6" : ""}`}>
                                {course.title}
                            </h2>
                            <span className="text-neutral-600 font-sans text-[12px] flex gap-2 mt-1.5">
                                {course.date}
                                <div className="flex gap-1">
                                    {[1, 1, 1, 1, 1].map((_, starIndex) => (
                                        <StarIcon key={starIndex} index={starIndex} />
                                    ))}
                                </div>
                            </span>
                            <div className="flex gap-2 mt-3 cursor-pointer">
                                <img src={course.image || Image26} alt="Course Image" />
                                <div className="font-sans ml-3">
                                    <span className="text-white bg-[#FE763EFF] p-2 text-[11px] rounded-full">Free Document</span>
                                    <div className="mt-4 text-sm text-neutral-900"
                                         dangerouslySetInnerHTML={{__html: course.description}}></div>
                                    <span
                                        className="text-neutral-600 text-[12px] inline-block mt-4">Course duration : {course.course_duration}</span>
                                    <button
                                        className="p-3 rounded-xl bg-blue-indigo text-white text-sm block mt-8 px-6 font-bold absolute right-2">
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No courses found for this teacher.</p>
                )}
            </div>
        </div>
    );
};
