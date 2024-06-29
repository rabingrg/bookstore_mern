import { useContext, useEffect, useState } from "react";
import { SearchInput } from "../input/Input";
import ThemeController from "../theme-controller/ThemeController";
import { NavMenuItems, NavMenuType } from "./NavMenuData";
import DrawerIcon from "../../assets/icons/DrawerIcon";
import { StyledContainer } from "../../style/Style";
import { useNavigate } from "react-router-dom";
import Login from "../modal/LoginRegisterModal";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { authUser } = useContext(AuthContext);
  const [sticky, setSticky] = useState<boolean>(false);
  const navigate = useNavigate();
  const element = document.documentElement;
  const body = document.body;
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleProtectedRoute = (menu: NavMenuType) => {
    if (!authUser && menu?.id === 2) {
      document?.getElementById("login_modal")?.showModal();
    } else {
      navigate(menu.route);
    }
  };

  const navItems: JSX.Element[] = NavMenuItems?.map((menu: NavMenuType) => (
    <li key={menu?.id}>
      <a
        className="dark:text-white cursor-pointer"
        onClick={() => handleProtectedRoute(menu)}
      >
        {menu?.label}
      </a>
    </li>
  ));

  const handleModalOpen = (): void => {
    document?.getElementById("login_modal")?.showModal();
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      body.classList.remove("dark");
    }
  }, [theme]);

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
    <>
      <StyledContainer
        className={` fixed left-0 right-0 top-0 z-50  ${
          sticky &&
          "bg-base-100 shadow-md duration-200 ease-in-out transition-all dark:bg-slate-800"
        }`}
      >
        <div className="navbar">
          <div className="navbar-start px-5">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <DrawerIcon className="h-5 w-5" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <a className=" text-xl">Bookstore</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <SearchInput />
            <ThemeController theme={theme} setTheme={setTheme} />
            {authUser && <p>{authUser?.fullName?.split(" ")?.[0]}</p>}
            <div className="">
              {authUser ? (
                <a
                  className="bg-[#f000b7] text-white px-4 py-3 rounded-md cursor-pointer duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              ) : (
                <a
                  className="bg-black text-white px-4 py-3 rounded-md hover:bg-slate-500 cursor-pointer duration-300"
                  onClick={handleModalOpen}
                >
                  Login
                </a>
              )}
            </div>
          </div>
        </div>
      </StyledContainer>
      <Login />
    </>
  );
};

export default Navbar;
