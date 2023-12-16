import * as React from "react";
import ProfileModal from '../components/ProfileModal';
import ProfileDropdown from "../components/ProfileModal";


export default function OuterNav(): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed bottom-0 left-0 p-4 \ shadow-md  ">
        {/* Fixed-floating section bottom left (Content to be filled later) */}
        {/* <div className="bg-[#1F1F1F] text-white w-[544px] rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <div className="flex items-center">
            <img
              src="/profile-thumbnail.png"
              alt="Chris Moulton profile thumbnail"
              className="w-[32px] h-[32px] rounded-full"
            />
            <span className="font-roboto ml-2">Chris Moulton</span>
          </div>
          <i className="fa fa-chevron-down"></i>
        </div>
        <div className="p-4 border-b border-gray-600">
          <div className="flex items-center">
            <img
              src="/profile-image.png"
              alt="Chris Moulton editing profile"
              className="w-[48px] h-[48px] rounded-full"
            />
            <div className="ml-4">
              <p className="font-roboto">Chris Moulton</p>
              <p className="font-roboto text-sm">chris@moultondigital.co</p>
            </div>
            <i className="fa fa-pencil ml-auto"></i>
          </div>
        </div>
        <div className="flex flex-col">
          <a href="#" className="flex items-center p-4 hover:bg-gray-700">
            <i className="fa fa-circle-o mr-4"></i>
            <span className="font-roboto">Theme</span>
            <i className="fa fa-chevron-right ml-auto"></i>
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-700">
            <i className="fa fa-cog mr-4"></i>
            <span className="font-roboto">Settings</span>
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-700">
            <i className="fa fa-download mr-4"></i>
            <span className="font-roboto">Get desktop app</span>
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-gray-700">
            <i className="fa fa-globe mr-4"></i>
            <span className="font-roboto">Community profile</span>
          </a>
        </div>
        <div className="flex items-center justify-between p-4 border-t border-gray-600">
          <div className="flex items-center">
            <img
              src="/profile-image-small.png"
              alt="Chris Moulton profile small"
              className="w-[32px] h-[32px] rounded-full"
            />
            <div className="ml-2">
              <p className="font-roboto">Chris Moulton</p>
              <p className="font-roboto text-sm">chris@moultondigital.co</p>
            </div>
          </div>
          <i className="fa fa-check text-green-500"></i>
        </div>
        <a href="#" className="flex items-center p-4 hover:bg-gray-700">
          <i className="fa fa-plus mr-4"></i>
          <span className="font-roboto">Add account</span>
        </a>
        <a href="#" className="flex items-center p-4 hover:bg-gray-700">
          <i className="fa fa-sign-out mr-4"></i>
          <span className="font-roboto">Log out</span>
        </a>
      </div> */}

      <ProfileDropdown  />






      </div>
      <button className="fixed bottom-0 right-0 mb-4 mr-4 p-4 rounded-full bg-[#007BFF] text-white shadow-lg focus:outline-none">
        <i className="fa fa-plus"></i>
      </button>
      <section
        className="fixed right-0 p-4 bg-[#FFFFFF] shadow-md w-[300px] h-[200px]"
        style={{ bottom: "20%" }}
      >
        {/* Fixed floating section about 20% up from bottom right of screen */}
      </section>
      <section
        className="fixed right-0 p-4 bg-[#FFFFFF] shadow-md w-[300px] h-[200px]"
        style={{ bottom: "10%" }}
      >
        {/* Another fixed floating at 10% up from bottom right of screen */}
      </section>

      <div className="flex items-center bg-[#F0F0F0] rounded-full p-2 w-full">
      <button className="text-[#121212] font-roboto rounded-full bg-white px-4 py-1 mr-2 hover:bg-gray-200 transition-colors duration-150">
        All
      </button>
      <button className="text-[#121212] font-roboto px-4 py-1 mr-2 hover:bg-gray-200 rounded transition-colors duration-150">
        Art Direction
      </button>
      <button className="text-[#121212] font-roboto px-4 py-1 mr-2 hover:bg-gray-200 rounded transition-colors duration-150">
        Production
      </button>
      <button className="text-[#121212] font-roboto px-4 py-1 mr-2 hover:bg-gray-200 rounded transition-colors duration-150">
        Brand Identity
      </button>
      <button className="text-[#121212] font-roboto px-4 py-1 mr-2 hover:bg-gray-200 rounded transition-colors duration-150">
        Web
      </button>
      <button className="text-[#121212] font-roboto px-4 py-1 mr-2 hover:bg-gray-200 rounded transition-colors duration-150">
        Social Media Management
      </button>
      <div className="relative w-full flex justify-end">
        <div className="relative flex items-center border border-[#DDDDDD] rounded-full bg-white">
          <span className="pl-3 pr-1 text-[#121212]">
            <i className="fas fa-search text-gray-500 hover:text-gray-600 transition-colors duration-150"></i>
          </span>
          <input
            className="text-[#121212] font-roboto p-1 pl-2 w-full rounded-l-full focus:outline-none"
            placeholder="Search anything..."
            name="search"
            type="search"
            autoComplete="on"
            aria-label="Search"
          />
          <button
            type="button"
            className="text-[#121212] font-roboto rounded-r-full p-2 hover:bg-gray-200 transition-colors duration-150"
            // onClick={(e) => {
            //   e.target.form.search.value = "";
            // }}
          >
            <i className="fa fa-times"></i>
          </button>
          <div className="absolute top-full left-0 mt-1 w-full rounded-md shadow-lg bg-white z-20 hidden"></div>
        </div>
      </div>
    </div>

      
      <main className="flex-grow p-4">
        <h2 className="font-epilogue text-[#121212] text-lg mb-2">
          Main Content Title
        </h2>
        <p className="font-barlow text-[#121212]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus
          vel dolor auctor facilisis.
        </p>
      </main>
    </div>
  );
}