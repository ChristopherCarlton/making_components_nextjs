'use client'
import { FaGear, FaDownload, FaPlus, FaCheck } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { GoCircle } from "react-icons/go";
import { IoExitOutline,  } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { HiGlobeAmericas } from "react-icons/hi2";
// components/ProfileDropdown.tsx
import { useState } from 'react';

const ProfileDropdown: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 p-4">
      <div className={`bg-[#1F1F1F] text-white w-[544px] rounded-lg overflow-hidden ${menuOpen ? 'flex flex-col-reverse' : ''}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <div className="flex items-center">
            <img
            //   src="/profile-thumbnail.png"
              src="/images/sideProfile.png"
              alt="Chris Moulton profile thumbnail"
              className="w-[32px] h-[32px] rounded-full"
            />
            <span className="font-roboto ml-2">Chris Moulton</span>
          </div>
          <i
            className={`fa ${menuOpen ? 'fa-chevron-down' : 'fa-chevron-up'} cursor-pointer`}
            onClick={() => setMenuOpen(!menuOpen)}
          ><IoIosArrowUp/></i>
        </div>

        {/* Profile dropdown menu */}
        {menuOpen && (
          <>
            <div className="p-4 border-b border-gray-600">
              <div className="flex items-center">
                <img
                  src="/images/sideProfile.png"
                  alt="Chris Moulton editing profile"
                  className="w-[48px] h-[48px] rounded-full"
                />
                <div className="ml-4">
                  <p className="font-roboto">Chris Moulton</p>
                  <p className="font-roboto text-sm">chris@moultondigital.co</p>
                </div>
                {/* <FaPencilAlt/> */}

                <i className="fa fa-pencil ml-auto"> <FaPencilAlt/></i>
              </div>
            </div>

            {/* Additional menu items */}
            <div className="flex flex-col">
              <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                <i className="fa fa-circle-o mr-4"></i>
                <GoCircle className ="mr-2"/>
                <span className="font-roboto">Theme</span>
                <i className="fa fa-chevron-right ml-auto"></i>
              </a>
              <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                <i className="fa fa-cog mr-4"></i>
                <FaGear className="mr-2"/>
                <span className="font-roboto">Settings </span>
              </a>
              <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                <i className="fa fa-download mr-4"></i>
                <FaDownload className="mr-2"/>
                <span className="font-roboto">Get desktop app</span>
              </a>
              <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                <i className="fa fa-globe mr-4"></i>
                <HiGlobeAmericas className="mr-2 scale-150" />
                <span className="font-roboto">Community profile</span>
              </a>
            </div>
            
            <div className="flex items-center justify-between p-4 border-t border-gray-600">
              <div className="flex items-center">
                <img
                  src="/images/sideProfile.png"
                  alt="Chris Moulton profile small"
                  className="w-[32px] h-[32px] rounded-full"
                />
                <div className="ml-2">
                  <p className="font-roboto">Chris Moulton</p>
                  <p className="font-roboto text-sm">chris@moultondigital.co</p>
                </div>
              </div>
              <i className="fa fa-check text-green-500"><FaCheck className="text-green-500 "/></i>
            </div>
            
            <a href="#" className="flex items-center p-4 hover:bg-gray-700">
              <i className="fa fa-plus mr-4"></i>
              <FaPlus className= "mr-2"/>
              <span className="font-roboto">Add account</span>
            </a>
            <a href="#" className="flex items-center p-4 hover:bg-gray-700">
              <i className="fa fa-sign-out mr-4"></i>
              <IoExitOutline className="mr-2"/>
              <span className="font-roboto">Log out</span>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
