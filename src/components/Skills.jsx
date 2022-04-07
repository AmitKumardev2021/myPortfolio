import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import FireBase from "../assets/firebase.png";
import Github from "../assets/github.png";
import TailWind from "../assets/tailwind.png";
import Redux from "../assets/redux-toolkit.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">
            These are the technology I have already worked.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* HTML */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Html} alt="html icon" />
            <p className="my-4">HTML </p>
          </div>
          {/* CSS */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Css} alt="html icon" />
            <p className="my-4">CSS </p>
          </div>
          {/* javascript */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={JavaScript} alt="html icon" />
            <p className="my-4">JavaScript</p>
          </div>
          {/* tailwindcss */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={TailWind} alt="html icon" />
            <p className="my-4">TailwindCss</p>
          </div>
          {/* redux-toolkit */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Redux} alt="html icon" />
            <p className="my-4">Redux-toolkit </p>
          </div>
          {/* react.js */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={ReactImg} alt="html icon" />
            <p className="my-4">React.js</p>
          </div>
{/* github */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Github} alt="html icon" />
            <p className="my-4">GitHub</p>
          </div>
          {/* Node */}
           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Node} alt="html icon" />
            <p className="my-4">Node.js</p>
          </div> 
          {/* mongoes */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Mongo} alt="html icon" />
            <p className="my-4">Mongose</p>
          </div> 
          {/* firebase */}
           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={FireBase} alt="html icon" />
            <p className="my-4">FireBase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
