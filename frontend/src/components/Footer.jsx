import React from "react";
import Img from "../assets/id8nxt.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white lg:flex justify-between py-10">
      <div className="flex px-10">
        <div className="text-3xl font-semibold px-3">
          C2C <div>DEVCONVO</div>
        </div>
        <div className="px-3">
          <p>Sponsored By</p>
          <img src={Img} alt="" />
        </div>
      </div>

      <div className="px-14 lg:py-0 py-10">
        <div className="flex gap-4 py-2">
          <a href=""><FaInstagram className="text-xl" /></a>
          <a href=""><FaFacebook className="text-xl" /></a>
          <a href=""><FaSquareXTwitter className="text-xl" /></a>
          <a href=""><FaLinkedin className="text-xl" /></a>
        </div>
        <div>
          <div className="font-semibold">Get In Touch</div>
          <div>
            <a href="mailto:">info@societyofexcellance.in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
