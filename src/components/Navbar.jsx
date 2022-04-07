import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import resume from "../assets/AmitResume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div>
    <div className="fixed w-full h-[80px] flex justify-between items-center px-2 bg-[#0a192f] text-gray-300">
      <div className="cursor-pointer">
        <Link to="home" smooth={true} duration={500}>
          <img className="w-[50px]" src={logo} alt="logo" />
        </Link>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger icon */}
      <div className="md:hidden z-10 " onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : `absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center`
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social media */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          {/* linkedIn */}
          <li className=" w-[160px] h-[40px] flex justify-between items-end ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600 ">
            <a
              className="flex justify-between  items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/amit-kumar-89bab1117/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          {/* github */}
          <li className=" w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333] ">
            <a
              className="flex justify-between  items-center w-full text-gray-300"
              href="https://github.com/AmitKumardev2021"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          {/* Email */}
          <li className=" w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0] ">
            <Link
              className="flex justify-between  items-center w-full text-gray-300"
              to="contact"
              smooth={true}
              duration={500}
            >
              E-Mail <HiOutlineMail size={30} />
            </Link>
          </li>
          {/* resume */}
          <li className=" w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69] ">
            <a
              className="flex justify-between  items-center w-full text-gray-300"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
