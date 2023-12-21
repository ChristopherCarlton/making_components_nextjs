import * as React from "react";

export default function Mentor(): React.ReactElement {
  return (
    <div className="bg-[#010101] p-10 text-white">
      <h2 className="font-roboto text-4xl mb-6">
        We think you'd like one of these mentors
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <img
            src="/mentor1.jpg"
            alt="Mentor with a bright smile"
            className="rounded-lg w-[300px] h-[300px] hover:opacity-75 transition duration-300 ease-in-out"
          />
          <p className="font-roboto text-center mt-2">
            Mentor with a bright smile
          </p>
        </div>
        <img
          src="/mentor2.jpg"
          alt="Mentor wearing glasses"
          className="rounded-lg w-[300px] h-[300px]"
        />
        <img
          src="/mentor3.jpg"
          alt="Mentor with a professional look"
          className="rounded-lg w-[300px] h-[300px]"
        />
        <img
          src="/mentor4.jpg"
          alt="Mentor with arms crossed"
          className="rounded-lg w-[300px] h-[300px]"
        />
        <img
          src="/mentor5.jpg"
          alt="Mentor with a creative look"
          className="rounded-lg w-[300px] h-[300px]"
        />
        <img
          src="/mentor6.jpg"
          alt="Mentor with a cheerful smile"
          className="rounded-lg w-[300px] h-[300px]"
        />
        <img
          src="/mentor7.jpg"
          alt="Mentor with a confident stance"
          className="rounded-lg w-[300px] h-[300px]"
        />
        <img
          src="/mentor8.jpg"
          alt="Mentor with a casual style"
          className="rounded-lg w-[300px] h-[300px]"
        />
      </div>
    </div>
  );
}