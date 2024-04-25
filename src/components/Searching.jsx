import React from "react";

export const Searching = () => {
    return (
        <div className="flex  rounded bg-white h-full py-2  relative">

            <svg
                className="absolute top-1/2 transform -translate-y-1/2 left-2 w-4 h-4 text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21L15.803 15.803M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                />
            </svg>


            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
                className="w-full bg-gray-100  text-gray-900 border-none outline-none focus:outline-none px-12"
            />
        </div>
    )
}