import React, { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image from '../assets/build.avif';

const GalleryWidget = () => {
  const [images, setImages] = useState([image]);
  const scrollRef = useRef(null);

  const addImage = () => {
    const newImage = image;
    setImages([...images, newImage]);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-[652px] p-4 bg-[#2d2d2d] shadow-black rounded-lg h-auto shadow-xl">
      <div className="flex justify-between items-center pt-5 pl-5 pr-5">
        <h2 className="text-lg font-semibold bg-[#0d0d0d] rounded-xl text-white px-8 py-3">
          Gallery
        </h2>
        <div className="flex items-center space-x-5">
          <button
            className="bg-[#3a3a3a] text-white px-6 py-3 rounded-full shadow-lg shadow-black"
            onClick={addImage}
          >
            +Add Image
          </button>
          <button
            className="bg-[#212121] text-[#d0cece] px-3 py-3 rounded-full shadow-lg shadow-black"
            onClick={scrollLeft}
          >
            <FaArrowLeft className="text-xl" />
          </button>
          <button
            className="bg-[#212121] text-[#d0cece] px-3 py-3 rounded-full 
            shadow-lg shadow-black"
            onClick={scrollRight}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll mt-4 space-x-4 pt-10 pl-5 pr-5 "
        style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="w-auto h-48 mb-5 object-cover rounded-xl transform transition-all
             duration-700 ease-in-out grayscale hover:grayscale-0 hover:scale-110 
             hover:-rotate-3"
          />
        ))}
      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
        div {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default GalleryWidget;
