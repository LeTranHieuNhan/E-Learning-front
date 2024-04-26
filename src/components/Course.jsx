import React from 'react';
import {Link} from "react-router-dom";

const Course = () => {
    return (
        <Link to="/course/1">
            <div className="shadow-black border lg:w-48 xl:w-64 cursor-pointer ">
                <img
                    className="w-full h-40"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlJTIwZGVzaWdufGVufDB8fDB8fHww"
                    alt="Course Image"
                />
                <div className="mt-4 px-2 py-2">

                    <div className="flex justify-between ">
                        <p className="font-sans leading-5 text-sm font-normal text-neutral-500">Video</p>
                        <span
                            className="rounded-full bg-tertiary3-500 font-sans text-white leading-4 text-sm h-6 py-1 px-4">Beginner Level</span>
                    </div>

                    <h2 className="font-sora text-[16px] font-bold mt-2 break-words overflow-hidden">
                        Grow Your Video Editing Skills from Experts
                    </h2>
                    <div className="flex mt-4 justify-between ">
                        <div className="flex">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-[20px] h-[20px] text-yellow-400">
                                <path fill-rule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                      clip-rule="evenodd"/>
                            </svg>
                            <span className="text-sm font-bold font-sans">4.5</span>
                            <span className="ml-2 text-sm text-gray-400 font-sans">(1253)</span>
                        </div>
                        <h2 className="text-xl font-bold font-sora text-neutral-900">$39</h2>


                    </div>

                </div>
            </div>
        </Link>

    );
}

export default Course;
