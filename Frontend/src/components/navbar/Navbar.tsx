import { useEffect, useState } from "react";
import { SearchInput } from "../input/Input";
import ThemeController from "../theme-controller/ThemeController";
import { NavMenuItems, NavMenuType } from "./NavMenuData";
import DrawerIcon from "../../assets/icons/DrawerIcon";
import { StyledContainer } from "../../style/Style";

const Navbar = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const navItems: JSX.Element[] = NavMenuItems?.map((menu: NavMenuType) => (
    <li key={menu?.id}>
      <a>{menu?.label}</a>
    </li>
  ));

  useEffect(() => {
    const handlePageScroll = () => {
      if (window.scrollY > 0) {
        //for vertically scroll detection
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handlePageScroll);
    return () => {
      window.removeEventListener("scroll", handlePageScroll);
    };
  }, []);

  return (
    <StyledContainer
      className={` fixed left-0 right-0 top-0 ${
        sticky &&
        "bg-base-100 shadow-md duration-200 ease-in-out transition-all"
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <DrawerIcon className="h-5 w-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bookstore</a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <SearchInput />
          <ThemeController />
          <div className="">
            <a className="bg-black text-white px-4 py-3 rounded-md hover:bg-slate-500 cursor-pointer duration-300">
              Login
            </a>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Navbar;
