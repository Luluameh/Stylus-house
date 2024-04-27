import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaPinterestP, FaSearch } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import "./Navbar.css";
import { FaPlus, FaMinus } from "react-icons/fa"; // Adjust the import based on your icon library
import logo from '../../assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleShopDropdown = () => {
    setIsShopOpen(!isShopOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-white z-auto  ">
        <div className="flex items-center justify-between  h-24 max-w-6xl mx-auto ">
          <div className="flex items-center  ">
            <Link to="/" className="text-black">
<img src={logo} alt=""  className="img"/>
            </Link>
          </div>
          <div className="hidden  text-transform: uppercase md:flex md:space-x-12 w-50 font-medium text-base   ">
            <Link to="/" className="text-textbody hover:text-maincolor ">
              Home
            </Link>
            <div className="relative group inline-block text-left">
              <button
                type="button"
                className="text-textbody hover:text-maincolor"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <Link
                  to="/shop"
                  className="text-textbody hover:text-maincolor text-transform: uppercase "
                >
                  Shop
                </Link>
              </button>
              <div className="origin-top-right  absolute right-auto mt-8 w-63 p-5 rounded-t-md border-t-4   border-t-solid shadow-lg bg-white border-t-maincolor ring-1 ring-black ring-opacity-5 hidden group-hover:block arrow-top text-transform: capitalize  z-50">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    to="/men"
                    className="block px-4 py-2 text-sm text-textbody hover:text-purple-500"
                    role="menuitem"
                  >
                    Men
                  </Link>
                  <Link
                    to="/women"
                    className="block px-4 py-2 text-sm text-textbody hover:text-purple-500"
                    role="menuitem"
                  >
                    Women
                  </Link>
                  <Link
                    to="/kid"
                    className="block px-4 py-2 text-sm text-textbody hover:text-purple-500"
                    role="menuitem"
                  >
                    Kid
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/about" className="text-textbody hover:text-maincolor">
              About
            </Link>
            <Link to="/blog" className="text-textbody hover:text-maincolor">
              Blog
            </Link>
            <Link to="/contact" className="text-textbody hover:text-maincolor">
              Contact
            </Link>
          </div>
          {/**social media icons */}
          <div className="hidden md:flex md:space-x-12  ">
            <div className="flex space-x-2">
              <a
                href="/"
                className="flex items-center justify-center w-10 h-10 rounded-full text-sm border border-gray-300 mr-2"
              >
                <div className="icon hover:text-maincolor">
                  <FaTwitter className="text-textbody hover:text-maincolor" />
                </div>
              </a>
              <a
                href="/"
                className="flex items-center justify-center w-10 h-10 rounded-full text-sm border border-gray-300 mr-2"
              >
                <div className="icon hover:text-maincolor">
                  <FaFacebookF className="text-textbody hover:text-maincolor" />
                </div>
              </a>

              <a
                href="/"
                className="flex items-center justify-center w-10 h-10 rounded-full text-sm border border-gray-300 mr-2 hover:text-maincolor"
              >
                <div className="icon hover:text-maincolor">
                  <FaPinterestP className="text-textbody  hover:text-maincolor" />
                </div>
              </a>
            </div>
            <div className=" flex space-x-4  ">
              <p className="text-base cursor-pointer p-3 float-right bg-neutral-100 rounded-full">
                <FaSearch className="text-textbody  " />
              </p>
              <p className="flex space-x-2  bg-maincolor px-5 py-2 rounded-full cursor-pointer ">
                <BsBagCheck className="text-white " />
                <span className="text-white">0</span>
              </p>
            </div>
          </div>

          {/**handbugger side */}
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white focus:outline-none  focus:text-white"
            >
              <svg
                className="h-8 w-33"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#9F78FF"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M4 6h16M4 12h16M4 18h16"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full fixed top-16 left-0 z-10 p-4 ">
          <div className="flex flex-col px-3 py-4 space-y-6 mx-auto text-transform: capitalize">
            <Link to="/" className="text-textbody hover:text-maincolor">
              Home
            </Link>

            <Link to="/about" className="text-textbody hover:text-maincolor">
              About
            </Link>
            <Link to="/blog" className="text-textbody hover:text-maincolor">
              Blog
            </Link>
            <div className="group inline-block text-left">
              <div className="flex justify-between">
                <Link to="/shop" className="text-textbody ">
                  Shop
                </Link>
                <span onClick={toggleDropdown}>
                  {isDropdownVisible ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {isDropdownVisible && (
                <div className="">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/men"
                      className=" px-4 py-2 text-base text-textbody "
                      role="menuitem"
                    >
                      Men
                    </Link>
                    <Link
                      to="/women"
                      className="block px-4 py-2  text-base text-textbody hover:text-purple-500"
                      role="menuitem"
                    >
                      Women
                    </Link>
                    <Link
                      to="/kid"
                      className="block px-4 py-2 text-base text-textbody hover:text-purple-500"
                      role="menuitem"
                    >
                      Kid
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact" className="text-textbody hover:text-maincolor">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
