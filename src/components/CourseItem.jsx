import React, { useState } from 'react';

const CourseItem = ({ course }) => {
    const [isClassVisible, setIsClassVisible] = useState(false);

    const toggleClassVisibility = () => {
        setIsClassVisible(!isClassVisible);
    };

    return (
        <div className="shadow border rounded-md w-96 h-42 mt-11 bg-gray-100">
            <div className="mt-6 ml-6">
                <h1 className="text-gray-900 text-2xl font-bold">
                    {course.title}
                </h1>
                <h2 className="mt-1 text-gray-900 text-sm">
                    {course.user.name}
                </h2>
                <button className="mt-10" onClick={toggleClassVisibility}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                </button>
                {isClassVisible && (
                    <div className="flex hover:bg-gray-300 w-32 h-10 justify-between px-2 items-center py-2 rounded bg-white cursor-pointer shadow-xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 ml-2 text-red-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <button className="text-xs font-bold text-red-600">
                            Out this class
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseItem;
