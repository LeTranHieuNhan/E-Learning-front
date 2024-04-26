import React from 'react';

export const CourseImagesSection = () => {
    return (
        <div className="grid grid-rows-4 grid-flow-col gap-4 h-96 w-full">
            {/* First image in the first div */}
            <div className="row-span-4 flex items-center justify-center text-white font-bold text-3xl">
                <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                    alt="Course Image 1"
                />
            </div>
            {/* Second image in the second div */}
            <div className="row-span-2 flex items-center justify-center text-white font-bold text-3xl bg-gray-500">
                <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
                    alt="Course Image 2"
                />
            </div>
            {/* Third image in the third div */}
            <div className="row-span-2 flex items-center justify-center text-white font-bold text-3xl bg-amber-500">
                <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                    alt="Course Image 3"
                />
            </div>
        </div>
    );
}
