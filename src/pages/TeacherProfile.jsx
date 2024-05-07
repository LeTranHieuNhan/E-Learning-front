import Footer from "../components/Footer.jsx";
import J1 from "../assets/img/J1.jpg";
import TeacherProfileSection from "../components/TeacherProfileSection.jsx";
import Image26 from "../assets/img/Image 26.png";
import {TeacherCourseSection} from "../components/TeacherCourseSection.jsx";
import StarIcon from "../components/StarIcon.jsx";

export const TeacherProfile = () => {
    return (
        <>
            <div className="mx-auto container">

                <div className="grid grid-cols-10 gap-4">
                    <div className="col-span-7   p-4">
                        <TeacherProfileSection/>


                        {/*    */}
                        <TeacherCourseSection/>


                    </div>
                    <div className="col-span-3 p-4   ">
                        <div
                            className="bg-gray-50 border shadow-sm p-8 relative font-sans  justify-center flex flex-col gap-2  ">
                            <button
                                className="bg-blue-indigo text-white p-2 text-sm justify-center  rounded-lg ">Message
                            </button>
                            <div className="flex justify-between mt-16">
                                <div className="flex flex-col gap-4 font-sans">
                                    <span className="mt-1 text-xl">4.8/5</span>
                                    <span className="text-[12px] text-neutral-600">(1000+ reviews)</span>
                                    <div className="flex ">
                                        {[1, 1, 1, 1, 1].map((_, index) => (
                                            <StarIcon index={index}/>
                                        ))}
                                    </div>


                                </div>

                                <div className="w-1/2">

                                    <div className=" w-full bg-gray-200 rounded-full h-1.5  mt-4 relative  ">
                                        <div className="flex gap-2 mb-4">

                                            <div className="bg-yellow-400 h-1.5 rounded-full w-2/3 "></div>
                                            <span
                                                className="text-[11px] mb-4 text-neutral-600 absolute right-[-22px] top-[-5px]">5</span>
                                        </div>
                                    </div>
                                    <div className=" w-full bg-gray-200 rounded-full h-1.5  mt-4 relative  ">
                                        <div className="flex gap-2 mb-4">

                                            <div className="bg-yellow-400 h-1.5 rounded-full w-2/3 "></div>
                                            <span
                                                className="text-[11px] mb-4 text-neutral-600 absolute right-[-22px] top-[-5px]">4</span>
                                        </div>
                                    </div>
                                    <div className=" w-full bg-gray-200 rounded-full h-1.5  mt-4 relative  ">
                                        <div className="flex gap-2 mb-4">

                                            <div className="bg-yellow-400 h-1.5 rounded-full w-1/5 "></div>
                                            <span
                                                className="text-[11px] mb-4 text-neutral-600 absolute right-[-22px] top-[-5px]">3</span>
                                        </div>
                                    </div>

                                    <div className=" w-full bg-gray-200 rounded-full h-1.5  mt-4 relative  ">
                                        <div className="flex gap-2 mb-4">

                                            <div className="bg-yellow-400 h-1.5 rounded-full w-3/4 "></div>
                                            <span
                                                className="text-[11px] mb-4 text-neutral-600 absolute right-[-22px] top-[-5px]">2</span>
                                        </div>
                                    </div>


                                    <div className=" w-full bg-gray-200 rounded-full h-1.5  mt-4 relative  ">
                                        <div className="flex gap-2 mb-4">

                                            <div className="bg-yellow-400 h-1.5 rounded-full w-1/3 "></div>
                                            <span
                                                className="text-[11px] mb-4 text-neutral-600 absolute right-[-22px] top-[-5px]">1</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            {/*    */}
                            <div className="mt-3 font-sans flex-col flex gap-7 text-neutral-900" >
                                <div className="flex flex-col gap-2">

                                    <h2 className="font-bold text-lg">Response Time</h2>
                                    <p className="text-sm text-neutral-900">Very responsive to messages</p>
                                </div>
                                <div className="flex flex-col gap-2">

                                    <h2 className="font-bold text-lg">Certificates</h2>
                                    <p className="text-sm text-neutral-900">Google UX Design Professional</p>
                                </div>
                                <div className="flex flex-col gap-2">

                                    <h2 className="font-bold text-lg">Profile Link</h2>
                                    <input placeholder="https://Klara-Design.com" type="text" className="w-full h-11 bg-white border rounded-lg p-3"/>
                                    <span className="cursor-pointer mt-2 text-[12px] font-bold text-blue-indigo">Copy Link</span>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer/>
        </>
    )
}