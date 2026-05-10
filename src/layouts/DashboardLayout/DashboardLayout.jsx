import React, { use } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import useRole from "../../hooks/useRole";
import Loading from "../../pages/Loading/Loading";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const DashboardLayout = () => {
  const [role, isRoleLoading] = useRole();
  const navigate = useNavigate();

  if (isRoleLoading) return <Loading />;
  const { logOut } = use(AuthContext);
  const handleLogout = async () => {
    try {
      await logOut();

      toast.success("Logout Successfully");

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 50);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSettings = () => {
    return navigate("/not-found");
  };
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300 ]">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <img
                src="https://i.ibb.co.com/B2HvwsSC/show.png"
                alt="user icon"
                className="my-1.5 inline-block size-6"
              />
            </label>
            <NavLink to={"/dashboard"} className="px-4 text-xl font-bold ">
              Dashboard
            </NavLink>
          </nav>
          {/* Page content here */}
          <Outlet />
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start is-drawer-close:w-20 is-drawer-open:w-64]">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <Link
                  to="/home"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <img
                    src="https://i.ibb.co.com/W484B9yL/homepage.png"
                    alt="user icon"
                    className="my-1.5 inline-block size-7"
                  />
                  <span className="is-drawer-close:hidden">Homepage</span>
                </Link>
              </li>
              {/* Conditional Rendering for user */}
              {role === "user" && (
                <li>
                  <Link
                    to="/dashboard/statistics"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Statistics"
                  >
                    {/* Statistics icon */}
                    <img
                      src="https://i.ibb.co.com/yc5BPMSV/analysis.png"
                      alt="user icon"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden">Statistics</span>
                  </Link>
                </li>
              )}
              {/* Our Dashboard Link */}

              {/* Apply Registration */}
              {/* {role === "admin" && (
                <li>
                  <Link
                    to={"user-registration"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Registration"
                  >
                    
                   <img
                      src="https://i.ibb.co.com/mdTx8kD/document.png"
                      alt="user icon"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden">
                      My Information
                    </span>
                  </Link>
                </li>
              )} */}
              {role === "admin" && (
                <li>
                  <Link
                    to={"registration-data"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Registered Users"
                  >
                    {/* Registration icon */}
                    <img
                      src="https://i.ibb.co.com/mdTx8kD/document.png"
                      alt="user icon"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden">
                      Registered Users
                    </span>
                  </Link>
                </li>
              )}

              {/* Users */}
              {role === "admin" && (
                <li>
                  <Link
                    to={"site-users"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Users"
                  >
                    {/* User/Profile icon */}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-6"
                    >
                      <circle cx="9" cy="7" r="4"></circle>
                      <circle cx="17" cy="7" r="3"></circle>
                      <path d="M2 21a7 7 0 0 1 14 0"></path>
                      <path d="M14 21a5 5 0 0 1 8 0"></path>
                    </svg> */}
                    <img
                      src="https://i.ibb.co.com/7TRX0ZY/management-consulting.png"
                      alt="user icon"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden">User</span>
                  </Link>
                </li>
              )}

              {/* Manage Users */}
              {role === "admin" && (
                <li>
                  <Link
                    to={"manage-users"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Manage Users"
                  >
                    {/* Users icon */}
                    <img
                      src="https://i.ibb.co.com/ns1rbPqz/management.png"
                      alt="user icon"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden">Manage Users</span>
                  </Link>
                </li>
              )}
              {role === "admin" && (
                <li>
                  <Link
                    to={"admin-request"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Admin Request"
                  >
                    {/* Users icon */}
                    <img
                      src="https://i.ibb.co.com/gLmj0Dmv/system-administration.png"
                      alt="user icon"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden">
                      Admin Request
                    </span>
                  </Link>
                </li>
              )}
              {role === "user" && (
                <li>
                  <Link
                    to={"be-admin"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Become An Admin"
                  >
                    {/* Users icon */}
                    <img
                      src="https://i.ibb.co.com/7TRX0ZY/management-consulting.png"
                      alt="user icon"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden">
                      Become An Admin
                    </span>
                  </Link>
                </li>
              )}
              {role === "user" && (
                <li>
                  <Link
                    to={"kabin-status"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="View My Kabin"
                  >
                    {/* Users icon */}
                    <img
                      src="https://i.ibb.co.com/rRTwfSNn/profile-1.png"
                      alt="user icon"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden">
                      View My Kabin
                    </span>
                  </Link>
                </li>
              )}
              {role === "admin" && (
                <li>
                  <Link
                    to={"request-kabin"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Request for Kabin"
                  >
                    {/* Users icon */}
                    <img
                      src="https://i.ibb.co.com/DgvfX2qW/documentation.png"
                      alt="user icon"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden">
                      Request for Kabin
                    </span>
                  </Link>
                </li>
              )}
              {/* List item */}
              {(role === "user" || role === "admin") && (
                <li>
                  <button
                    onClick={handleSettings}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Settings"
                  >
                    {/* Settings icon */}
                    <img
                      src="https://i.ibb.co.com/3ykM89JC/settings.png"
                      alt="user icon"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden">Settings</span>
                  </button>
                </li>
              )}
              <hr className="my-20 font-bold text-xl" />
              {/* Profile */}

              {(role === "user" || role === "admin") && (
                <li>
                  <Link
                    to={"dashboard-profile"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Profile"
                  >
                    {/* Profile icon */}
                    <img
                      src="https://i.ibb.co.com/hRwSDzpF/profile.png"
                      alt="user icon"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden">Profile</span>
                  </Link>
                </li>
              )}

              {/* Logout */}
              <li>
                <button
                  onClick={handleLogout}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Logout"
                >
                  {/* Logout icon */}
                  <img
                    src="https://i.ibb.co.com/Z60FQzNg/logout.png"
                    alt="user icon"
                    className="my-1.5 inline-block size-7"
                  />
                  <span className="is-drawer-close:hidden">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
