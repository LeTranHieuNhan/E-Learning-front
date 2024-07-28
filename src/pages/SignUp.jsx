import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../redux/authActions.js";

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(registerUser(username, email, password));
        navigate('/');
    };

    const handleMouseDown = () => {
        setPasswordVisible(true);
    };

    const handleMouseUp = () => {
        setPasswordVisible(false);
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="E-learning"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create an account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div>
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="block w-full p-2 rounded-md mt-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900 mt-6"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2 relative">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type={passwordVisible ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md p-2 border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                <path
                                    fillRule="evenodd"
                                    d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex mt-[32px] w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                        <div
                            className="flex items-center justify-center mt-[32px] text-[#323842FF] text-[14px] leading-[22px] font-sans font-normal">
                            Or sign up with
                        </div>
                    </div>
                </form>
                <div className="w-full gap-4 mb-2 lg:mb-0 mt-[20px] flex p-8">
                    <button
                        type="button"
                        className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-[18px] hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4"
                            id="google"
                        >
                            <path
                                fill="#fbbb00"
                                d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                            ></path>
                            <path
                                fill="#518ef8"
                                d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-44.732 66.029-77.327H261.538V208.176h246.009z"
                            ></path>
                            <path
                                fill="#28b446"
                                d="M416.537 455.638 416.551 455.652c-41.424 33.797-94.01 54.348-151.013 54.348-86.221 0-162.075-48.264-200.14-118.982l73.239-59.939c20.083 43.693 64.535 74.362 115.526 74.362 23.197 0 45.03-6.174 63.494-16.9l98.897 67.159z"
                            ></path>
                            <path
                                fill="#f14336"
                                d="M419.404 58.531l-73.224 59.939c-20.083-13.749-43.963-21.851-69.646-21.851-51.398 0-95.014 32.431-111.259 77.747l-73.423-60.168h-.014C119.33 55.835 187.447 16 266.534 16c57.585 0 110.046 21.775 150.46 57.812l2.41 1.719z"
                            ></path>
                        </svg>
                        Google
                    </button>
                    <button
                        type="button"
                        className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-[18px] hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 310 310"
                            fill="currentColor"
                            className="w-4"
                            id="facebook"
                        >
                            <path
                                d="M302.125 0H7.875A7.878 7.878 0 0 0 0 7.875v294.25A7.878 7.878 0 0 0 7.875 310h158.204V190.021h-43.1v-49.213h43.1V106.29c0-42.661 26.068-65.846 64.178-65.846 18.262 0 33.953 1.358 38.529 1.961v44.662h-26.421c-20.706 0-24.706 9.841-24.706 24.282v31.791h49.48l-6.443 49.213h-43.037V310h84.51A7.878 7.878 0 0 0 310 302.125V7.875A7.878 7.878 0 0 0 302.125 0z"
                            ></path>
                        </svg>
                        Facebook
                    </button>
                </div>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
