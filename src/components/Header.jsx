import React, {useEffect} from "react";
import {Link, Outlet} from "react-router-dom";
import UserDropdown from "./UserDropdown.jsx";
import {Searching} from "./Searching.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getUserByTokenAction, LOGOUT} from "../redux/authActions.js";

const Header = () => {
    const { isAuthenticated, token } = useSelector((state) => state.auth);
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    useEffect(() => {
        // Fetch user data when component mounts if the user is authenticated
        if (isAuthenticated && token) {
            dispatch(getUserByTokenAction(token));
        }
    }, [dispatch, isAuthenticated, token]);

    const handleLogout = () => {
        dispatch({ type: LOGOUT });
    };
    return (
        <>
            <div
                className="flex justify-between  top-0  h-14 bg-white rounded-none shadow-xs border-2 mb-9 sticky  z-50">
                {/* For left side  */}
                <div className="flex gap-10    ">
                    <Link to="/">

                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-10 w-30 mt-1 ml-12"
                             alt="FlowBite Logo"/>
                    </Link>


                    <ul className="flex gap-8 ">
                        <li className="menu-item">Home</li>
                        <li className="menu-item">My courses</li>
                        <a href={"http://localhost:3000/DashboardHome"}>

                        <li className="menu-item"> Dashboard</li>
                        </a>
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
                    {  isAuthenticated   ? (
                        <UserDropdown user = {user} handleLogout={handleLogout}/>
                    ) : (
                        <div className=" font-sans flex gap-3">
                            <Link to="/SignIn">

                            <button className="text-sm font-bold border px-2 w-24 bg-blue-indigo text-white rounded-lg h-10 items-center mt-1 ">Sign in</button>
                            </Link>
                            <Link to="/SignUp">

                            <button className="text-sm font-bold    px-2 w-24 h-10 mt-1 border border-gray-600  bg-text-gray-600 rounded-lg" >Sign up</button>
                            </Link>
                        </div>
                    )}


                </div>

            </div>
            <Outlet/>
        </>
    );
};

export default Header;
