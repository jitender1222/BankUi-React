import React from "react";

import Logo from "../assest/logo.svg";

import instagram from "../assest/instagram.svg";
import facebook from "../assest/facebook.svg";
import twitter from "../assest/twitter.svg";
import linkdeln from "../assest/linkedin.svg";

const Link = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-evenly mt-20">
      <div className="p-4 md:p-0">
        <img src={Logo} alt="" />
        <p className="sm: mt-4 text-gray-400 md:mt-0">A new way to make the payments easy, <br />reliable and secure</p>
      </div>

      <div className="flex mt-2 justify-between p-2 gap-4">
      <div>
        <p className="font-bold">Useful Link</p>
        <ul className="outer-link flex flex-col gap-4 text-gray-400">
            <li className="inner-link mt-2">
                <a href="#">Content</a>
            </li>
            <li className="inner-link">
                <a href="#">Explore</a>
            </li>
            <li className="inner-link">
                <a href="#">How it Works</a>
            </li>
            <li className="inner-link">
                <a href="#">Create</a>
            </li>
            <li className="inner-link">
                <a href="#">Terms & Services</a>
            </li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Community</p>
        <ul className="outer-link flex flex-col gap-4 text-gray-400">
            <li className="inner-link mt-2">
                <a href="#">Help Center</a>
            </li>
            <li className="inner-link">
                <a href="#">Partner</a>
            </li>
            <li className="inner-link">
                <a href="#">Suggestions</a>
            </li>
            <li className="inner-link">
                <a href="#">Blog</a>
            </li>
            <li className="inner-link">
                <a href="#">NewsLetter</a>
            </li>
        </ul>
      </div>
      <div>
        <p className="font-bold">Partner</p>
        <ul className="outer-link flex flex-col gap-4 text-gray-400">
            <li className="inner-link mt-2">
                <a href="#">Our Partner</a>
            </li>
            <li className="inner-link">
                <a href="#">Becomel a Partner</a>
            </li>
            </ul>
            </div>
            </div>
      </div>

    {/* footer */}
    <div className="h-[100px]">
      <div className="border m-auto mt-20 md:w-[70%]"></div>
      <div className="flex flex-col p-2 md:flex-row m-auto justify-between mt-4 md:w-[70%]">
      <p>Copyright &copy; 2022 HooBank.All Right reserved</p>
      <div className="flex gap-8 sm: mt-2 md:mt-0">
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={linkdeln} alt="" />
      </div>
      </div>
      </div>
    </>
  );
};

export default Link;
