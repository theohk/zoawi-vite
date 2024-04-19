import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LuCat } from "react-icons/lu";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container shadow-xl mx-auto flex max-w-7xl flex-wrap p-5 flex-row items-center bg-teal-900/70 justify-between">
        {/* Catman */}
        <NavLink
          to="home"
          className="flex items-center title-font font-medium text-gray-900 w-1/2 sm:w-1/3"
        >
          <LuCat size={24} className="text-orange-300" />
          <p className="ml-3 font-alegreya font-bold text-white/80">
            CatMan Lyrics
          </p>
        </NavLink>
        {/* Hamburger Menu */}
        <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        {/* Nav on PC */}
        <PCNav setIsOpen={setIsOpen} isOpen={isOpen} />
        {/* Login */}
        <div className="hidden sm:block sm:w-1/3">
          <div className="flex justify-end  text-teal-100">
            <button className="inline-flex items-center bg-white-500 rounded-full py-0.5 px-3 border-[1px] border-teal-300 text-sm font-alegreya">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

function HamburgerMenu({ setIsOpen, isOpen }) {
  return (
    <>
      <div className="block sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400`}
        >
          <MdMenu
            size={24}
            className={`text-white ${isOpen ? "hidden" : "block"}`}
          />
          <MdClose
            size={24}
            className={`text-white ${isOpen ? "block" : "hidden"}`}
          />
        </button>
      </div>
    </>
  );
}

function PCNav({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        className={` w-full block font-alegreya flex-grow sm:flex sm:items-center sm:w-1/3 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex sm:flex-row flex-col text-md sm:flex-grow justify-center">
          <NavLink
            onClick={() => setIsOpen(!isOpen)}
            to="/home"
            className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(!isOpen)}
            to="/songs"
            className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4"
          >
            Songs
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(!isOpen)}
            to="/artists"
            className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4"
          >
            Artists
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(!isOpen)}
            to="/about"
            className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4"
          >
            About
          </NavLink>
        </div>
      </div>
    </>
  );
}
