import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { data } = useSelector((state) => state.navbarReducer);

  return (
    <nav className="w-full bg-slate-900 px-4 py-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <img
            className="rounded-full w-20 h-20"
            alt="avatar"
            src={data?.logo}
          />
          <div className="flex items-center gap-4">
            <p className="text-4xl text-white">{data?.company_name}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
