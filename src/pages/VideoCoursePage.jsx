import React, { useEffect, useState, useMemo } from 'react';
import CourseVideoComponent from "../components/CourseVideoComponent.jsx";
import Disscussion from '../components/Disscussion.jsx';
import Footer from "../components/Footer.jsx";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudentSessions } from "../redux/StudentSessionsAction.js";

const VideoCoursePage = () => {
    const [activeTab, setActiveTab] = useState('Discussions');
    const studentSessions = useSelector(state => state?.course?.studentSession?.studentSessions || []);
    const user = useSelector(state => state?.auth?.user);
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(studentSessions);

    useEffect(() => {
        if (id && user?.id) {
            dispatch(fetchAllStudentSessions(id, user?.id));
        }
    }, [dispatch, id, user?.id]);

    const handleClick = (tabName) => {
        setActiveTab(tabName);
    };

    const tabData = useMemo(() => ([
        { name: 'Summary', label: 'Summary' },
        { name: 'Discussions', label: 'Discussion (50)' },
        { name: 'Resources & documents', label: 'Resources & documents' },
        { name: 'Transcript', label: 'Transcript' },
        { name: 'Related Course', label: 'Related Course' },
    ]), []);

    return (
        <>
            <div className="mx-auto container">
                <CourseVideoComponent courseId={id} userId={user?.id} studentSessions={studentSessions} />
                <div className='mt-6 pb-12'>
                    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                        <ul className="flex flex-wrap -mb-px">
                            {tabData.map(tab => (
                                <li key={tab.name} className="me-2">
                                    <a
                                        href="#"
                                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab.name
                                            ? 'text-blue-indigo font-bold border-blue-indigo'
                                            : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                                        }`}
                                        onClick={() => handleClick(tab.name)}
                                        aria-current={activeTab === tab.name ? 'page' : undefined}
                                    >
                                        {tab.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Display content based on the active tab */}
                </div>
                {activeTab === 'Discussions' && <Disscussion studentSessions={studentSessions} />}
                {activeTab === 'Summary' && (
                    <div className="mb-96">
                        <h2 className="text-lg font-bold">Reviews</h2>
                        <p>This is the content for the Reviews tab.</p>
                    </div>
                )}
                {activeTab === 'Resources & documents' && (
                    <div className="mb-96">
                        <h2 className="text-lg font-bold">Resources & documents</h2>
                        <p>This is the content for the Resources & documents tab.</p>
                    </div>
                )}
                {activeTab === 'Transcript' && (
                    <div className="mb-96">
                        <h2 className="text-lg font-bold">Transcript</h2>
                        <p>This is the content for the Transcript tab.</p>
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

export default VideoCoursePage;
