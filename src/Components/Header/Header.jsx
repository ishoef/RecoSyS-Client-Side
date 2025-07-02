import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { Link, NavLink } from "react-router";
import { TiThMenu } from "react-icons/ti";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, LogOut, setUser } = useContext(AuthContext);

  const profilePic = user?.photoURL;

  // User Logging Out
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out?",
      icon: "warning",
      confirmButtonText: "Yes, log out!",
      confirmButtonColor: "#14b8a6",
      showCancelButton: true,
      cancelButtonText: "No, cancel!",
      cancelButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        LogOut()
          .then(() => {
            Swal.fire("Logged out!", "You have been logged out.", "success");
            setUser(null); // Clear user state
          })
          .catch((error) => {
            Swal.fire("Error!", error.message, "error");
          });
      }
    });
  };

  return (
    <>
      <header className="sticky top-0 z-10 py-5 bg-white/20 backdrop-blur-md shadow">
        <div className="w-11/12 md:w-11/12 lg:w-9/12 mx-auto flex justify-between items-center ">
          <Logo />
          <nav className="hidden lg:block">
            <ul className="flex gap-5 poppins-semibold  ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                      : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/queries"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                      : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                  }
                >
                  Queries
                </NavLink>
              </li>

              {user && (
                <>
                  <li>
                    <NavLink
                      to="/recforme"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                          : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                      }
                    >
                      Recommendations For Me
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/myqueries"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                          : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                      }
                    >
                      My Queries
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/myrecos"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                          : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                      }
                    >
                      My Recommendations
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <div className="flex gap-4 items-center">
            {/* login & Logout Button */}
            {user ? (
              <button
                onClick={handleLogOut}
                className="hidden lg:block btn btn-primary"
              >
                Log Out
              </button>
            ) : (
              <Link to="/auth/login">
                <button className="btn btn-primary text-[16px] ">Login</button>
              </Link>
            )}

            {/* User Profile Photo Showing */}
            {user && (
              <ProfilePhoto
                proPic={profilePic}
                tooltip={true}
                user={user}
                To="/myprofile"
              />
            )}

            {/* Small Device Dropdown Menu */}
            <div className="dropdown dropdown-end z-9999 lg:hidden">
              <div tabIndex={0} role="button" className="btn m-1">
                <TiThMenu />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content dropdown-fix mt-4 menu bg-base-100 rounded-box z-9999 w-52 p-2 shadow-sm"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/queries"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    Queries
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/recforme"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    Recommendations For Me
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myqueries"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    My Queries
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myrecos"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    My Recommendations
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
