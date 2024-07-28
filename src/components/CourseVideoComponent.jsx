import React, { useState, useMemo, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { markAsWatched } from "../redux/StudentSessionsAction.js";

const CourseVideoComponent = () => {
    const dispatch = useDispatch();
    const studentSessions = useSelector(state => state.studentSessions.studentSessions);

    const sortedSessions = useMemo(() => {
        return studentSessions ? [...studentSessions].sort((a, b) => a.courseSession.sessionOrder - b.courseSession.sessionOrder) : [];
    }, [studentSessions]);

    const [currentSession, setCurrentSession] = useState(null);
    const [videoDuration, setVideoDuration] = useState(0); // State to store video duration
    const [isWatched, setIsWatched] = useState(false); // State to track if video is marked as watched

    useEffect(() => {
        if (sortedSessions.length && !currentSession) {
            const latestWatchedSession = sortedSessions.find(session => session.status === 'WATCHED') || sortedSessions[0];
            setCurrentSession(latestWatchedSession.courseSession);
        }
    }, [sortedSessions, currentSession]);

    const handleSessionClick = (session) => {
        setCurrentSession(session.courseSession);
    };

    const handleDuration = (duration) => {
        setVideoDuration(duration);
    };

    const handleProgress = ({ played }) => {
        if (played > 0.3 && !isWatched) {
            console.log('Mark as watched')
            dispatch(markAsWatched(currentSession.id));
            setIsWatched(true);
        }
    };

    return (
        <div>
            <div className='flex justify-between    '>
                <div>
                    <h2 className="font-sora text-[32px] font-bold text-neutral-900">{currentSession?.title}</h2>
                    <div className="text-sm font-sans flex gap-2">
                        <span className="text-blue-indigo cursor-pointer">
                            {sortedSessions[0]?.courseSession?.course?.user?.name}
                        </span>
                        <span className="flex gap-1 text-neutral-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 border-l border-neutral-500 text-yellow-400">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd"/>
                            </svg>
                            <span className="font-bold text-[#222730FF]">4.9</span>
                            (1395 reviews)
                        </span>
                    </div>
                </div>
                <div className='flex gap-2 font-sans text-sm mt-4'>
                    <button className='flex gap-2 bg-[#F3F4FBFF] text-[#6E75D1FF] p-2 rounded h-9 w-[90px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd"/>
                        </svg>
                        Share
                    </button>
                    <Link to='/CourseAssignment'>
                        <button className='flex gap-2 p-2 bg-purple-violet text-white rounded w-[116px] h-9'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                            </svg>
                            Assignments
                        </button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-10 gap-4 mt-4">
                <div className="col-span-7 h-full">
                    <ReactPlayer
                        url={currentSession?.videoUrl}
                        controls
                        width="100%"
                        height="100%"
                        onDuration={handleDuration} // Callback to get video duration
                        onProgress={handleProgress} // Callback to track video progress
                    />
                    </div>
                <div className="col-span-3 p-4">
                    <div className="flex justify-between">
                        <h3 className="font-sora text-[#6E75D1FF] font-bold text-xl">Sessions</h3>
                        <span className="font-bold">{`${sortedSessions.filter(session => session.status === 'WATCHED').length}/${sortedSessions.length} Completed`}</span>
                    </div>

                    {sortedSessions.map((session) => {
                        const { videoUrl, title, sessionOrder } = session?.courseSession;
                        const { status } = session;
                        const isActive = currentSession?.id === session.courseSession.id;
                        const isCompleted = status === "WATCHED";

                        return (
                            <div
                                key={session.id}
                                className={`flex justify-between items-center mt-3 font-sora cursor-pointer py-4 px-2 ${isActive ? 'bg-[#FFF4F0FF] text-[#F84B01FF]' : 'text-[#9095A0FF]'}`}
                                onClick={() => handleSessionClick(session)}
                            >
                                <h2 className={`text-sm ${!isCompleted ? 'font-bold' : ''}`}>
                                    {`${sessionOrder}. ${title}`}
                                </h2>
                                <div className="flex items-center">
                                    {isActive && (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#F84B01FF]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                        </svg>
                                    )}
                                    {isCompleted && !isActive && (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#2ACCCFFF]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                        </svg>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CourseVideoComponent;
