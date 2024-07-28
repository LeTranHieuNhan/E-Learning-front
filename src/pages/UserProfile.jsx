import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByTokenAction } from "../redux/authActions";
import { fetchUserEnrolledCourses } from "../redux/courseActions";
import Footer from "../components/Footer";
import ProfileMenu from "../components/ProfileMenu";
import CoursesList from "../components/CoursesList";
import ProfileHeader from "../components/ProfileHeader";
import FollowingList from "../components/FollowingList";
import ProfileDialog from "../components/ProfileDialog";
import {updateUser} from "../redux/userAction.js";

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, token } = useSelector((state) => state.auth);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated && token) {
            dispatch(getUserByTokenAction(token));
        }
    }, [dispatch, isAuthenticated, token]);

    useEffect(() => {
        if (user && user.id) {
            dispatch(fetchUserEnrolledCourses(user.id));
        }
    }, [dispatch, user]);

    const handleSave = (updatedProfileData) => {
        dispatch(updateUser(user.id, updatedProfileData, 3)); // Assuming '3' is the roleId
        console.log("Profile data to be saved:", updatedProfileData);
        setIsOpen(false);
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-4 divide-x">
                <div className="col-span-2">
                    <ProfileMenu />
                    <CoursesList />
                </div>
                <div className="col-span-1">
                    <ProfileHeader onEditClick={() => setIsOpen(true)} />
                    <FollowingList />
                </div>
            </div>
            <ProfileDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                student={user}
                onSave={handleSave}
            />
            <Footer />
        </>
    );
};

export default UserProfile;
