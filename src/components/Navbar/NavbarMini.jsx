import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.svg";
import MobileNav from "./MobileNav";
import "./Navbar.css";
import Search from "../Search/Search";
import SearchModal from "../Search/SearchModal";
import ButtonV5 from "../pixaui/buttonv5";

const NavbarMini = () => {
  const [isOpen, setIsOpen] = useState(false); // for hamburger menu
  const [MobileNavOpen, setMobileNavOpen] = useState(false); // for mobile nav
  const [prevScrollPos, setPrevScrollPos] = useState(0); // for navbar hide on scroll
  const [visible, setVisible] = useState(true); // for navbar hide on scroll
  const [searchMobile, setSearchMobile] = useState(false); // for search modal

  const closeSearchModal = () => {
    setSearchMobile(false);
  };

  const handleClick = () => {
    setMobileNavOpen(!MobileNavOpen);
    setIsOpen(!isOpen);
  };

  const scrollToBlog = () => {
    const blogSection = document.getElementById("blog-section");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "mdooth" });
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const scrollingDown = currentScrollPos > prevScrollPos;

    setVisible(!scrollingDown);
    setPrevScrollPos(currentScrollPos);
  };

  const openSearchMobile = () => {
    setSearchMobile(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navClasses = `rrelative bg-[#ffffffcc] bg-blur border-b fixed item-center justify-center h-[60px] p-3 flex w-screen text-black z-40 transition-transform transform ${visible ? "translate-y-0" : "-translate-y-full"
    }`;

  return (
    <>
      {/* <div className="flex flex-col"> */}
      {searchMobile && (
        <SearchModal closeSearchModal={closeSearchModal} focus={1} full={1} />
      )}
      <nav className={navClasses} aria-label="Global">
        <div className="flex w-full h-full justify-between items-center max-w-[1400px] m-auto">
          <div className="flex w-full items-center justify-between px-1 lg:px-8">
            <div className="flex justify-center items-center gap-2">
              <Link to="/" className="p-2">
                <img className="w-10" src={logo} alt="" />
              </Link>
              <div className="md:hidden block">
                <Search mode="light" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div
                onClick={() => {
                  openSearchMobile();
                }}
                className="md:flex hidden h-[28px] w-[28px] border-[1.5px] bg-[#f8f8f8] border-[#d9d9d9] rounded-lg p-1 cursor-pointer justify-center items-center "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 28.6509C22.8289 28.6509 28.5 22.9798 28.5 15.9842C28.5 8.9886 22.8289 3.31754 15.8333 3.31754C8.83769 3.31754 3.16663 8.9886 3.16663 15.9842C3.16663 22.9798 8.83769 28.6509 15.8333 28.6509Z"
                    stroke="#b9b9b9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.8333 29.9842L27.1666 27.3175"
                    stroke="#b9b9b9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <NavLink to="/request">
                <ButtonV5 icon={false} color="#f6f8fb">
                  <h5 className="flex gap-1 font-[400] text-[#212121] text-[16px] -tracking-[0.2px]">
                    Request <div className="x-sm:hidden block">Article</div>
                  </h5>
                </ButtonV5>
              </NavLink>
              <Link
                to="/create"
                className="cursor-pointer hover:text-[#313131] "
              >
                <ButtonV5 icon={false}>
                  <div className="flex justify-center items-center gap-1">
                    <h5 className="font-[300] -tracking-[0.2px] flex gap-1 ">
                      Write<div className="x-sm:hidden block">Article</div>
                    </h5>
                    {/* write svg */}
                    <div className="flex w-5 justify-end items-center overflow-hidden">
                      <div className="w-5">
                        <svg className={`group-hover:translate-x-[100%] group-hover:opacity-100 group-hover:duration-300 translate-x-[0%] opacity-0 duration-0 text-[#ffffff80] group-hover:text-[#ffffff] transition-all`} width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#f0f0f0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z" stroke="#f0f0f0" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M14.9099 4.15002C15.5799 6.54002 17.4499 8.41002 19.8499 9.09002" stroke="#f0f0f0" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <div className="w-5">
                        <svg className={`group-hover:translate-x-[100%] group-hover:opacity-0 group-hover:duration-300 translate-x-[0%] opacity-100 duration-0 text-[#ffffff80] group-hover:text-[#ffffff] transition-all`} width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#f0f0f0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z" stroke="#f0f0f0" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M14.9099 4.15002C15.5799 6.54002 17.4499 8.41002 19.8499 9.09002" stroke="#f0f0f0" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                      </div>
                    </div>
                    
                  </div>
                </ButtonV5>
              </Link>
            </div>
          </div>
        </div>
        <div>{/* {click && content} */}</div>
        <div className="hidden w-full items-center justify-between px-0">
          <Link to="/" className="p-2">
            <img className="w-10" src={logo} alt="" />
          </Link>
          <div className="flex items-center justify-center gap-2">
            <div
              onClick={() => {
                openSearchMobile();
              }}
              className=" h-[28px] w-[28px] border-[1.5px] bg-[#f8f8f8] border-[#d9d9d9] rounded-lg p-1 cursor-pointer  flex justify-center items-center "
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 28.6509C22.8289 28.6509 28.5 22.9798 28.5 15.9842C28.5 8.9886 22.8289 3.31754 15.8333 3.31754C8.83769 3.31754 3.16663 8.9886 3.16663 15.9842C3.16663 22.9798 8.83769 28.6509 15.8333 28.6509Z"
                  stroke="#b9b9b9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.8333 29.9842L27.1666 27.3175"
                  stroke="#b9b9b9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className="items-center justify-center p-0 m-0 z-50 md:flex hidden text-white transition-all"
              onClick={handleClick}
            >
              {/* {click ? <FaTimes /> : <CiMenuFries />} */}
              <Hamburger
                direction="right"
                color="#212121"
                size={32}
                toggled={isOpen}
                toggle={setIsOpen}
              />
            </div>
          </div>
        </div>
      </nav>
      {/* {MobileNavOpen && <MobileNav isOpen={isOpen} />} */}
      {/* </div> */}
    </>
  );
};

export default NavbarMini;
