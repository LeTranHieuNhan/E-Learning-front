import React from "react";
import {Outlet} from "react-router-dom";
import UserDropdown from "./UserDropdown.jsx";
import {Searching} from "./Searching.jsx";

const Header = () => {
    return (
        <>
            <div className="flex justify-between  top-0  h-14 bg-white rounded-none shadow-xs border-2 mb-9 sticky ">
                {/* For left side  */}
                <div className="flex gap-10    ">
                    <h2 className="text-3xl py-2 text-blue-600 font-bold ml-6  ">Ceetech</h2>


                    <ul className="flex gap-8 ">
                        <li className="menu-item">Home</li>
                        <li className="menu-item">My courses</li>
                        <li className="menu-item"> Dashboard</li>
                        <li className="menu-item">Promotions</li>
                        <li className="menu-item">Support</li>

                    </ul>
                </div>
                <div className="flex gap-8 justify-evenly px-12 ">
                    {/*Searching*/}

                    <Searching/>
                    {/*Notification */}
                    <div className="inline-block mt-3 cursor-pointer">

                        <svg

                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
                        </svg>

                    </div>
                    {/*User dropdown*/}
                    <UserDropdown/>


                </div>

            </div>
            <Outlet/>
        </>
    );
};

export default Header;
