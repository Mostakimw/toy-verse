import { useContext, useState } from "react";
import {
  FaArrowCircleDown,
  FaHamburger,
  FaRegWindowClose,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

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
                <h1 className="text-white text-lg link">ToyVerse</h1>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/blogs"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </Link>
                <Link
                  to="/all-toys"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  All Toys
                </Link>
                <Link
                  to="/add-toy"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Add Toy
                </Link>
                <Link
                  to="/my-toys"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  My Toys
                </Link>
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
                      className="text-white border border-gray-300 px-3 py-2 hover:cursor-pointer hover:border-2 rounded-full transition-all duration-300"
                    >
                      {user.displayName}{" "}
                      <FaArrowCircleDown className="inline-block" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content p-2 shadow bg-base-100 rounded-box text-gray-800 w-52 mt-4"
                    >
                      <li>
                        <a>Add Toys</a>
                      </li>
                      <hr />
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
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blogs
            </Link>
            <Link
              to="/all-toys"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              All Toys
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
