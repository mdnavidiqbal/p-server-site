import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import useRole from "../../hooks/useRole";
import Loading from "../../pages/Loading/Loading";

const DashboardLayout = () => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <Loading />;
  return (
    <div>
      <div className="drawer lg:drawer-open bg-gradient-to-r from-[#16222A] to-[#3A6073]">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-6"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <NavLink to={"/dashboard"} className="px-4 text-xl font-bold">
              Dashboard
            </NavLink>
          </nav>
          {/* Page content here */}
          <Outlet />
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-6"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-6 "
                    >
                      <path d="M4 20V10"></path>
                      <path d="M10 20V4"></path>
                      <path d="M16 20v-6"></path>
                      <path d="M22 20V14"></path>
                    </svg>
                    <span className="is-drawer-close:hidden">Statistics</span>
                  </Link>
                </li>
              )}
              {/* Our Dashboard Link */}

              {/* Apply Registration */}
              {role === "user" && (
                <li>
                  <Link
                    to={"user-registration"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Registration"
                  >
                    {/* Registration icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-6"
                    >
                      <path d="M4 4h16v16H4z"></path>
                      <path d="M8 10h8"></path>
                      <path d="M8 14h5"></path>
                      <path d="M12 6v4"></path>
                    </svg>
                    <span className="is-drawer-close:hidden">
                      User Registration
                    </span>
                  </Link>
                </li>
              )}
              {role === "admin" && (
                <li>
                  <Link
                    to={"registration-data"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Application Registration"
                  >
                    {/* Registration icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-6"
                    >
                      <path d="M4 4h16v16H4z"></path>
                      <path d="M8 10h8"></path>
                      <path d="M8 14h5"></path>
                      <path d="M12 6v4"></path>
                    </svg>
                    <span className="is-drawer-close:hidden">
                      Apply Registration
                    </span>
                  </Link>
                </li>
              )}

              {/* Users */}
              {role === "user" && (
                <li>
                  <Link
                    to={"site-users"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Users"
                  >
                    {/* User/Profile icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-6"
                    >
                      <circle cx="12" cy="7" r="4"></circle>
                      <path d="M5.5 21a8.5 8.5 0 0 1 13 0"></path>
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-6"
                    >
                      <circle cx="9" cy="7" r="4"></circle>
                      <circle cx="17" cy="7" r="3"></circle>
                      <path d="M2 21a7 7 0 0 1 14 0"></path>
                      <path d="M14 21a5 5 0 0 1 8 0"></path>
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-6"
                    >
                      <circle cx="9" cy="7" r="4"></circle>
                      <circle cx="17" cy="7" r="3"></circle>
                      <path d="M2 21a7 7 0 0 1 14 0"></path>
                      <path d="M14 21a5 5 0 0 1 8 0"></path>
                    </svg>
                    <span className="is-drawer-close:hidden">Admin Request</span>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-6"
                    >
                      <circle cx="9" cy="7" r="4"></circle>
                      <circle cx="17" cy="7" r="3"></circle>
                      <path d="M2 21a7 7 0 0 1 14 0"></path>
                      <path d="M14 21a5 5 0 0 1 8 0"></path>
                    </svg>
                    <span className="is-drawer-close:hidden">Become An Admin</span>
                  </Link>
                </li>
              )}
              {/* List item */}
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-6"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  <span className="is-drawer-close:hidden">Settings</span>
                </button>
              </li>
              <hr className="my-20 font-bold text-xl" />
              {/* Profile */}

              {role === "user" && (
                <li>
                  <Link
                    to={"dashboard-profile"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Profile"
                  >
                    {/* Profile icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-6"
                    >
                      <circle cx="12" cy="7" r="4"></circle>
                      <path d="M5.5 21a8.5 8.5 0 0 1 13 0"></path>
                    </svg>
                    <span className="is-drawer-close:hidden">Profile</span>
                  </Link>
                </li>
              )}

              {/* Logout */}
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Logout"
                >
                  {/* Logout icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-6"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <path d="M16 17l5-5-5-5"></path>
                    <path d="M21 12H9"></path>
                  </svg>
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
