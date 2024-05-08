"use client"
import { getFullRoute } from '@/utils/getFullRoute';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const Share = () => {
  const detailsRoute = getFullRoute()
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const url = detailsRoute ;

  return (
    <>
      <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>
      {modalOpen && (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
       <div className="bg-white p-6 rounded-lg max-w-sm w-full">
         <div className="flex justify-between items-center mb-4">
           <h3 className="text-lg font-semibold">Share on Social Media</h3>
           <button onClick={closeModal} className="text-gray-600 hover:text-gray-800 focus:outline-none">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
         </div>
         <div className="flex justify-center gap-4">
           <FacebookShareButton url={url}>
             <FacebookIcon size={32} round />
           </FacebookShareButton>
           <TwitterShareButton url={url}>
             <TwitterIcon size={32} round />
           </TwitterShareButton>
           <WhatsappShareButton url={url}>
             <WhatsappIcon size={32} round />
           </WhatsappShareButton>
         </div>
       </div>
     </div>
      )}
    </>
  );
};

export default Share;
