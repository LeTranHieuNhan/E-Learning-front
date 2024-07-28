import React, { useState, useEffect } from 'react';
import { Dialog } from "@headlessui/react";
import { useDispatch } from 'react-redux';
import axiosInstance from "../redux/axiosInstance.js";

const ProfileDialog = ({ isOpen, onClose, student = null, onSave }) => {
    const [profileData, setProfileData] = useState({
        avatar: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        occupation: "",
        bio: "",
    });

    const [passwordError, setPasswordError] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        if (student) {
            setProfileData({
                ...student,
                avatar: student.avatar || "",
                password: "",
                confirmPassword: "",
                occupation: student.occupation || "",
                bio: student.bio || "",
            });
        }
    }, [student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsUploading(true);

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await axiosInstance.post('/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data) {
                setProfileData({ ...profileData, avatar: response.data });
            } else {
                console.error("Upload successful, but no URL returned");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        } finally {
            setIsUploading(false);
        }
    };

    const handleRemoveImage = () => {
        setProfileData({ ...profileData, avatar: "" });
    };

    const handleSubmit = () => {
        if (profileData.password !== profileData.confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }

        onSave(profileData);
        setPasswordError("");
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4">
                <Dialog.Panel className="space-y-4 border rounded-md shadow-md bg-white p-6 w-[752px] h-auto">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">
                            <div className="flex gap-2 items-center p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-600 font-bold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <h1 className="text-indigo-600 text-sm font-bold">Profile</h1>
                            </div>
                            {/* Other menu items here... */}
                        </div>
                        <div className="col-span-2">
                            <div className="ml-12">
                                <h1 className="text-2xl font-bold">Edit Profile</h1>
                                <h1 className="text-sm font-bold mt-4">Profile photo</h1>
                                <div className="mt-4 flex">
                                    <img className="h-24 w-24 rounded-lg border-4 border-white dark:border-gray-800" src={profileData.avatar ||"" } alt="Profile" />
                                    <ul className="ml-4">
                                        <h1 className="text-gray-800 text-sm">Upload your photo</h1>
                                        <h1 className="text-gray-600 text-xs mt-2">Your photo should be in PNG or JPG format</h1>
                                        <div className="flex mt-2 gap-4">
                                            <input type="file" className="text-xs w-12" onChange={handleFileUpload} disabled={isUploading} />
                                            <button className="text-gray-500 text-xs ml-2" onClick={handleRemoveImage} disabled={isUploading}>Remove</button>
                                        </div>
                                        {isUploading && (
                                            <p className="text-blue-500 text-xs mt-2">Uploading...</p>
                                        )}
                                    </ul>
                                </div>
                                <div className="mt-5">
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-bold">Full name</label>
                                            <input type="text" name="name" value={profileData.name}
                                                   onChange={handleChange}
                                                   className="w-full h-9 bg-gray-100 rounded-md"/>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="email" className="block text-sm font-bold">Email</label>
                                            <input type="email" name="email" value={profileData.email}
                                                   onChange={handleChange}
                                                   className="w-full h-9 bg-gray-100 rounded-md"/>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="occupation"
                                                   className="block text-sm font-bold">Occupation</label>
                                            <input type="text" name="occupation" value={profileData.occupation}
                                                   onChange={handleChange}
                                                   className="w-full h-9 bg-gray-100 rounded-md"/>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="bio" className="block text-sm font-bold">Bio</label>
                                            <textarea name="bio" value={profileData.bio} onChange={handleChange} className="w-full h-24 bg-gray-100 rounded-md" />
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="password"
                                                   className="block text-sm font-bold">Password</label>
                                            <input type="password" name="password" value={profileData.password}
                                                   onChange={handleChange}
                                                   className="w-full h-9 bg-gray-100 rounded-md"/>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="confirmPassword" className="block text-sm font-bold">Confirm Password</label>
                                            <input type="password" name="confirmPassword"
                                                   value={profileData.confirmPassword} onChange={handleChange}
                                                   className="w-full h-9 bg-gray-100 rounded-md"/>
                                            {passwordError && (
                                                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="mt-14 flex gap-2 justify-end">
                                <button onClick={onClose} className="h-9 text-sm text-gray-500"
                                        disabled={isUploading}>Cancel
                                </button>
                                <button onClick={handleSubmit}
                                        className="h-9 w-28 text-sm text-white bg-gray-800 rounded-md" disabled={isUploading}>Edit user</button>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default ProfileDialog;
