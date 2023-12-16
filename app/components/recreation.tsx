import * as React from "react";

export default function Recreate(): React.ReactElement {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-auto p-8">
        <div className="text-[#121212] font-roboto">
          <h1 className="text-4xl font-bold mb-2">
            Nice, love that topic! Will it be a free or paid session?
          </h1>
          <p className="text-lg mb-8">You can always change this later.</p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">
                Yes, I'd like to charge a fee for my sessions
              </h2>
              <p className="text-sm mb-4">
                We recommend choosing this if you've already had experience in
                mentoring, and are ready to build up your service. You'll also
                need to hold tax residency of one of these{" "}
                <span className="text-blue-600 underline">
                  listed countries
                </span>
                .
              </p>
              <button className="text-white bg-[#121212] px-6 py-2 rounded-md font-semibold">
                Select
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">
                No, I'd like to mentor for free
              </h2>
              <p className="text-sm mb-4">
                We recommend starting with free topics if you're new to
                mentoring people, as it means you can experiment with your
                mentorship style and find your market without any pressure. You
                don't need to hold a tax residency in a specific country to do
                this.
              </p>
              <button className="text-white bg-[#121212] px-6 py-2 rounded-md font-semibold">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7] p-4 flex justify-between items-center">
        <button className="text-[#121212] font-roboto text-lg">
          <i className="fa fa-arrow-left mr-2"></i>
          Back
        </button>
        <div className="space-x-4">
          <button className="text-[#121212] font-roboto text-lg">
            Join as a Mentee
          </button>
          <button className="text-[#121212] font-roboto text-lg">
            Log out
          </button>
        </div>
        <button className="text-white bg-[#FF0080] px-6 py-2 rounded-full font-roboto font-semibold">
          Next
          <i className="fa fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
}