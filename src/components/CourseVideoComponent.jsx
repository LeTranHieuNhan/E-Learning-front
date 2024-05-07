import React from 'react'

const CourseVideoComponent = () => {
    return (
        <div>
            <h2 className="font-sora text-[32px] font-bold text-neutral-900">UI Design, A User - Centered Approach</h2>
            <div className="text-sm font-sans  flex gap-2 ">

                <span className="text-blue-indigo cursor-pointer">Lucifer Star</span>

                <span className="flex gap-1 text-neutral-500">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                               className="w-5 h-5 border-l border-neutral-500 text-yellow-400">
                          <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clip-rule="evenodd"/>
                        </svg>
                    <span className="font-bold text-[#222730FF]">4.9</span>
                    (1395 reviews)

</span>
            </div>

            <div className="grid grid-cols-10 gap-4 mt-4 ">
                <div className="col-span-7  ">
                    <video className="h-full w-full rounded-lg" controls>
                        <source
                            src="https://www.youtube.com/embed/bAQhYe8rX0c"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="col-span-3 p-4  ">
                    <div className="flex justify-between">

                    </div>
                </div>
            </div>


        </div>
    )
}
export default CourseVideoComponent
