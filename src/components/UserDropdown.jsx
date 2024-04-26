import React, { useState } from 'react';
import {MdOutlineSettings, MdLogout } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { TfiAlarmClock } from "react-icons/tfi";


const UserDropdown = () => {
    // State to manage the visibility of the dropdown
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle the visibility of the dropdown
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="relative py-2 flex">
            {/* Avatar button */}
            <img
                id="avatarButton"
                role="button"
                aria-haspopup="true"
                aria-expanded={isDropdownVisible}
                onClick={toggleDropdown}
                className="w-9 h-9 rounded-full cursor-pointer"
                src="https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                alt="User dropdown"
            />

            {/* Dropdown menu */}
            <div
                id="userDropdown"
                className={`absolute top-12 right-0 z-10 ${isDropdownVisible ? 'inline' : 'hidden'} rounded-lg`}
                role="menu"
                aria-labelledby="avatarButton"
            >
                <div className="bg-transparent shadow-xl">

                    {/* User info */}
                    <div className="px-4 py-3 text-sm text-gray-900">
                        <div className="font-bold">Bonnie Green</div>
                        <div className="font-xs truncate">name@flowbite.com</div>
                    </div>

                    {/* Menu items */}
                    <ul className="py-2 text-sm text-gray-700" role="none">
                    <li role="menuitem" className="flex items-center">
                            <VscAccount />
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">My Profile</a>
                        </li>
                        <li role="menuitem" className="flex items-center">
                            <TfiAlarmClock />
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Alert</a>
                        </li>
                        <li role="menuitem" className="flex items-center">
                            <MdOutlineSettings className="mr-1" />
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                        </li>
                    </ul>

                    {/* Sign out */}
                    <div className="py-1 flex items-center" role="menuitem">
                        <MdLogout className="ml-1" />
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                    </div>
                </div>

                {/* Arrow icon for dropdown */}

            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="gray"
                className="w-4 h-4 my-[9px] ml-2 cursor-pointer"
                onClick={toggleDropdown}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
            </svg>
        </div>
    );
};

export default UserDropdown;
