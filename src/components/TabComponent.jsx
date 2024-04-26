
// eslint-disable-next-line react/prop-types
const TabComponent = ({activeTab, setActiveTab}) => {

    // Handle click event for tab
    const handleClick = (tabName) => {
        setActiveTab(tabName); // Update the active tab state
    };

    return (
        <div>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 mt-5">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                        <a
                            href="#"
                            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${
                                activeTab === 'Class description'
                                    ? 'text-blue-indigo font-bold border-blue-indigo'
                                    : 'border-transparent'
                            }`}
                            onClick={() => handleClick('Class description')}
                        >
                            Class description
                        </a>
                    </li>
                    <li className="me-2">
                        <a
                            href="#"
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                activeTab === 'Reviews'
                                    ? 'text-blue-indigo font-bold border-blue-indigo'
                                    : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                            }`}
                            onClick={() => handleClick('Reviews')}
                            aria-current={activeTab === 'Reviews' ? 'page' : undefined}
                        >
                            Reviews
                        </a>
                    </li>
                    <li className="me-2">
                        <a
                            href="#"
                            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${
                                activeTab === 'Related Course'
                                    ? 'text-blue-indigo font-bold border-blue-indigo'
                                    : 'border-transparent'
                            }`}
                            onClick={() => handleClick('Related Course')}
                        >
                            Related Course
                        </a>
                    </li>
                </ul>
            </div>

            {/* Display content based on the active tab */}

        </div>
    );
};

export default TabComponent;
