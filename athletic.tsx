import * as React from "react";

export default function Athletics(): React.ReactElement {
  return (
    <div className="bg-[#000000] text-white font-roboto min-h-screen p-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl">The Athletic</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>WELCOME</li>
            <li>TEAMS</li>
            <li>LEAGUES</li>
          </ul>
        </nav>
      </header>
      <main className="flex">
        <section className="w-1/2">
          <h2 className="text-2xl mb-4">Choose Profiles to validate</h2>
          <p className="mb-6">Get stories for your favorite teams</p>
          <div className="relative mb-6">
            <input
              type="text"
              name="search"
              placeholder="Search team, school, or city name"
              className="w-full bg-[#121212] p-4 rounded"
            />
            <i className="fa fa-search absolute right-4 top-4 text-gray-400"></i>
          </div>
          <ul>
            <li className="flex items-center mb-4">
              <img
                src="path-to-giants-logo.png"
                alt="San Francisco Giants logo"
                className="w-12 h-12 mr-4"
              />
              <span className="flex-1">SAN FRANCISCO Giants</span>
              <button className="text-xl">+</button>
            </li>
            <li className="flex items-center mb-4">
              <img
                src="path-to-warriors-logo.png"
                alt="Golden State Warriors logo"
                className="w-12 h-12 mr-4"
              />
              <span className="flex-1">GOLDEN STATE Warriors</span>
              <button className="text-xl">+</button>
            </li>
            <li className="flex items-center mb-4">
              <img
                src="path-to-athletics-logo.png"
                alt="Oakland Athletics logo"
                className="w-12 h-12 mr-4"
              />
              <span className="flex-1">OAKLAND Athletics</span>
              <button className="text-xl">+</button>
            </li>
            <li className="flex items-center mb-4">
              <img
                src="path-to-49ers-logo.png"
                alt="San Francisco 49ers logo"
                className="w-12 h-12 mr-4"
              />
              <span className="flex-1">SAN FRANCISCO 49ers</span>
              <button className="text-xl">+</button>
            </li>
          </ul>
        </section>
        <section className="w-1/2 pl-12">
          <h2 className="text-2xl mb-4">Following</h2>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 flex justify-center items-center mr-4">
              <span className="text-xl">+</span>
            </div>
            <span className="flex-1">Choose at least one profile</span>
          </div>
          <ul>
            <li className="flex items-center mb-4 hover:bg-gray-700">
              <img
                src="path-to-sharks-logo.png"
                alt="San Jose Sharks logo"
                className="w-12 h-12 mr-4"
              />
              <span className="flex-1">Linkedin</span>
              <button className="text-xl">+</button>
            </li>
            <li className="flex items-center mb-4 hover:bg-gray-700">
              <img
                src="path-to-kings-logo.png"
                alt="Sacramento Kings logo"
                className="w-12 h-12 mr-4"
              />
              <span className="flex-1">Github</span>
              <button className="text-xl">+</button>
            </li>
            <li className="flex items-center mb-4 hover:bg-gray-700">
              <img
                src="path-to-earthquakes-logo.png"
                alt="San Jose Earthquakes logo"
                className="w-12 h-12 mr-4"
              />
              <span className="flex-1">Work E-mail</span>
              <button className="text-xl">+</button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}