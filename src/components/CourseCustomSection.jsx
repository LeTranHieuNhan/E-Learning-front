import CourseList from "./CourseList.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

export const CourseCustomSection = ({sectionName}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        // Function to fetch courses from the API
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses(); // Call fetchCourses function when component mounts
    }, []);
    return (
        <div>
            <div className="flex justify-between mb-4">
                <h2 className="font-sora text-2xl font-bold">{sectionName}</h2>
                <div className="flex gap-4 py-2 px-2">
                    <p className="font-sans justify-center cursor-pointer text-blue-indigo text-sm font-normal">View
                        All</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor"
                         className="h-4 w-4 mt-0.5 text-blue-indigo"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                    </svg>

                </div>
            </div>
            <CourseList  courses={courses}/>

        </div>
    )
}