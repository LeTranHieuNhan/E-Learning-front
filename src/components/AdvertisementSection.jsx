const AdvertisementSection = () => {
    return (
        <div className="mt-12  top-[543px] left-[130px] w-full h-[361px] bg-[#F6F3FCFF] rounded-sm shadow-sm flex mb-20">
            <div className=" my-auto mx-12 ">
                <h2 className="text-5xl leading-10 mb-6">Digital Illustrations</h2>
                <p className="text-base text-neutral-500 font-sans mb-6"> Qui aliquip quis magna non sint voluptate officia qui. Laborum sit mollit id sint et dolore conseq</p>
                <button className="bg-blue-indigo text-white py-2 px-3 rounded-xl opacity-100" >Explore more</button>
            </div>
            <img
                src="https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                alt=""
                className="object-cover  "
            />
        </div>
    )
}
export default AdvertisementSection