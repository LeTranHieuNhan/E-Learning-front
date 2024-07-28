import React from 'react';
import { useSelector } from 'react-redux';

const ProfileHeader = ({ onEditClick }) => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="ml-10 my-8">
            <img
                className="h-30 w-30 rounded-full border-4 border-white dark:border-gray-800"
                src={user?.avatar || "https://i.pravatar.cc/300"}
                alt=""
            />
            <h1 className="text-gray-800 text-2xl font-bold mt-3">
                {user?.name}
            </h1>
            <button
                className="mt-8 bg-indigo-600 text-white rounded-full h-9 w-36 flex items-center justify-center gap-2 text-sm"
                onClick={onEditClick}
            >
                Edit profile
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default ProfileHeader;
