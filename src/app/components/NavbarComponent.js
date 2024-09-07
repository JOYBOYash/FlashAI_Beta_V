import React from "react";
import Link from "next/link";

function NavbarComponent() {
  return (
    <div>
      {" "}
      <div className="w-full p-2 bg-white/30 rounded-b-3xl border-white/50 border-2 shadow-md justify-center items-center flex flex-col ">
        <h1 className="text-2xl text-center cursor-default ">Flash.ai</h1>
        <div className="flex text-xl items-center justify-center p-2 gap-5 ">
          <Link
            href="/pages/flash"
            className="hover:cursor-pointer hover:font-bold hover:text-black transition ease-in-out text-white"
          >
            Flash
          </Link>
          <Link
            href="/pages/user"
            className="hover:cursor-pointer hover:font-bold hover:text-black transition ease-in-out text-white"
          >
            User
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
