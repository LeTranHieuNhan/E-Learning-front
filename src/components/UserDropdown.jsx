import React, {useState, useEffect, useRef} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {MdOutlineSettings, MdLogout} from "react-icons/md";
import {VscAccount} from "react-icons/vsc";
import {TfiAlarmClock} from "react-icons/tfi";
import {logout} from "../redux/authActions.js";
import {useDispatch} from "react-redux";

const UserDropdown = ({handleLogout , user} ) => {
    // State to manage the visibility of the dropdown
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    // Function to toggle the visibility of the dropdown
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close dropdown when changing routes
    useEffect(() => {
        setDropdownVisible(false);
    }, [location]);

    return (
        <div className="relative py-2 flex" ref={dropdownRef}>
            {/* Avatar button */}
            <img
                id="avatarButton"
                role="button"
                aria-haspopup="true"
                aria-expanded={isDropdownVisible}
                onClick={toggleDropdown}
                className="w-9 h-9 rounded-full cursor-pointer"
                src={user?.avatar || "https://i.pravatar.cc/300" }
                alt="User dropdown"
            />

            {/* Dropdown menu */}
            <div
                id="userDropdown"
                className={`absolute top-12 right-0 z-10 ${
                    isDropdownVisible ? "inline" : "hidden"
                } rounded-lg z-100`}
                role="menu"
                aria-labelledby="avatarButton"
            >
                <div className="shadow-2xl rounded-xl mt-2 bg-[whitesmoke] z-auto">
                    {/* User info */}
                    <div className="px-4 py-3 text-sm text-gray-900">
                        <div className="font-bold">{user?.name}</div>
                        <div className="font-xs truncate">{user?.email}</div>
                    </div>

                    {/* Menu items */}
                    <ul className="py-2 text-sm text-gray-700 px-2" role="none">
                        <li role="menuitem" className="flex items-center">
                            <VscAccount className="h-4 w-4"/>
                            <Link
                                to="/UserProfile"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                My Profile
                            </Link>
                        </li>
                        <li role="menuitem" className="flex items-center">
                            <TfiAlarmClock className="h-4 w-4"/>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Alert
                            </a>
                        </li>
                        <li role="menuitem" className="flex items-center">
                            <MdOutlineSettings className="h-4 w-4"/>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Settings
                            </a>
                        </li>
                    </ul>

                    {/* Sign out */}
                    <div className="py-1 flex items-center px-1.5" role="menuitem">
                        <MdLogout className="ml-1"/>
                        <button onClick={handleLogout} >
                            Sign out
                        </button>
                    </div>
                </div>
            </div>

            {/* Arrow icon for dropdown */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="gray"
                className="w-4 h-4 my-[9px] ml-2 cursor-pointer"
                onClick={toggleDropdown}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
            </svg>
        </div>
    );
};

export default UserDropdown;
