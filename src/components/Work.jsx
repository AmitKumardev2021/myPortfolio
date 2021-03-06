import React from "react";
import reactui2 from "../assets/react-ui2.png";
import cocktail from "../assets/cocktail.png";
import portfolio from '../assets/portfolio.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent Work.</p>
        </div>
        {/* container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid-Item */}
          <div
            style={{ backgroundImage: `url(${portfolio})`  }}
            className="shadow-2xl shadow-[#040c16] group container reounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Reat JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://amitkumardev2021.github.io/myPortfolio/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AmitKumardev2021/myPortfolio" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid-item-2 */}
          <div
            style={{ backgroundImage: `url(${cocktail})` }}
            className="shadow-lg shadow-[#040c16] group container reounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Reat JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://amitkumardev2021.github.io/reactCocktail/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AmitKumardev2021/react--cocktail-" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid-item-3 */}
          <div
            style={{ backgroundImage: `url(${reactui2})` }}
            className="shadow-lg shadow-[#040c16] group container reounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Reat JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://amitkumardev2021.github.io/React-ui-page/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AmitKumardev2021/react-ui-2" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
