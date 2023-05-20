import { useContext, useState } from "react";
import {
  FaArrowCircleDown,
  FaHamburger,
  FaRegWindowClose,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // ! logout user handler
  const signoutUser = () => {
    logoutUser();
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleNavbar}
              className="text-gray-400 hover:text-white focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FaRegWindowClose className="text-white ml-2" />
              ) : (
                <FaHamburger className="text-white ml-2" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="https://i.ibb.co/L5wDSVd/Logo01.png"
                  className="w-40"
                  alt=""
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={`my-nav-btn ${isActive ? "active" : "default"}`}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/blogs"
                  className={`my-nav-btn ${isActive ? "active" : "default"}`}
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/all-toys"
                  className={`my-nav-btn ${isActive ? "active" : "default"}`}
                >
                  All Toys
                </NavLink>
                <NavLink
                  to="/add-toy"
                  className={`my-nav-btn ${isActive ? "active" : "default"} ${
                    !user ? "hidden" : "default"
                  }`}
                >
                  Add Toy
                </NavLink>
                <NavLink
                  to="/my-toys"
                  className={`my-nav-btn ${isActive ? "active" : "default"} ${
                    !user ? "hidden" : "default"
                  }`}
                >
                  My Toys
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center">
            <div className="text-gray-300">
              <div className="flex items-center gap-3">
                {/* user profile icon when login  */}
                {user && (
                  <div>
                    <img
                      src={user.photoURL}
                      alt="user profile pic"
                      className="w-10 h-10 rounded-full link"
                      title={user.displayName}
                    />
                  </div>
                )}
                {/* showing user name as link and when click the link then signout button appear  */}
                {user ? (
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="text-gray-800 bg-gray-100 border border-[#CF4B5A] px-3 py-2 hover:cursor-pointer hover:border-2 rounded-full transition-all duration-300"
                    >
                      {user.displayName}{" "}
                      <FaArrowCircleDown className="inline-block" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content p-2 shadow bg-base-100 rounded-box text-gray-800 w-40 mt-4"
                    >
                      <li>
                        <button onClick={signoutUser}>
                          Sign Out <FaSignOutAlt />
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to="/login" className="my-btn">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile responsive  */}

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={`my-nav-btn ${isActive ? "active" : "default"}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={`my-nav-btn ${isActive ? "active" : "default"}`}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/all-toys"
              className={`my-nav-btn ${isActive ? "active" : "default"}`}
            >
              All Toys
            </NavLink>
            {user && (
              <NavLink
                to="/add-toy"
                className={`my-nav-btn ${isActive ? "active" : "default"}${
                  !user ? "hidden" : "default"
                }`}
              >
                Add Toy
              </NavLink>
            )}
            {user && (
              <NavLink
                to="/my-toys"
                className={`my-nav-btn ${isActive ? "active" : "default"}${
                  !user ? "hidden" : "default"
                }`}
              >
                My Toys
              </NavLink>
            )}
          </div>
          {user ? (
            <div className="dropdown dropdown-end py-2 flex justify-center">
              <label
                tabIndex={0}
                className="text-gray-800 bg-gray-100 border border-[#CF4B5A] px-3 py-2 hover:cursor-pointer hover:border-2 rounded-full transition-all duration-300"
              >
                {user.displayName}{" "}
                <FaArrowCircleDown className="inline-block" />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box text-gray-800 w-40 mt-4"
              >
                <li>
                  <button onClick={signoutUser}>
                    Sign Out <FaSignOutAlt />
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="flex py-3 justify-center">
              <button className="my-btn block">Login</button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
