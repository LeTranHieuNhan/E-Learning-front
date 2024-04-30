import React from 'react'

const ReviewSection = () => {
    return (
        <div className="mt-12 mb-12">
            <h2 className="text-xl text-neutral-900 font-sora font-bold">Review</h2>

            <span className="flex gap-1 text-sm font-sans text-[#8E949FFF] mt-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="w-5 h-5 text-yellow-500">
                  <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clip-rule="evenodd"/>
                </svg>
                <span className="font-bold text-[#222730FF]">4.5</span>

                (99 reviews)
            </span>
            <div className="mt-5 grid grid-cols-2">


                {[1, 1, 1, 1].map(i => (
                    <div className="flex flex-col gap-4 mb-[46px]">
                        <div className="flex items-center">
                            <img
                                className="w-9 h-9 rounded-full mr-2"
                                src="https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                                alt=""
                            />
                            <div className="flex flex-col font-sans">
                                <span className="text-sm text-neutral-900 font-bold">John Doe</span>
                                <span className="text-sm text-neutral-700 text-[12px]">
                  Rated 5
                  <span className="ml-2 text-[12px] text-neutral-500">12:00 am</span>
              </span>
                            </div>
                        </div>
                        <p className="font-sans text-sm text-neutral-900 ">
                            Veniam mollit et veniam ea officia nisi minim fugiat minim consequat dolor pariatur
                        </p>
                    </div>
                ))}


            </div>

            <button className="border font-sans text-sm bg-transparent  border-blue-indigo text-blue-indigo p-2 rounded" >Show all reviews</button>

        </div>
    )
}
export default ReviewSection;
