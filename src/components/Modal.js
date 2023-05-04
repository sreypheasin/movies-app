import React, { useState } from "react";
import Modal from "react-modal";

const MyComponent = ({trialerKey}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleOpenVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-end">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleOpenVideoModal}
        >
          View Video
        </button>
      </div>

      <Modal
        isOpen={isVideoModalOpen}
        onRequestClose={handleCloseVideoModal}
        contentLabel="Video Modal"
      >
        <div className="flex items-center justify-end">
          <button
            className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            onClick={handleCloseVideoModal}
          >
            Close
          </button>
        </div>

        <div className="mt-8 flex justify-center ">
          <iframe 
          width="1200" 
          height="550" 
          src={`https://www.youtube.com/embed/${trialerKey}`}
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
          </iframe>
        </div>
      </Modal>
    </>
  );
};

export default MyComponent;
