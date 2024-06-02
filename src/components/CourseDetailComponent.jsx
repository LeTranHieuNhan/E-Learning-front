import { CourseImagesSection } from "./CourseImagesSection.jsx";
import TabComponent from "./TabComponent.jsx";
import { useState } from "react";
import CourseDescription from "./CourseDescription.jsx";
import { Link, useNavigate } from "react-router-dom";
import StarIcon from "./StarIcon.jsx";
import Toast from "./Toast.jsx";

const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5">
        <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
    </svg>
);

export const CourseDetailComponent = ({ course }) => {
    const [activeTab, setActiveTab] = useState('Reviews'); // Set initial active tab
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
const navigate = useNavigate();
    const handleEnroll = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setToastMessage("Please sign in to enroll in the course.");
            setShowToast(true);
        } else {
            // Enrollment logic here
            navigate(`/course/${course.id}/1`)
        }
    };

    return (
        <div>
            {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
            <h1 className="font-sora text-3xl font-bold text-neutral-900 mb-4">{course?.title}</h1>
            <div className="flex justify-between mb-6">
                <div className="flex gap-1 mb-8">
                    <StarIcon />
                    <span className="font-sans text-sm font-bold">{course?.averageRating == null ? 4.5 : course.averageRating.toFixed(2)}</span>
                    <span className="font-sans text-sm text-neutral-500">({course?.totalReviews == null ? 0 : course.totalReviews} reviews)</span>
                    <span className="text-blue-indigo font-sans text-sm cursor-pointer">{course?.user?.name}</span>
                </div>
                <button className="flex p-3 gap-1.5 h-10 w-[97px] bg-primary-100 text-blue-indigo rounded-lg justify-center">
                    <ShareIcon />
                    <span className="text-sm font-sans">Share</span>
                </button>
            </div>
            <CourseImagesSection />
            <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex justify-between">
                <div className="tab-content mt-4">
                    {activeTab === 'Class description' && (
                        <CourseDescription course={course} />
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
                <div className="mt-4 absolute left-2/3 z-0">
                    <Link to="/teacher/1">
                        <div className="flex gap-3">
                            <img className="rounded-full h-11 w-11" src="https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <div className="font-sans">
                                <h3 className="font-sans font-bold text-[16px] text-neutral-900">{course?.user?.name}</h3>
                                <span className="text-orange-500 bg-[#FFF4F0FF] text-[11px] h-6 w-4 p-2 rounded-2xl">Top teacher</span>
                            </div>
                        </div>
                    </Link>
                    <div className="bg-neutral-50 w-[380px] p-6 mt-5 z-0">
                        <div className="flex justify-between">
                            <h3 className="truncate font-sora text-[16px] font-bold text-ellipsis overflow-hidden whitespace-nowrap w-2/3">{course.title}</h3>
                            <div className="flex">
                                <StarIcon />
                                <span className="font-bold">4.5</span>
                            </div>
                        </div>
                        <div className="flex mt-[22px] justify-between">
                            <h2 className="font-sans text-sm text-neutral-900">Course (12 lessons)</h2>
                            <h2 className="font-sans text-sm text-neutral-900 font-bold">{course.course_duration}</h2>
                        </div>
                        <div className="flex mt-[22px] justify-between">
                            <h2 className="font-sans text-sm text-neutral-900">
                                Document
                                <span className="ml-4 text-[12px] p-2 bg-[#2ACCCFFF] text-[#0F494AFF] rounded-full">Free</span>
                            </h2>
                            <h2 className="font-sans text-sm text-neutral-900 font-bold">0</h2>
                        </div>
                        <hr className="border-t border-gray-300 my-4" />
                        <div className="flex justify-between">
                            <h3 className="font-sans text-sm text-neutral-900 font-bold">Total</h3>
                            <h3 className="text-xl text-blue-indigo font-bold font-sans">Free</h3>
                        </div>
                        <button
                            className="w-full h-10 bg-blue-indigo text-white rounded-lg mt-4 font-sans font-bold"
                            onClick={handleEnroll}
                        >
                            Enroll now
                        </button>
                        <button className="w-full mt-5 border border-blue-indigo h-10 font-sans font-bold bg-white text-blue-indigo">
                            Add to Waitlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
