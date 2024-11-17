import React from "react";
import { Link } from "react-router-dom";
function NavBar({ data }) {
  return (
    <>
      <div className="sticky top-0 z-10 bg-white shadow-md  text-xl">
        <nav className="flex  justify-between md:justify-around items-center p-4 bg-[#08d5f6] text-white  text-sm md:text-lg">
          <div className="">
            <Link to={"/"}>
              <p className="font-Doto" id="logo">
                E-Commerces
              </p>
            </Link>
          </div>
          {/* smaller screens */}
          <div className="order-1 md:order-0 block md:hidden relative">
            <span
              className="material-symbols-outlined"
              onClick={() => {
                document.querySelector("#menu").classList.toggle("hidden");
              }}
            >
              menu
            </span>
            <ul
              id="menu"
              className="z-40 flex gap-4 absolute flex-col bg-[#08d5f6] text-white px-4 py-2 rounded-md top-10 -right-4 w-32"
            >
              <Link to={"/"}>
                <li className="hover:underline ">Home</li>
              </Link>
              <Link to={"/products"}>
                <li className="hover:underline">Products</li>
              </Link>
              <Link to={"/about"}>
                <li className="hover:underline">About</li>
              </Link>
              <Link to={"/contact"}>
                <li className="hover:underline">Contact</li>
              </Link>
            </ul>
          </div>
          {/* bigger screen */}
          <div className="hidden md:block">
            <ul className="flex gap-4">
              <Link to={"/"}>
                <li className="hover:underline">Home</li>
              </Link>
              <Link to={"/products"}>
                <li className="hover:underline">Products</li>
              </Link>
              <Link to={"/about"}>
                <li className="hover:underline">About</li>
              </Link>
              <Link to={"/contact"}>
                <li className="hover:underline">Contact</li>
              </Link>
            </ul>
          </div>
          <Link to={"/cart"}>
            <div>
              <button className="flex items-center hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="ml-1 text-sm font-medium">
                  MyCart ({data.totalQuantity})
                </span>
              </button>
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
