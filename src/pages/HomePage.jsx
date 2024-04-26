import React from "react";
import AdvertisementSection from "../components/AdvertisementSection";
import {CourseCustomSection} from "../components/CourseCustomSection.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
    return (
        <>
        <div className="container mx-auto px-12     ">
            <CourseCustomSection sectionName="Recommended for you"/>
            <AdvertisementSection/>
            <CourseCustomSection sectionName="Popular course"/>
            <div className="mt-12">

                <CourseCustomSection sectionName="Trending course"/>
            </div>
        </div>
            <Footer/>
        </>

    );
};

export default HomePage;
