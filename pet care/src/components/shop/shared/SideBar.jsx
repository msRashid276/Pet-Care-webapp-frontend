import React from "react";
import { FcBullish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../../lib/constants/shop/Index";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:no-underline hover:bg-neutral-700 active:bg-neutral-600 rounded-sm text-base";

const SideBar = () => {
  return (
    <div className="w-60 p-3 bg-neutral-900 flex flex-col text-white">
      
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <div className="text-neutral-100 text-lg">pet care</div>
      </div>

      <div className="flex-1 flex flex-col py-8 gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SideBarLink key={item.key} item={item} />
        ))}
      </div>

      <div className="flex flex-col pt-2 border-t gap-0.5 border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SideBarLink key={item.key} item={item} />
        ))}
      </div>

      <div
        className={classNames(
         "text-red-500 cursor-pointer",
          linkClass
        )}
      >
        <span className="text-xl"><HiOutlineLogout/></span>
        <span>Log out</span>
      </div>
    </div>
  );
};

function SideBarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}

export default SideBar;
