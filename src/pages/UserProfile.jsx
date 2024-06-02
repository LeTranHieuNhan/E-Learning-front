import React, {useEffect, useState} from "react";
import Footer from "../components/Footer";
import {Dialog, DialogPanel} from "@headlessui/react";
import {useDispatch, useSelector} from "react-redux";
import {getUserByTokenAction} from "../redux/authActions.js";

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClassVisible, setIsClassVisible] = useState(false);
    const { isAuthenticated, token } = useSelector((state) => state.auth);
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    useEffect(() => {
        // Fetch user data when component mounts if the user is authenticated
        if (isAuthenticated && token) {
            dispatch(getUserByTokenAction(token));
        }
    }, [dispatch, isAuthenticated, token]);


    const toggleClassVisibility = () => {
        setIsClassVisible(!isClassVisible);
    };



    return (
        <>
            <div className="grid grid-cols-3 gap-4 divide-x">
                <div className="col-span-2">
                    <div className="mt-[32px] ml-[155px]">
                        <ul className="flex gap-1 text-[#171A1FFF] text-[14px] leading-[22px] font-sans font-normal">
                            <li className="menu-item">Course Attended</li>
                            <li className="menu-item">Message</li>
                            <li className="menu-item">My articles</li>
                            <li className="menu-item">Drafting</li>
                        </ul>

                        <div className="shadow border rounded-md w-[700px] h-[168px] mt-[45px] bg-gray-100">
                            <div className="mt-6 ml-6">
                                <h1 className="text-gray-900 text-2xl leading-9 font-sans font-bold">
                                    J2YB Class
                                </h1>
                                <h2 className="mt-1 text-gray-900 text-sm leading-6 font-sans font-normal">
                                    Dao Vo
                                </h2>
                                <button
                                    className="mt-10"
                                    onClick={toggleClassVisibility}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                        />
                                    </svg>
                                </button>
                                {isClassVisible && (
                                    <div className="flex hover:bg-gray-300 w-32 h-10 justify-between px-2 items-center py-2 rounded bg-white cursor-pointer shadow-xl ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-4 h-4 ml-2 text-red-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            />
                                        </svg>
                                        <button className="text-xs leading-5 font-sans font-bold text-red-600 ">
                                            Out this class
                                        </button>
                                    </div>

                                )}
                            </div>
                        </div>


                    </div>
                </div>

                <div className="col-span-1">
                    <div className="grid grid-cols-1 divide-y">
                        <div className="ml-[40px] mt-[30px]">
                            <img
                                className="h-[120px] w-[120px] rounded-full border-4 border-white dark:border-gray-800"
                                src={user?.avatar}
                                alt=""
                            />
                            <h1 className="text-[#171A1FFF] text-[24px] leading-[36px] font-sans font-bold mt-[12px]">
                                {user?.name}
                            </h1>
                            <button
                                className="mt-[32px] bg-[#6E75D1FF] text-white rounded-[18px] justify-center h-[36px] w-[150px] items-center flex gap-2 text-[14px] leading-[22px] font-sans font-normal">
                                Draft an article
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => setIsOpen(true)}
                                className="mt-[12px] mb-[32px] border border-black text-[#171A1FFF] rounded-[18px] justify-center h-[36px] w-[150px] items-center flex gap-2 text-[14px] leading-[22px] font-sans font-normal"
                            >
                                Edit profile
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-[#171A1FFF]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                    />
                                </svg>
                            </button>
                            <Dialog
                                open={isOpen}
                                onClose={() => setIsOpen(false)}
                                className="relative z-50"
                            >
                                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                                    <DialogPanel
                                        className="space-y-4 border rounded-md shadow-md bg-white p-[24px] w-[752px] h-[683px]">
                                        <div className="grid grid-cols-3">
                                            <div className="col-span-1">
                                                <div className="flex gap-2 items-center p-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5 text-[#6E75D1FF] font-bold"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                        />
                                                    </svg>
                                                    <h1 className="text-[#6E75D1FF] text-[12px] leading-[20px] font-sans font-bold">
                                                        Profile
                                                    </h1>
                                                </div>
                                                <div className="flex gap-2 items-center p-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5 text-black font-bold"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                                        />
                                                    </svg>
                                                    <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal">
                                                        Password
                                                    </h1>
                                                </div>
                                                <div className="flex gap-2 items-center p-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                                        />
                                                    </svg>
                                                    <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal">
                                                        Notifications
                                                    </h1>
                                                </div>
                                                <div className="flex gap-2 items-center p-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                                        />
                                                    </svg>
                                                    <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal">
                                                        Export data
                                                    </h1>
                                                </div>
                                                <div className="flex gap-2 items-center p-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5 text-black font-bold"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                                        />
                                                    </svg>
                                                    <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal">
                                                        Plugins
                                                    </h1>
                                                </div>
                                                <div className="flex gap-2 items-center p-1 border-b-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                        />
                                                    </svg>
                                                    <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal">
                                                        Save chat history
                                                    </h1>
                                                </div>
                                                <div className="flex gap-2 items-center p-1 mt-[40px]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5 text-[#DE3B40FF] font-bold"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                        />
                                                    </svg>
                                                    <h1 className="text-[#DE3B40FF] text-[12px] leading-[20px] font-sans font-normal">
                                                        Delete your account
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <div className="ml-[48px]">
                                                    <h1 className="text-[32px] leading-[48px] font-sans font-bold">
                                                        Edit profile
                                                    </h1>
                                                    <h1 className="text-[14px] leading-[22px] font-sans font-bold mt-[16px]">
                                                        Profile photo
                                                    </h1>
                                                    <div className="mt-[16px] flex">
                                                        <img
                                                            className="h-[100px] w-[100px] rounded-lg border-4 border-white dark:border-gray-800"
                                                            src="https://randomuser.me/api/portraits/women/21.jpg"
                                                            alt=""
                                                        />
                                                        <ul>
                                                            <h1 className="text-[#171A1FFF] text-[14px] leading-[22px] font-sans font-normal">
                                                                Upload your photo
                                                            </h1>
                                                            <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal mt-[8px]">
                                                                Your photo should be in PNG or JPG format
                                                            </h1>
                                                            <div className="flex mt-[8px]">
                                                                <button
                                                                    className="text-[12px] leading-[20px] font-sans font-normal rounded border-[1px]  p-2 items-center justify-center border-[#171A1FFF] border-solid">
                                                                    Choose image
                                                                </button>
                                                                <button
                                                                    className="text-[#9095A0FF] text-[12px] leading-[20px] font-sans font-normal rounded p-2 items-center justify-center">
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                    <div className="mt-[20px]">
                                                        <form className="space-y-4">
                                                            <div>
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-[14px] leading-[22px] font-sans font-bold"
                                                                >
                                                                    Full name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="w-[420px] h-[36px] text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md"
                                                                />
                                                            </div>
                                                            <div className="mt-[16px]">
                                                                <label
                                                                    htmlFor="email"
                                                                    className="block text-[14px] leading-[22px] font-sans font-bold"
                                                                >
                                                                    Email
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    className="w-[420px] h-[36px] text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md"
                                                                />
                                                            </div>
                                                            <div className="mt-[16px]">
                                                                <label
                                                                    htmlFor="location"
                                                                    className="block text-[14px] leading-[22px] font-sans font-bold"
                                                                >
                                                                    Location
                                                                </label>
                                                                <select
                                                                    id="location"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                >
                                                                    <option>United States</option>
                                                                    <option>Canada</option>
                                                                    <option>France</option>
                                                                    <option>Germany</option>
                                                                </select>
                                                            </div>
                                                            <div className="mt-[16px]">
                                                                <label
                                                                    htmlFor="phone"
                                                                    className="block text-[14px] leading-[22px] font-sans font-bold"
                                                                >
                                                                    Phone number
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="w-[420px] h-[36px] text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md"
                                                                />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="mt-[58px] flex gap-2 ml-[300px]">
                                                    <button
                                                        onClick={() => setIsOpen(false)}
                                                        className="h-[36px] text-[14px] leading-[22px] font-sans font-normal text-[#9095A0FF]"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => setIsOpen(false)}
                                                        className="h-[36px] w-[117px] text-[14px] leading-[22px] font-sans font-normal text-[#FFFFFFFF] bg-[#171A1FFF] rounded-md"
                                                    >
                                                        Save profile
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </div>
                            </Dialog>
                        </div>
                        <div className="ml-[40px]">
                            <div className="mt-[61px] flex gap-[9px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0h1.5A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                                    />
                                </svg>
                                <h1 className="text-[#171A1FFF] text-[24px] leading-[36px] font-sans font-semibold">
                                    Following
                                </h1>
                            </div>
                            <div className="flex mt-[46px] items-center">
                                <img
                                    className="h-[32px] w-[32px] rounded-2xl border-4 border-white dark:border-gray-800"
                                    src="https://randomuser.me/api/portraits/women/21.jpg"
                                    alt=""
                                />
                                <h1 className="text-[#424955FF] text-[14px] leading-[22px] font-sans font-semibold ml-[12px]">
                                    Anthony Taylor
                                </h1>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 ml-[90px]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                            </div>
                            <div className="flex mt-[20px] items-center">
                                <img
                                    className="h-[32px] w-[32px] rounded-2xl border-4 border-white dark:border-gray-800"
                                    src="https://randomuser.me/api/portraits/women/21.jpg"
                                    alt=""
                                />
                                <h1 className="text-[#424955FF] text-[14px] leading-[22px] font-sans font-semibold ml-[12px]">
                                    Anthony Taylor
                                </h1>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 ml-[90px]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                            </div>
                            <div className="flex mt-[20px] items-center">
                                <img
                                    className="h-[32px] w-[32px] rounded-2xl border-4 border-white dark:border-gray-800"
                                    src="https://randomuser.me/api/portraits/women/21.jpg"
                                    alt=""
                                />
                                <h1 className="text-[#424955FF] text-[14px] leading-[22px] font-sans font-semibold ml-[12px]">
                                    Anthony Taylor
                                </h1>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 ml-[90px]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                            </div>
                            <div className="flex items-center text-[#6E75D1FF] mt-[24px] mb-[32px] gap-[6px]">
                                <h1 className="text-[14px] leading-[22px] font-sans font-normal">
                                    See all
                                </h1>
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
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-[40px]">
                            <div className="mt-[52px] flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 6h.008v.008H6V6Z"
                                    />
                                </svg>
                                <h1 className="text-[#171A1FFF] text-[24px] leading-[36px] font-sans font-semibold">
                                    Tag
                                </h1>
                            </div>
                            <div className="mt-[32px] flex gap-[12px]">
                                <button
                                    className="rounded-3xl bg-[#F3F4F6FF] w-[170px] h-[44px] items-center justify-between text-[#323842FF] text-[16px] leading-[26px] font-sans font-normal">
                                    Computer Science
                                </button>
                                <button
                                    className="rounded-3xl bg-[#F3F4F6FF] w-[56px] h-[44px] items-center justify-between text-[#323842FF] text-[16px] leading-[26px] font-sans font-normal">
                                    Art
                                </button>
                            </div>
                            <div className="mt-[12px] flex gap-[12px]">
                                <button
                                    className="rounded-3xl bg-[#F3F4F6FF] w-[123px] h-[44px] items-center justify-between text-[#323842FF] text-[16px] leading-[26px] font-sans font-normal">
                                    Blockbuster
                                </button>
                                <button
                                    className="rounded-3xl bg-[#F3F4F6FF] w-[120px] h-[44px] items-center justify-between text-[#323842FF] text-[16px] leading-[26px] font-sans font-normal">
                                    Technology
                                </button>
                            </div>
                            <div className="mt-[12px] flex gap-[12px]">
                                <button
                                    className="rounded-3xl bg-[#F3F4F6FF] w-[144px] h-[44px] items-center justify-between text-[#323842FF] text-[16px] leading-[26px] font-sans font-normal">
                                    Family Therary
                                </button>
                                <button
                                    className="rounded-3xl bg-[#F3F4F6FF] w-[83px] h-[44px] items-center justify-between text-[#323842FF] text-[16px] leading-[26px] font-sans font-normal">
                                    Career
                                </button>
                            </div>
                            <div className="mt-[12px] flex gap-[12px]">
                                <button
                                    className="rounded-3xl bg-[#F3F4F6FF] w-[119px] h-[44px] items-center justify-between text-[#323842FF] text-[16px] leading-[26px] font-sans font-normal">
                                    Writing tips
                                </button>
                            </div>
                            <div className="flex items-center text-[#6E75D1FF] mt-[24px] mb-[169px] gap-[6px]">
                                <h1 className="text-[14px] leading-[22px] font-sans font-normal">
                                    See all
                                </h1>
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
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default UserProfile;
