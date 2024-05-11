import { CourseImagesSection } from "./CourseImagesSection.jsx";
import TabComponent from "./TabComponent.jsx";
import { useState } from "react";
import CourseDescription from "./CourseDescription.jsx";
import { Link } from "react-router-dom";

export const CourseDetailComponent = () => {
    const [activeTab, setActiveTab] = useState('Reviews'); // Set initial active tab

    return (
        <div>
            <h1 className="font-sora text-3xl font-bold text-neutral-900 mb-4 ">UI Design, A User-Centered Approach</h1>
            <div className="flex justify-between mb-6 ">
                <div className="flex gap-1 mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="w-5 h-5 text-yellow-500 ">
                        <path fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clip-rule="evenodd" />
                    </svg>
                    <span className="font-sans text-sm font-bold">4.5</span>
                    <span className="font-sans text-sm text-neutral-500">(99 reviews)</span>
                    <span className="text-blue-indigo font-sans text-sm cursor-pointer">| Lucifer</span>
                </div>
                <button
                    className="flex p-3 gap-1.5 h-10 w-[97px]  bg-primary-100 text-blue-indigo rounded-lg justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="w-4 h-4 mt-0.5">
                        <path fillRule="evenodd"
                            d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                            clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-sans">Share</span>
                </button>
            </div>
            <CourseImagesSection />


            <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex justify-between   ">
                <div className="tab-content mt-4 ">
                    {activeTab === 'Class description' && (
                        <CourseDescription />
                    )}
                    {activeTab === 'Reviews' && (
                        <div className="mb-96">
                            <h2 className="text-lg font-bold">Reviews</h2>
                            <p>This is the content for the Reviews tab.</p>
                        </div>
                    )}
                    {activeTab === 'Related Course' && (
                        <div className="mb-96">
                            <h2 className="text-lg font-bold">Related Course</h2>
                            <p>This is the content for the Related Course tab.</p>
                        </div>
                    )}
                </div>
                <div className="mt-4 absolute left-2/3 z-0 ">
                    <Link to="/teacher/1">

                        <div className="flex gap-3">
                            <img
                                className="rounded-full h-11 w-11"
                                src="https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                                alt="" />
                            <div className="font-sans  ">
                                <h3 className="font-sans font-bold  text-[16px]  text-neutral-900">Lucifer</h3>
                                <span className="text-orange-500 bg-[#FFF4F0FF] text-[11px] h-6 w-4 p-2 rounded-2xl ">Top teacher</span>
                            </div>
                        </div>
                    </Link>

                    <div className="bg-neutral-50 w-[380px] p-6 mt-5 z-0 ">
                        <div className="flex  justify-between ">
                            <h3 className="truncate font-sora text-[16px] font-bold text-ellipsis overflow-hidden whitespace-nowrap w-2/3">UX:
                                Design with a User with
                                different kind of qualitydasdasdasa</h3>

                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-5 h-5 text-yellow-500">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>

                                <span className="font-bold">4.5</span>

                            </div>

                        </div>
                        <div className="flex mt-[22px]  justify-between ">
                            <h2 className=" font-sans text-sm text-neutral-900 ">
                                Course (12 lessons)</h2>
                            <h2 className=" font-sans text-sm text-neutral-900 font-bold ">12 weeks</h2>

                        </div>
                        <div className="flex mt-[22px]  justify-between ">
                            <h2 className=" font-sans text-sm text-neutral-900 ">
                                Document
                                <span
                                    className="ml-4 text-[12px] p-2 bg-[#2ACCCFFF] text-[#0F494AFF] rounded-full ">Free</span>
                            </h2>
                            <h2 className=" font-sans text-sm text-neutral-900 font-bold ">0</h2>

                        </div>
                        <hr className="border-t border-gray-300 my-4" />


                        <div className="flex justify-between">
                            <h3 className="font-sans text-sm text-neutral-900 font-bold ">Total</h3>
                            <h3 className="text-xl text-blue-indigo font-bold font-sans ">Free</h3>
                        </div>
                        <Link to='/course/2/2'>
                            <button
                                className="w-full h-10 bg-blue-indigo text-white rounded-lg mt-4 font-sans font-bold">Enroll
                                now
                            </button>
                        </Link>
                        <button className=" w-full mt-5 border border-blue-indigo h-10 font-sans font-bold bg-white text-blue-indigo " >Add to Waitlist</button>


                    </div>


                </div>
            </div>

        </div>
    )
}