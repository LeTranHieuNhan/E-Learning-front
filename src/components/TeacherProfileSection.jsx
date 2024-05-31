import React from 'react'
import J1 from "../assets/img/J1.jpg";

const TeacherProfileSection = ({user}) => {




    return (
        <div className=" flex  flex-col  bg-whitesmokle border shadow-sm p-7 ">

            <div className="flex justify-between">
                <div>

                    <div className="flex gap-4">
                        <img src={user?.avatar} alt="" className="bg-[#FFD5C3FF] w-24 h-24 rounded-full"/>
                        <div className="font-sans ">
                            <h2 className="text-xl font-bold font-sora">{user?.name}</h2>
                            <span className="text-sm text-neutral-700">{user?.role?.name}</span>
                            <span className="flex mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor"
                                                 className="w-4 h-4 text-neutral-600">
                                              <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                              <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                                            </svg>
                                            <span className="text-neutral-600 text-[12px]">New York - 09:30 AM</span>


                                        </span>
                            <div className="mt-2">
                                            <span
                                                className="text-[12px] font-sans p-2 text-[#6E75D1FF] bg-[#F3F4FBFF]  h-6 items-center rounded   ">Teacher</span>

                                <span
                                    className="text-[12px] font-sans p-2 text-orange-500 bg-[#FFF4F0FF]  h-6 items-center ml-2 rounded  ">{user?.occupation}</span>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-6">
                        <h2 className="font-sora text-neutral-900 text-2xl font-bold">Overview</h2>
                        <p className="mt-1.5 font-sans text-sm text-neutral-500"> Adipisicing ipsum
                            commodo cupidatat Lorem id velit laborum laborum proident.
                            Nulla voluptate deserunt ipsum dolor nostrud dolor eu anim elit aliqua
                            excepteur dolor velit voluptate mollit aliqua no</p>

                        <div className="flex mt-6 font-sans gap-11 ">
                            <div className="flex flex-col ">
                                <span className="text-sm text-neutral-600">Rating</span>
                                <span className="font-bold">{user.averageRating == null ? 3.2 : user.averageRating}</span>
                            </div>

                            <div className="flex flex-col ">
                                <span className="text-sm text-neutral-600">Reviews</span>
                                <span className="font-bold">{user.totalReviews}</span>
                            </div>

                            <div className="flex flex-col ">
                                <span className="text-sm text-neutral-600">Courses</span>
                                <span className="font-bold">{user.totalCourses}</span>
                            </div>

                            <div className="flex flex-col ">
                                <span className="text-sm text-neutral-600">Students</span>
                                <span className="font-bold">{user.totalStudents}</span>
                            </div>

                        </div>

                    </div>

                </div>

                <span
                    className="text-[12px] font-sans p-4 text-orange-500 bg-[#FFF4F0FF]  h-10 text-center w-36  rounded-full items-center flex    ">Top teacher</span>
            </div>


        </div>
    )
}
export default TeacherProfileSection
