import { SearchInput } from "../input/Input";
import ThemeController from "../theme-controller/ThemeController";
import { NavMenuItems, NavMenuType } from "./NavMenuData";

const Navbar = () => {
  const navItems: JSX.Element[] = NavMenuItems?.map((menu: NavMenuType) => (
    <li key={menu?.id}>
      <a>{menu?.label}</a>
    </li>
  ));

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
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
    </div>
  );
};

export default Navbar;
