import Image26 from "../assets/img/Image 26.png";
import StarIcon from "./StarIcon.jsx";

export const TeacherCourseSection = () => {
    return (
        <div className=" mt-12   bg-whitesmokle border shadow-sm p-7 ">
            <h2 className="text-neutral-900 text-2xl font-sora font-bold">Courses</h2>

            <div className="flex flex-col divide-y ">

                {[1, 1].map((i, index) => (
                    <div key={index} className="flex flex-col mt-8 relative  ">
                        <h2 className={`text-neutral-900 font-sora font-bold text-xl ${index > 0 ? "mt-6" : ""}`}>UI
                            Design, A User-Centered Approach</h2>

                        <span className="text-neutral-600 font-sans text-[12px] flex gap-2 mt-1.5">
                                            May 2021
                            {/* Rating icons */}
                            <div className="flex gap-1">
                                                {[1, 1, 1, 1, 1].map((_, index) => (
                                                    <StarIcon index={index}/>
                                                ))}
                                            </div>
                                        </span>

                        {/* Course details */}
                        <div className="flex gap-2 mt-3">
                            <img src={Image26} alt="Course Image"/>
                            <div className="font-sans ml-3">
                                <span
                                    className="text-white bg-[#FE763EFF] p-2 text-[11px] rounded-full">Free Document</span>
                                <p className="mt-4 text-sm text-neutral-900">Anim aliqua fugiat consequat minim in sunt
                                    aute aliquip labore sint consectetur</p>
                                <span
                                    className="text-neutral-600 text-[12px] inline-block mt-4">14 hours / 12 lessons</span>
                                <button
                                    className="p-3 rounded-xl bg-blue-indigo text-white text-sm block mt-8 px-6 font-bold absolute right-2">Enroll
                                </button>
                            </div>
                        </div>
                    </div>
                ))}


            </div>


        </div>
    )
}