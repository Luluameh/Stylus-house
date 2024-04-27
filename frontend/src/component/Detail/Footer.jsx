import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
const Footer = () => {
  return (
     <div className="max-w-full mx-auto  px-4 sm:px-6 lg:px-8 pt-3  ">
      <div className="max-w-6xl  mx-auto ">
    <footer className="bg-[#1D2547] text-white pt-4 relative">
      {/* Footer Start */}
      <div className=" p-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Logo and About */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className=" mb-8">
                {/* Logo */}
                <div className=" mb-4">
                  <a
                    href="index.html"
                    className="font-bold text-center text-pretty text-lg"
                  >
                    STYLUS HOUSE
                  </a>
                </div>
                {/* About */}
                <div className="">
                  <div className="">
                    <p className="text-[#C2C5DB]">
                      Stylus House : Where Fashion Meets Comfort and Style.
                    </p>
                  </div>
                </div>
                {/* Social Links */}
                <div className="flex space-x-2 pt-3">
                  <a
                    href="/"
                    className="flex items-center justify-center w-10 h-10 rounded-full text-sm border border-gray-300 mr-2"
                  >
                    <div className="icon hover:text-maincolor">
                      <FaTwitter className="text-white" />
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex items-center justify-center w-10 h-10 rounded-full text-sm border border-gray-300 mr-2"
                  >
                    <div className="icon hover:text-maincolor">
                      <FaFacebookF className="text-white" />
                    </div>
                  </a>

                  <a
                    href="/"
                    className="flex items-center justify-center w-10 h-10 rounded-full text-sm border border-gray-300 mr-2 hover:text-maincolor"
                  >
                    <div className="icon hover:text-maincolor">
                      <FaPinterestP className="text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div className="col-span-1 text-[#C2C5DB]">
              <div className="single-footer-caption mb-8">
                <div className="footer-tittle">
                  <h4 className="mb-4 text-white">Quick links</h4>
                  <ul>
                    <li>
                      <a href="#">Image Licensing</a>
                    </li>
                    <li>
                      <a href="#">Style Guide</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Shop Category */}
            <div className="col-span-1 text-[#C2C5DB]">
              <div className="single-footer-caption mb-8">
                <div className="footer-tittle">
                  <h4 className="mb-4 text-white">Shop Category</h4>
                  <ul>
                    <li>
                      <a href="#">Image Licensing</a>
                    </li>
                    <li>
                      <a href="#">Style Guide</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Partners */}
            <div className="col-span-1 text-[#C2C5DB]">
              <div className="single-footer-caption mb-8">
                <div className="footer-tittle">
                  <h4 className="mb-4 text-white">Partners</h4>
                  <ul>
                    <li>
                      <a href="#">Image Licensing</a>
                    </li>
                    <li>
                      <a href="#">Style Guide</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Get in Touch */}
            <div className="col-span-1 text-[#C2C5DB]">
              <div className="single-footer-caption mb-8">
                <div className="footer-tittle">
                  <h4 className="mb-4 text-white">Get in touch</h4>
                  <ul>
                    <li>
                      <a href="#">(+234) 080-2949 6750</a>
                    </li>
                    <li>
                      <a href="#">demo@Luluameh.com</a>
                    </li>
                    <li>
                      <a href="#">67/A, luluameh, Green road, N</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom-area text-[#C2C5DB]">
        <div className="container">
          <div className="footer-border">
            <div className="row d-flex justify-center">
              <div className="col-md-12 text-center">
                <div className="footer-copy-right">
                  <p>
                    Copyright
                    <script>document.write(new Date().getFullYear());</script>
                    2024 All rights reserved | This code is made with 🟣 by{" "}
                    <a
                      href="https://.com"
                      className="text-maincolor"
                      target="_blank"
                    >
                      Lulu Ameh
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      </footer>
      </div>
      </div>
    
  );
};

export default Footer;
