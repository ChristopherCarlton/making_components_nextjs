import * as React from "react";

export default function Db(): React.ReactElement {
  return (
    <div className="bg-[#F4F7F9] w-full h-screen flex">
      <aside className="w-[300px] bg-white p-6 flex flex-col justify-between">
        <div>
          <div className="mb-10">
            <img
              src="./logo.png"
              alt="Company logo"
              className="w-[150px] h-[50px] mb-6"
            />
          </div>
          <nav className="mb-6">
            <a
              href="#"
              className="flex items-center font-roboto text-[#121212] mb-4"
            >
              <i className="fa fa-home text-lg mr-3"></i>
              Home
            </a>
            <a
              href="#"
              className="flex items-center font-roboto text-[#121212] mb-4"
            >
              <i className="fa fa-folder-open text-lg mr-3"></i>
              Projects
            </a>
            <a
              href="#"
              className="flex items-center font-roboto text-[#121212] mb-4"
            >
              <i className="fa fa-check-square text-lg mr-3"></i>
              Tasks
            </a>
            <a
              href="#"
              className="flex items-center font-roboto text-[#121212] mb-4"
            >
              <i className="fa fa-users text-lg mr-3"></i>
              Team
            </a>
            <a
              href="#"
              className="flex items-center font-roboto text-[#121212] mb-4"
            >
              <i className="fa fa-cog text-lg mr-3"></i>
              Settings
            </a>
          </nav>
          <div className="mb-6">
            <button className="bg-[#1E40AF] text-white font-roboto py-3 px-6 rounded-lg">
              Upgrade to Pro
            </button>
          </div>
        </div>
        <div>
          <nav className="mb-6">
            <a
              href="#"
              className="flex items-center font-roboto text-[#121212] mb-4"
            >
              <i className="fa fa-question-circle text-lg mr-3"></i>
              Help & information
            </a>
            <a
              href="#"
              className="flex items-center font-roboto text-[#121212]"
            >
              <i className="fa fa-sign-out-alt text-lg mr-3"></i>
              Log out
            </a>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="font-roboto text-3xl text-[#121212]">
              Hello, Margaret
            </h1>
            <p className="font-roboto text-sm text-[#6B7280]">
              Track team progress here. You almost reach a goal!
            </p>
          </div>
          <div className="flex items-center">
            <span className="font-roboto text-sm text-[#6B7280] mr-4">
              16 May, 2023
            </span>
            <button className="text-[#6B7280]">
              <i className="fa fa-calendar"></i>
            </button>
          </div>
        </header>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div className="flex items-center">
              <i className="fa fa-check-circle text-[#10B981] text-2xl mr-3"></i>
              <div>
                <h2 className="font-roboto text-lg text-[#121212]">Finished</h2>
                <p className="font-roboto text-sm text-[#6B7280]">
                  18 +8 tasks
                </p>
              </div>
            </div>
            <i className="fa fa-angle-right text-lg"></i>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div className="flex items-center">
              <i className="fa fa-clock text-[#F59E0B] text-2xl mr-3"></i>
              <div>
                <h2 className="font-roboto text-lg text-[#121212]">Tracked</h2>
                <p className="font-roboto text-sm text-[#6B7280]">
                  31h -6 hours
                </p>
              </div>
            </div>
            <i className="fa fa-angle-right text-lg"></i>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div className="flex items-center">
              <i className="fa fa-chart-line text-[#EF4444] text-2xl mr-3"></i>
              <div>
                <h2 className="font-roboto text-lg text-[#121212]">
                  Efficiency
                </h2>
                <p className="font-roboto text-sm text-[#6B7280]">93% +12%</p>
              </div>
            </div>
            <i className="fa fa-angle-right text-lg"></i>
          </div>
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <img
              src="./chart.png"
              alt="Performance chart"
              className="w-full h-[200px]"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-roboto text-lg text-[#121212]">
                Current Tasks
              </h3>
              <select className="font-roboto text-sm text-[#121212] bg-transparent">
                <option>Week</option>
                <option>Month</option>
                <option>Year</option>
              </select>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-[#3B82F6] mr-3">●</span>
                  <span className="font-roboto text-sm text-[#121212]">
                    Product Review for UI8 Market
                  </span>
                </div>
                <span className="font-roboto text-sm text-[#6B7280]">4h</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-[#F59E0B] mr-3">●</span>
                  <span className="font-roboto text-sm text-[#121212]">
                    UX Research for Product
                  </span>
                </div>
                <span className="font-roboto text-sm text-[#6B7280]">8h</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-[#10B981] mr-3">●</span>
                  <span className="font-roboto text-sm text-[#121212]">
                    App design and development
                  </span>
                </div>
                <span className="font-roboto text-sm text-[#6B7280]">32h</span>
              </li>
            </ul>
          </div>
          <div className="col-span-1 bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <img
                src="./profile.jpg"
                alt="Profile of Megan Norton"
                className="w-[50px] h-[50px] rounded-full mr-3"
              />
              <div>
                <h3 className="font-roboto text-lg text-[#121212]">
                  Megan Norton
                </h3>
                <p className="font-roboto text-sm text-[#6B7280]">
                  @meganorton
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="./activity1.jpg"
                    alt="Profile of Floyd Miles"
                    className="w-[40px] h-[40px] rounded-full mr-3"
                  />
                  <div>
                    <p className="font-roboto text-sm text-[#121212]">
                      Floyd Miles
                    </p>
                    <p className="font-roboto text-xs text-[#6B7280]">
                      Commented on Stark Project
                    </p>
                  </div>
                </div>
                <span className="font-roboto text-xs text-[#6B7280]">
                  10:15 AM
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="./activity2.jpg"
                    alt="Profile of Guy Hawkins"
                    className="w-[40px] h-[40px] rounded-full mr-3"
                  />
                  <div>
                    <p className="font-roboto text-sm text-[#121212]">
                      Guy Hawkins
                    </p>
                    <p className="font-roboto text-xs text-[#6B7280]">
                      Added a file to 7Heros Project
                    </p>
                  </div>
                </div>
                <span className="font-roboto text-xs text-[#6B7280]">
                  10:15 AM
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="./activity3.jpg"
                    alt="Profile of Kristin Watson"
                    className="w-[40px] h-[40px] rounded-full mr-3"
                  />
                  <div>
                    <p className="font-roboto text-sm text-[#121212]">
                      Kristin Watson
                    </p>
                    <p className="font-roboto text-xs text-[#6B7280]">
                      Commented on 7Heros Project
                    </p>
                  </div>
                </div>
                <span className="font-roboto text-xs text-[#6B7280]">
                  10:15 AM
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}