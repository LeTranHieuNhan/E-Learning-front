import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCourseRating, fetchCourseRatingsByCourseId } from '../redux/courseRatingActions.js';
import {getUserByTokenAction} from "../redux/authActions.js";

const ReviewSection = ({ courseId }) => {
    const dispatch = useDispatch();
    const courseRatings = useSelector(state => state.course.courseRating.courseRatings);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReviewListModalOpen, setIsReviewListModalOpen] = useState(false);
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');
    const user = useSelector(state => state.auth.user);
    console.log(user);
    useEffect(() => {
        dispatch(getUserByTokenAction(localStorage.getItem('token')));

    }, []);

    useEffect(() => {
        dispatch(fetchCourseRatingsByCourseId(courseId));
    }, [dispatch, courseId]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openReviewListModal = () => setIsReviewListModalOpen(true);
    const closeReviewListModal = () => setIsReviewListModalOpen(false);

    const handleRatingChange = (e) => setRating(e.target.value);
    const handleReviewChange = (e) => setReview(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCourseRating = { rating, review };
        await dispatch(createCourseRating(courseId, user?.id, newCourseRating)); // Assume userId is 1 for now
        setIsModalOpen(false);
        setRating(5);
        setReview('');
    };

    const totalReviews = courseRatings.length;
    const averageRating = courseRatings.reduce((sum, rating) => sum + rating.rating, 0) / totalReviews || 0;

    return (
        <div className="mt-12 mb-12">
            <h2 className="text-xl text-neutral-900 font-sora font-bold">Review</h2>

            <span className="flex gap-1 text-sm font-sans text-[#8E949FFF] mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="w-5 h-5 text-yellow-500">
                  <path fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"/>
                </svg>
                <span className="font-bold text-[#222730FF]">{averageRating.toFixed(1)}</span>
                ({totalReviews} reviews)
            </span>
            <div className="mt-5 grid grid-cols-2 gap-4">
                {courseRatings.slice(0, 4).map((rating, index) => (
                    <div key={index} className="flex flex-col gap-4 mb-[46px]">
                        <div className="flex items-center">
                            <img
                                className="w-9 h-9 rounded-full mr-2"
                                src={rating.user.avatar || "https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"}
                                alt=""
                            />
                            <div className="flex flex-col font-sans">
                                <span className="text-sm text-neutral-900 font-bold">{rating.user.name}</span>
                                <span className="text-sm text-neutral-700 text-[12px]">
                                    Rated {rating.rating}
                                    <span className="ml-2 text-[12px] text-neutral-500">{new Date(rating.created_at).toLocaleTimeString()}</span>
                                </span>
                            </div>
                        </div>
                        <p className="font-sans text-sm text-neutral-900">
                            {rating.review}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex gap-4">
                {totalReviews > 4 && (
                    <button
                        className="border font-sans text-sm border-blue-indigo bg-blue-indigo text-white p-2 rounded mt-4"
                        onClick={openReviewListModal}
                    >
                        View All
                    </button>
                )}
                <button
                    className="border font-sans text-sm bg-transparent border-blue-indigo text-blue-indigo p-2 rounded mt-4"
                    onClick={openModal}
                >
                    Write a review
                </button>
            </div>

            {isReviewListModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={closeReviewListModal}></div>
                    <div className="bg-white p-8 rounded shadow-lg z-10 max-w-3xl w-full max-h-[80%] overflow-y-auto relative">
                        <h2 className="text-xl font-bold mb-4">All Reviews</h2>
                        <button
                            className="absolute top-4 right-4 text-gray-600 text-2xl"
                            onClick={closeReviewListModal}
                        >
                            &times;
                        </button>
                        {courseRatings.map((rating, index) => (
                            <div key={index} className="flex flex-col gap-4 mb-[46px]">
                                <div className="flex items-center">
                                    <img
                                        className="w-9 h-9 rounded-full mr-2"
                                        src={rating.user.avatar || "https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"}
                                        alt=""
                                    />
                                    <div className="flex flex-col font-sans">
                                        <span className="text-sm text-neutral-900 font-bold">{rating.user.name}</span>
                                        <span className="text-sm text-neutral-700 text-[12px]">
                                            Rated {rating.rating}
                                            <span className="ml-2 text-[12px] text-neutral-500">{new Date(rating.created_at).toLocaleTimeString()}</span>
                                        </span>
                                    </div>
                                </div>
                                <p className="font-sans text-sm text-neutral-900">
                                    {rating.review}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    <div className="bg-white p-8 rounded shadow-lg z-10 max-w-2xl w-full relative">
                        <h2 className="text-xl font-bold mb-4">Write a Review</h2>
                        <button
                            className="absolute top-4 right-4 text-red-500"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Rating</label>
                                <select value={rating} onChange={handleRatingChange} className="border rounded w-full py-2 px-3 text-gray-700">
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Review</label>
                                <textarea value={review} onChange={handleReviewChange} className="border rounded w-full py-2 px-3 text-gray-700" rows="4"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="border font-sans text-sm bg-transparent border-red-500 text-red-500 p-2 rounded mr-2"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="border font-sans text-sm bg-blue-500 text-white p-2 rounded"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewSection;
