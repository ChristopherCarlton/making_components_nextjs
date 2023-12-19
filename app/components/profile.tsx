import * as React from "react";

export default function profile(): React.ReactElement {
  return (
    <div className="bg-[#5E5CE6] p-6 rounded-lg max-w-sm mx-auto text-white">
      <div className="flex justify-center">
        <div className="w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white">
          <img
            src="/images/sideProfile.png"
            alt="Profile picture of Ionel Olariu"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="font-bold text-lg">Ionel Olariu</h3>
        <p className="text-sm">New York</p>
        <p className="font-light">
          User Interface design and front end developer.
        </p>
        <p className="mt-2 font-light">
          Passionate about creating interactive designs and seamless user
          experiences. Constantly learning new technologies to enhance my skills
          and bring innovative solutions to the table.
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <button className="border border-white text-white font-semibold py-2 px-4 rounded">
          Message
        </button>
        <button className="bg-white text-[#5E5CE6] font-semibold py-2 px-4 rounded">
          Following
        </button>
      </div>
      <div className="mt-6">
        <h4 className="font-semibold mb-2">Skills</h4>
        <div className="grid grid-cols-3 gap-2">
          <span className="bg-[#7F7FD5] py-1 px-2 rounded text-center text-xs">
            UI/UX
          </span>
          <span className="bg-[#7F7FD5] py-1 px-2 rounded text-center text-xs">
            HTML/CSS
          </span>
          <span className="bg-[#7F7FD5] py-1 px-2 rounded text-center text-xs">
            JavaScript
          </span>
          <span className="bg-[#7F7FD5] py-1 px-2 rounded text-center text-xs">
            React
          </span>
          <span className="bg-[#7F7FD5] py-1 px-2 rounded text-center text-xs">
            TailwindCSS
          </span>
        </div>
      </div>
    </div>
  );
}