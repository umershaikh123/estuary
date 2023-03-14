import React from "react";

const linkHover = `hover:text-emerald hover:scale-105 transition ease-in duration-150`;
const Navbar = () => {
  return (
    <>
      <div className="container   w-auto  mt-8 mx-auto flex flex-row justify-between items-center">
        <div className="flex justify-between items-center space-x-3">
          <div className="text-3xl text-white items-center font-bold">
            Estuary
          </div>

          <div className="text-xs border-2 border-neon text-emerald px-4 py-1 mt-2">
            Aplha
          </div>
        </div>

        <div className="flex justify-between items-center text-white text-lg opacity-95  space-x-8    ">
          <a className=" hover:text-emerald hover:scale-105 transition ease-in duration-150">
            Sign-in
          </a>

          <a className=" hover:text-emerald hover:scale-105 transition ease-in duration-150">
            Sign-out
          </a>

          <a className="hover:text-emerald  hover:scale-105 transition ease-in duration-150">
            Verify
          </a>

          <a className=" hover:text-emerald hover:scale-105 transition ease-in duration-150">
            Documentation
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
