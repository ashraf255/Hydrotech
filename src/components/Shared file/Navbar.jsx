import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../Authentication/Provider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthProvider);
  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline underline-offset-3 decoration-4 decoration-warning dark:decoration-warning"
              : ""
          }
        >
          HOME
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to={"/Shop"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline underline-offset-3 decoration-4 decoration-warning dark:decoration-warning"
              : ""
          }
        >
          Shop
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink
          to={"/Blog"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline underline-offset-3 decoration-4 decoration-warning dark:decoration-warning"
              : ""
          }
        >
          Blog
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink
          to={"/diseases"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline underline-offset-3 decoration-4 decoration-warning dark:decoration-warning"
              : ""
          }
        >
          Blog
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to={"/About"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline underline-offset-3 decoration-4 decoration-[#FBB403] dark:decoration-[#FBB403]"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={"/plants"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-3 decoration-4 decoration-warning dark:decoration-[#FBB403]"
                : "indicator"
            }
          >
            Monitoring
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={"/Contactus"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline underline-offset-3 decoration-4 decoration-warning dark:decoration-[#FBB403]"
              : "indicator"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white  shadow-xl ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navLink}
          </ul>
        </div>
        <img className="w-48 px-2" src="/leaf2.png" alt="logo" />
        {/* <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/leaf2.png" className="h-xl" alt=" Logo" />
        
    </a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 text-xl">{navLink}</ul>
      </div>
      <div className="navbar-end gap-3 pr-4">
        {!user && (
          <>
            <Link
              to="/login"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Login
              </span>
            </Link>
            <Link
              to="/signUp"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Sign up
              </span>
            </Link>
          </>
        )}
        {user && (
          <button
            onClick={logOut}
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group w-28"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Logout
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
