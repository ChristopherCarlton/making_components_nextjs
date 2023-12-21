import * as React from "react";

export default function discover(): React.ReactElement {
  return (
    <div className="bg-[#1E1E1E] h-screen flex">
      <div className="w-[300px] bg-[#2C2C2C] p-6">
        <div className="text-white font-roboto mb-8">
          <h1 className="text-2xl mb-4">StarterKit</h1>
          <div className="space-y-4">
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Help</p>
          </div>
        </div>
        <div className="text-[#C4C4C4] font-roboto">
          <h2 className="text-xl mb-4">Discover</h2>
          <div className="space-y-2">
            <p>Watch Now</p>
            <p>Browse</p>
            <p>Stream</p>
          </div>
          <h2 className="text-xl my-4">Library</h2>
          <div className="space-y-2">
            <p>Playlists</p>
            <p>Videos</p>
            <p>Made for You</p>
            <p>Creators</p>
          </div>
          <h2 className="text-xl my-4">Playlists</h2>
          <div className="space-y-2">
            <p>Recently Added</p>
            <p>Recently Played</p>
            <p>Top Videos</p>
            <p>Top Creators</p>
            <p>Daytime News</p>
            <p>Archive</p>
          </div>
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-white font-roboto">
            <h2 className="text-3xl">Discover</h2>
            <div className="flex space-x-4 mt-2">
              <button className="bg-[#373737] text-white px-4 py-1 rounded">
                All
              </button>
              <button className="text-[#C4C4C4] px-4 py-1">New to You</button>
              <button className="text-[#C4C4C4] px-4 py-1">Live</button>
            </div>
          </div>
          <button className="bg-[#007AFF] text-white px-6 py-2 rounded font-roboto">
            + Add video
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg p-4">
            <img
              src="/images/etienne.png"
              alt="Thumbnail of Etienne Boulanger video"
              className="w-full h-[200px] object-cover rounded-lg mb-2"
            />
            <h3 className="text-[#1E1E1E] font-roboto text-lg">
              Etienne Boulanger
            </h3>
            <p className="text-[#6E6E6E] font-roboto">20,418,087</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <img
              src="/images/friends.png"
              alt="Thumbnail of friends video"
              className="w-full h-[200px] object-cover rounded-lg mb-2"
            />
            <h3 className="text-[#1E1E1E] font-roboto text-lg">friends</h3>
            <p className="text-[#6E6E6E] font-roboto">2,360,447</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <img
              src="/images/working.png"
              alt="Thumbnail of Working Hard pt. 2 video"
              className="w-full h-[200px] object-cover rounded-lg mb-2"
            />
            <h3 className="text-[#1E1E1E] font-roboto text-lg">
              Working Hard (pt. 2)
            </h3>
            <p className="text-[#6E6E6E] font-roboto">18,986,178</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <img
              src="/images/hudson.png"
              alt="Thumbnail of Hudson River Greenway video"
              className="w-full h-[200px] object-cover rounded-lg mb-2"
            />
            <h3 className="text-[#1E1E1E] font-roboto text-lg">
              Hudson River Greenway
            </h3>
            <p className="text-[#6E6E6E] font-roboto">3,501,578</p>
          </div>
        </div>
        <div className="text-white font-roboto mb-6">
          <h2 className="text-3xl mb-4">Made for You</h2>
          <p className="text-[#C4C4C4] mb-4">
            Your personal playlists. Updated daily.
          </p>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img
                src="/images/ark.png"
                alt="Thumbnail of @arksteriff playlist"
                className="w-full h-[120px] object-cover rounded-lg mb-2"
              />
              <p>@arksteriff</p>
            </div>
            <div>
              <img
                src="/images/frank.png"
                alt="Thumbnail of Frankie Cordoba playlist"
                className="w-full h-[120px] object-cover rounded-lg mb-2"
              />
              <p>Frankie Cordoba</p>
            </div>
            <div>
              <img
                src="/images/mattia.png"
                alt="Thumbnail of Mattia Ascenzo playlist"
                className="w-full h-[120px] object-cover rounded-lg mb-2"
              />
              <p>Mattia Ascenzo</p>
            </div>
            <div>
              <img
                src="/images/laura.png"
                alt="Thumbnail of Laura Vinck playlist"
                className="w-full h-[120px] object-cover rounded-lg mb-2"
              />
              <p>Laura Vinck</p>
            </div>
            <div>
              <img
                src="/images/dominik.png"
                alt="Thumbnail of Dominik Vanyi playlist"
                className="w-full h-[120px] object-cover rounded-lg mb-2"
              />
              <p>Dominik Vanyi</p>
            </div>
            <div>
              <img
                src="/images/flowers.png"
                alt="Thumbnail of FLOWERS playlist"
                className="w-full h-[120px] object-cover rounded-lg mb-2"
              />
              <p>FLOWERS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}