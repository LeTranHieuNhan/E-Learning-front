import React, { useState } from "react";
import Footer from "./Footer";
import { AiOutlineCloudUpload, AiOutlineClose } from "react-icons/ai";
import { useDropzone } from "react-dropzone";

const mockAssignment = {
  id: 1,
  name: "Exploring the Ethical Implications of AI in Healthcare",
  description: `
    <strong>Objective:</strong> The objective of this assignment is to critically examine the ethical implications of artificial intelligence (AI) applications in the field of healthcare. Through this assignment, you will explore various ethical dilemmas, potential biases, privacy concerns, and societal impacts associated with the integration of AI technologies in healthcare.<br/><br/>

    <strong>Task:</strong><br/>
    <strong>Literature Review:</strong> Conduct a literature review to gather information on the current state of AI applications in healthcare, including diagnostic tools, treatment planning, patient monitoring, and administrative tasks. Identify at least three scholarly articles that discuss the ethical considerations related to these AI applications.<br/><br/>

    <strong>Case Study Analysis:</strong> Choose one real-world case study where AI technology was implemented in healthcare. Analyze the case study from an ethical perspective, considering issues such as data privacy, patient autonomy, fairness, accountability, and transparency. Provide a detailed explanation of the ethical challenges faced in the implementation of AI in the selected case study.<br/><br/>

    <strong>Ethical Framework Application:</strong> Select an ethical framework (e.g., utilitarianism, deontology, virtue ethics) and apply it to the ethical dilemmas identified in the case study. Discuss how the chosen ethical framework informs decision-making and guides ethical behavior in the context of AI-driven healthcare.<br/><br/>

    <strong>Discussion and Reflection:</strong> Reflect on your findings from the literature review and case study analysis. Discuss your own perspectives on the ethical implications of AI in healthcare. Consider questions such as:<br/>
    - What are the potential benefits and risks of using AI in healthcare?<br/>
    - How can we ensure that AI algorithms are fair and unbiased?<br/>
    - What measures should be implemented to protect patient privacy in AI-driven healthcare systems?<br/>
    - What role should healthcare professionals, policymakers, and technology developers play in addressing ethical concerns related to AI in healthcare?
  `,
  uploaded_at: new Date("2023-07-15T10:30:00"),
  updated_at: new Date("2023-07-16T11:00:00"),
  deadline: new Date("2023-07-30T23:59:59"),
};

const formatDate = (date) => {
  return date.toLocaleString();
};

const AssignDes = ({ assignment = mockAssignment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    // Simulate file upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 100);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const closeModal = () => {
    setIsModalOpen(false);
    setFiles([]);
    setUploadProgress(0);
  };

  return (
      <>
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white bg-[#6E75D1FF] rounded-full p-1"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
              <h1 className="text-lg font-bold text-[#6E75D1FF]">
                {assignment.name}
              </h1>
            </div>
            <div className="ml-8">
              <div className="flex items-center mb-2 text-[#9095A0FF] text-sm">
                <h3>Uploaded At: {formatDate(assignment.uploaded_at)}</h3>
                <h3 className="ml-2">Updated At: {formatDate(assignment.updated_at)}</h3>
              </div>
              <div className="text-[#565E6CFF] text-sm mb-4">
                <h1>Deadline: {formatDate(assignment.deadline)}</h1>
              </div>
              <div className="mb-6">
                <h1 className="text-[#171A1FFF] font-bold text-sm mb-1">Description</h1>
                <p className="text-[#565E6CFF] text-sm" dangerouslySetInnerHTML={{ __html: assignment.description }} />
              </div>
              <div className="flex items-center mt-8 mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-black"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 1 0-11.963 0m11.963 0A8.966 8.966 0 1 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <h1 className="text-[#565E6CFF] text-sm ml-2">Feedback</h1>
              </div>
              <div className="text-[#FE763EFF] text-sm mb-4">
                <h1>Add feedback</h1>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="shadow-lg border rounded-md p-4 mb-4 w-52 h-32">
              <div className="flex justify-center mb-4">
                <h1 className="text-[#171A1FFF] text-sm font-semibold">
                  Your Assignment
                </h1>
                <h1 className="ml-4 text-[#9095A0FF] text-xs">Assigned</h1>
              </div>
              <button
                  className="w-full bg-transparent hover:bg-blue-500 text-[#F84B01FF] hover:text-white py-2 px-4 border border-[#F84B01FF] hover:border-transparent rounded text-xs"
                  onClick={() => setIsModalOpen(true)}
              >
                Submit Your Assignment
              </button>
            </div>
            <div className="shadow-lg border rounded-md p-4 w-52 h-16">
              <div className="flex items-center mb-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-black"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <div className="ml-2 text-[#9095A0FF] text-xs">Private Feedback</div>
              </div>
              <div className="text-[#FE763EFF] text-xs">
                <h1>Add feedback for Lucifer</h1>
              </div>
            </div>
          </div>
        </div>
        <Footer />

        {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg p-8 w-11/12 max-w-lg relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                  <AiOutlineClose size={24} />
                </button>
                <h2 className="text-xl font-bold mb-4 text-center">Submit your assignment</h2>
                <div {...getRootProps({ className: "border-2 border-dashed border-[#6E75D1FF] p-6 text-center cursor-pointer rounded-lg mb-4" })}>
                  <input {...getInputProps()} />
                  <AiOutlineCloudUpload size={48} className="mx-auto mb-2" />
                  <p>Drag & drop your files here</p>
                  <button className="mt-2 px-4 py-2 bg-[#6E75D1FF] text-white rounded-md">Browse files</button>
                </div>
                {files.length > 0 && (
                    <div className="mt-4">
                      <p className="text-lg">Uploading files</p>
                      <div className="flex items-center mt-2">
                        <AiOutlineCloudUpload size={24} />
                        <span className="ml-2">{files[0].name}</span>
                        <div className="flex-grow h-2 bg-gray-200 rounded-full mx-2">
                          <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                        </div>
                        <span>{uploadProgress}%</span>
                      </div>
                    </div>
                )}
                <button className="w-full mt-6 bg-[#6E75D1FF] text-white py-2 rounded-md" onClick={closeModal}>
                  Submit
                </button>
              </div>
            </div>
        )}
      </>
  );
};

export default AssignDes;
