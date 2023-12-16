import * as React from "react";

export default function Articles(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="text-6xl font-bold font-roboto">All articles</div>
      <div className="flex mt-10">
        <div className="flex flex-col mr-10">
          <img
            src="/path/to/left-image.jpg"
            alt="Sculpture on a rock"
            className="w-[300px] h-[400px] object-cover"
          />
          <div className="mt-4 font-roboto">
            <div className="text-xl font-bold">
              Design in Dialogue: the Creative Harmony
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#FF0000] p-6">
            <img
              src="/path/to/right-image.jpg"
              alt="Award poster"
              className="w-[200px] h-[300px] object-cover opacity-50"
            />
          </div>
          <div className="mt-4 font-roboto">
            <div className="text-xl font-bold">
              FWAWWWARD: so good, so lucky.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}