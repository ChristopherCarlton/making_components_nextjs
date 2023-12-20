import * as React from "react";
import { FaHeart, FaRegClock } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import ComHeader from "./comheader";


export default function community(): React.ReactElement {
  return (

    <div className="bg-[#010101] p-8">
      <ComHeader/>
      <h1 className="text-white font-roboto text-4xl mb-6">
        Community Showcase
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="relative">
          <img
            src="/images/flower.png"
            alt="Silhouetted figures with floral overlay"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
            <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
            <span className="text-black">Like</span>
          </button>
        </div>
        <div className="relative">
          <img
            src="/images/fox.png"
            alt="Abstract white wolf"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
            <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
            <span className="text-black">Like</span>
          </button>
        </div>
        <div className="relative">
          <img
            src="/images/bug.png"
            alt="Icy blue tiger"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
            <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
            <span className="text-black">Like</span>
          </button>
        </div>
        <div className="relative">
         <img
            src="/images/deer.png"
            alt="Crystal flower"
            className="w-full h-[300px] object-cover rounded-lg"
            />
         <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
            <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
            <span className="text-black">Like</span>
          </button>
        </div>
        <div className="relative">
            <img
                src="/images/bus.png"
                alt="Colorful fox illustration"
                className="w-full h-[300px] object-cover rounded-lg"
            />
             <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
            <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
            <span className="text-black">Like</span>
          </button>
        </div>
        <div className="relative">
            <img
            src="/images/rain.png"
            alt="Close-up of an insect"
            className="w-full h-[300px] object-cover rounded-lg"
            />
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
            <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
            <span className="text-black">Like</span>
          </button>
        </div>
        <div className="relative">
            <img
            src="/images/wolf.png"
            alt="Close-up of an insect"
            className="w-full h-[300px] object-cover rounded-lg"
            />
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
            <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
            <span className="text-black">Like</span>
          </button>
        </div>
        <div className="relative">
            <img
            src="/images/tiger.png"
            alt="Close-up of an insect"
            className="w-full h-[300px] object-cover rounded-lg"
            />
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
            <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
            <span className="text-black">Like</span>
          </button>
        </div>
        <div className="relative">
            <img
            src="/images/dance.png"
            alt="Close-up of an insect"
            className="w-full h-[300px] object-cover rounded-lg"
            />
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
            <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
            <span className="text-black">Like</span>
          </button>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button className="text-white font-roboto bg-[#121212] py-2 px-4 rounded-lg mr-2 flex items-center">
          <i className="fa fa-clock-o mr-2"><FaRegClock/></i> Recent
        </button>
        <button className="text-white font-roboto bg-[#121212] py-2 px-4 rounded-lg flex items-center">
          <i className="fa fa-star mr-2"><CiStar/></i> Top
        </button>
      </div>
    </div>
  );
}