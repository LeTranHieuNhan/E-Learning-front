import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment, fetchComments, updateComment, deleteComment } from "../redux/commentActions.js";
import { createReply, fetchRepliesByCommentId, updateReply, deleteReply } from "../redux/replyCommentActions.js";

const formatDate = (date) => {
    return new Date(date).toLocaleString();
};

const Discussion = () => {
    const [body, setBody] = useState('');
    const [editBody, setEditBody] = useState('');
    const [editId, setEditId] = useState(null);
    const [replyBody, setReplyBody] = useState('');
    const [replyEditBody, setReplyEditBody] = useState('');
    const [replyEditId, setReplyEditId] = useState(null);
    const [showReplyBox, setShowReplyBox] = useState(null);
    const [replyComments, setReplyComments] = useState({});
    const textareaRef = useRef(null);
    const dispatch = useDispatch();
    const comments = useSelector(state => state?.course?.comment?.comments || []);
    const courseSessionId = useSelector(state => state?.course?.studentSession?.studentSessions[0]?.courseSession?.id);
    const userId = useSelector(state => state?.auth?.user?.id);
    const userRole = useSelector(state => state?.auth?.user?.role);

    useEffect(() => {
        if (courseSessionId) {
            dispatch(fetchComments(courseSessionId));
        }
    }, [dispatch, courseSessionId]);

    useEffect(() => {
        const fetchReplies = async () => {
            const replies = {};
            for (const comment of comments) {
                const response = await dispatch(fetchRepliesByCommentId(comment.id));
                if (response.payload) {
                    replies[comment.id] = response.payload;
                }
            }
            setReplyComments(replies);
        };
        if (comments.length > 0) {
            fetchReplies();
        }
    }, [dispatch, comments]);

    const handleInputChange = (event) => {
        setBody(event.target.value);
    };

    const handleEditChange = (event) => {
        setEditBody(event.target.value);
    };

    const handleReplyChange = (event) => {
        setReplyBody(event.target.value);
    };

    const handleReplyEditChange = (event) => {
        setReplyEditBody(event.target.value);
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [body]);

    const handleCommentSubmit = async () => {
        if (!courseSessionId || !userId) {
            alert('Course session ID or user ID is missing.');
            return;
        }

        if (body.trim()) {
            const newComment = { body };
            await dispatch(createComment(newComment, courseSessionId, userId));
            setBody('');
            dispatch(fetchComments(courseSessionId));
        }
    };

    const handleEditSubmit = async (id) => {
        if (editBody.trim()) {
            await dispatch(updateComment(id, { body: editBody }));
            setEditId(null);
            setEditBody('');
            dispatch(fetchComments(courseSessionId));
        }
    };

    const handleReplySubmit = async (commentId) => {
        if (!courseSessionId || !userId) {
            alert('Course session ID or user ID is missing.');
            return;
        }

        if (replyBody.trim()) {
            const newReply = { body: replyBody };
            await dispatch(createReply(newReply, commentId, userId));
            setReplyBody('');
            setShowReplyBox(null);
            const response = await dispatch(fetchRepliesByCommentId(commentId));
            if (response.payload) {
                setReplyComments(prevState => ({
                    ...prevState,
                    [commentId]: response.payload
                }));
            }
        }
    };

    const handleReplyEditSubmit = async (id, commentId) => {
        if (replyEditBody.trim()) {
            await dispatch(updateReply(id, { body: replyEditBody }));
            setReplyEditId(null);
            setReplyEditBody('');
            const response = await dispatch(fetchRepliesByCommentId(commentId));
            if (response.payload) {
                setReplyComments(prevState => ({
                    ...prevState,
                    [commentId]: response.payload
                }));
            }
        }
    };

    const handleEditClick = (comment) => {
        setEditId(comment.id);
        setEditBody(comment.body);
    };

    const handleReplyEditClick = (reply) => {
        setReplyEditId(reply.id);
        setReplyEditBody(reply.body);
    };

    const handleDeleteClick = async (id) => {
        await dispatch(deleteComment(id));
        dispatch(fetchComments(courseSessionId));
    };

    const handleReplyDeleteClick = async (id, commentId) => {
        await dispatch(deleteReply(id));
        const response = await dispatch(fetchRepliesByCommentId(commentId));
        if (response.payload) {
            setReplyComments(prevState => ({
                ...prevState,
                [commentId]: response.payload
            }));
        }
    };

    const handleShowReplyBox = async (commentId) => {
        setShowReplyBox(commentId);
        if (!replyComments[commentId]) {
            const response = await dispatch(fetchRepliesByCommentId(commentId));
            if (response.payload) {
                setReplyComments(prevState => ({
                    ...prevState,
                    [commentId]: response.payload
                }));
            }
        }
    };

    return (
        <div className='mb-96'>
            <div className='flex gap-1'>
                <img
                    className='w-9 h-9 rounded-full'
                    src="https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                    alt="User Avatar"
                />
                <div className='flex gap-4 w-4/6 text-[#6E75D1FF] shadow-sm border items-center px-6 py-4 rounded'>
                    <div className="relative flex items-center w-full">
                        <textarea
                            className="w-full bg-[#F3F4F6FF] text-neutral-600 overflow-hidden text-sm rounded-xl p-2 pl-8 border border-gray-300 focus:border-blue-500 focus:outline-none"
                            placeholder="Leave a comment"
                            value={body}
                            ref={textareaRef}
                            onChange={handleInputChange}
                            style={{ resize: 'none' }} // Prevent manual resizing
                        />
                        <button
                            className="absolute right-2 text-white bg-blue-500 px-3 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                            onClick={handleCommentSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 mt-6 w-9/12 px-6 py-4">
                {Array.isArray(comments) && comments.length > 0 ? comments.map((comment) => (
                    <div className='mb-12' key={comment.id}>
                        <div className='flex gap-2 font-sans'>
                            <img
                                className='w-9 h-9 rounded-full'
                                src={comment.user.avatar || "https://img.freepik.com/premium-vector/flat-2d-young-male-icon-design_703262-395.jpg?size=626&ext=jpg"}  // Assume user has an avatar property
                                alt={comment.user.name}  // Assume user has a name property
                            />
                            <span className='font-semibold text-sm'>{comment.user.name}</span>
                            <span className='text-neutral-600 text-[12px]'>{formatDate(comment.created_at)}</span>
                        </div>
                        {editId === comment.id ? (
                            <div>
                                <textarea
                                    className='w-full p-2 border rounded'
                                    value={editBody}
                                    onChange={handleEditChange}
                                />
                                <button
                                    className='text-white bg-blue-500 px-3 py-1 rounded-md focus:outline-none hover:bg-blue-600'
                                    onClick={() => handleEditSubmit(comment.id)}
                                >
                                    Save
                                </button>
                                <button
                                    className='text-white bg-gray-500 px-3 py-1 rounded-md focus:outline-none hover:bg-gray-600 ml-2'
                                    onClick={() => {
                                        setEditId(null);
                                        setEditBody('');
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <p className='p-4 text-[#323842FF] text-sm'>{comment.body}</p>
                        )}
                        <div className='flex gap-4 font-sans text-sm'>
                            <span className='p-2 bg-purple-violet cursor-pointer text-white rounded-lg ' onClick={() => handleShowReplyBox(comment.id)}>Reply</span>
                            {(comment.user.id === userId || userRole === 'ADMIN') && (
                                <>
                                    <span className='p-2 text-blue-500 cursor-pointer' onClick={() => handleEditClick(comment)}>Edit</span>
                                    <span className='p-2 text-red-500 cursor-pointer' onClick={() => handleDeleteClick(comment.id)}>Delete</span>
                                </>
                            )}
                        </div>
                        {showReplyBox === comment.id && (
                            <div className='mt-4'>
                                <textarea
                                    className='w-full p-2 border rounded'
                                    value={replyBody}
                                    onChange={handleReplyChange}
                                    placeholder="Write a reply..."
                                />
                                <button
                                    className='text-white bg-blue-500 px-3 py-1 rounded-md focus:outline-none hover:bg-blue-600'
                                    onClick={() => handleReplySubmit(comment.id)}
                                >
                                    Submit
                                </button>
                            </div>
                        )}
                        <div className='mt-4 ml-8'>
                            {replyComments[comment.id] && replyComments[comment.id].map(reply => (
                                <div key={reply.id} className='mb-4'>
                                    <div className='flex gap-2 font-sans'>
                                        <img
                                            className='w-6 h-6 rounded-full'
                                            src={reply.user.avatar || "https://img.freepik.com/premium-vector/flat-2d-young-male-icon-design_703262-395.jpg?size=626&ext=jpg"}
                                            alt={reply.user.name}
                                        />
                                        <span className='font-semibold text-sm'>{reply.user.name}</span>
                                        <span className='text-neutral-600 text-[12px]'>{formatDate(reply.created_at)}</span>
                                    </div>
                                    {replyEditId === reply.id ? (
                                        <div>
                                            <textarea
                                                className='w-full p-2 border rounded'
                                                value={replyEditBody}
                                                onChange={handleReplyEditChange}
                                            />
                                            <button
                                                className='text-white bg-blue-500 px-3 py-1 rounded-md focus:outline-none hover:bg-blue-600'
                                                onClick={() => handleReplyEditSubmit(reply.id, comment.id)}
                                            >
                                                Save
                                            </button>
                                            <button
                                                className='text-white bg-gray-500 px-3 py-1 rounded-md focus:outline-none hover:bg-gray-600 ml-2'
                                                onClick={() => {
                                                    setReplyEditId(null);
                                                    setReplyEditBody('');
                                                }}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <p className='pl-8 text-[#323842FF] text-sm'>{reply.body}</p>
                                    )}
                                    <div className='flex gap-4 font-sans text-sm'>
                                        {(reply.user.id === userId || userRole === 'ADMIN') && (
                                            <>
                                                <span className='p-2 text-blue-500 cursor-pointer' onClick={() => handleReplyEditClick(reply)}>Edit</span>
                                                <span className='p-2 text-red-500 cursor-pointer' onClick={() => handleReplyDeleteClick(reply.id, comment.id)}>Delete</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )) : <p>No comments available.</p>}
            </div>
        </div>
    );
};

export default Discussion;
