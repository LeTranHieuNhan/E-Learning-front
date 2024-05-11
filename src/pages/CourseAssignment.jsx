import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const CourseAssignment = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <form class="w-[350px] mx-auto ">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Searching assignments ..."
              required
            />
          </div>
        </form>
        <div className="">
          <div className="w-[700px] justify-between flex mt-3">
            <h1>There is no deadline</h1>
            <h1 className="text-blue-400">2</h1>
          </div>
          <div className="mt-3 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 text-white bg-blue-600 rounded-full p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
            <div className="ml-[9px] ">
              <h1>First class</h1>
              <h1 className="text-[#9095A0FF]">AI Class</h1>
              <h1 className="text-[#9095A0FF]">uploaded Today</h1>
            </div>
          </div>
          <div className="flex mt-[22px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 text-white bg-blue-600 rounded-full p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
            <Link to="/AssignDes">
              <div className="ml-[9px] cursor-pointer ">
                <h1>Exploring the Ethicl Implications of l in Healthcare</h1>
                <h1 className="text-[#9095A0FF]">AI Class</h1>
                <h1 className="text-[#9095A0FF]">uploaded Today</h1>
              </div>
            </Link>
          </div>
          <div className="mt-[26px] text-[#565E6CFF]">
            <div className="w-[700px] justify-between flex">
              <h1>This week</h1>
              <h1 className="text-[#565E6CFF]">0</h1>
            </div>
            <div className="w-[700px] justify-between flex mt-[15px]">
              <h1>Next week</h1>
              <h1 className="text-[#565E6CFF]">0</h1>
            </div>
            <div className="w-[700px] justify-between flex mt-[15px]">
              <h1>After that</h1>
              <h1 className="text-[#565E6CFF]">0</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseAssignment;
