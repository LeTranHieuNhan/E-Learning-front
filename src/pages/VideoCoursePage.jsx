import React, { useState } from 'react'
import Course from "../components/Course.jsx";
import CourseVideoComponent from "../components/CourseVideoComponent.jsx";
import TabComponent from '../components/TabComponent.jsx';
import Disscussion from '../components/Disscussion.jsx';
import Footer from "../components/Footer.jsx";

const VideoCoursePage = () => {
    const [activeTab, setActiveTab] = useState('Discussions'); // Set initial active tab

    const handleClick = (tabName) => {
        setActiveTab(tabName); // Update the active tab state
    };
    return (
        <>
            <div className="mx-auto container ">
                <CourseVideoComponent />

                <div className='mt-6 pb-12'>
                    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
                        <ul className="flex flex-wrap -mb-px">
                            <li className="me-2">
                                <a
                                    href="#"
                                    className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${activeTab === 'Summary'
                                        ? 'text-blue-indigo font-bold border-blue-indigo'
                                        : 'border-transparent'
                                        }`}
                                    onClick={() => handleClick('Summary')}
                                >
                                    Summary
                                </a>
                            </li>
                            <li className="me-2">
                                <a
                                    href="#"
                                    className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'Discussions'
                                        ? 'text-blue-indigo font-bold border-blue-indigo'
                                        : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                                        }`}
                                    onClick={() => handleClick('Discussions')}
                                    aria-current={activeTab === 'Discussions' ? 'page' : undefined}
                                >
                                    Discussion (50)
                                </a>
                            </li>
                            <li className="me-2">
                                <a
                                    href="#"
                                    className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${activeTab === 'Resources & documents'
                                        ? 'text-blue-indigo font-bold border-blue-indigo'
                                        : 'border-transparent'
                                        }`}
                                    onClick={() => handleClick('Resources & documents')}
                                >
                                    Resources & documents
                                </a>
                            </li>

                            <li className="me-2">
                                <a
                                    href="#"
                                    className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${activeTab === 'Transcript'
                                        ? 'text-blue-indigo font-bold border-blue-indigo'
                                        : 'border-transparent'
                                        }`}
                                    onClick={() => handleClick('Transcript')}
                                >
                                    Transcript
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Display content based on the active tab */}

                </div>
                {activeTab === 'Discussions' && (
                    <Disscussion />
                )}
                {activeTab === 'Summary' && (
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
            <Footer />

        </>
    )
}
export default VideoCoursePage
