import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export const Searching = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query.length === 0) {
            setResults([]);
            return;
        }

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://localhost:8080/api/v1/courses/search?keyword=${query}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setResults(data);
                console.log(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        const delayDebounceFn = setTimeout(() => {
            fetchData();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    return (
        <div className="flex flex-col items-center w-full relative">
            <div className="flex items-center relative w-full">
                <svg
                    className="absolute left-3 w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21L15.803 15.803M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                    />
                </svg>

                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {isLoading && <p className="mt-2 text-gray-500">Loading...</p>}
            {error && <p className="mt-2 text-red-500">{error}</p>}
            {results.length > 0 && (
                <ul className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded shadow-lg z-10">
                    {results.map((result, index) => (
                        <Link  key={index}  to={`/course/${result.id}`}>
                            <li
                                className="flex items-center px-4 py-2 border-b border-gray-200 text-black hover:bg-gray-100 cursor-pointer">
                                <img
                                    src={result?.image?.[0] || "https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"}
                                    alt={result.title}
                                    className="w-10 h-10 mr-4 rounded"
                                />
                                <span>{result.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};
