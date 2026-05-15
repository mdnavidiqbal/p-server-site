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

  // Close drawer on mobile after clicking menu item
  const closeDrawer = () => {
    const drawer = document.getElementById("my-drawer-4");

    if (drawer) {
      drawer.checked = false;
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();

      closeDrawer();

      toast.success("Logout Successfully");

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 50);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSettings = () => {
    closeDrawer();
    return navigate("/underconstruction");
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300 bg-gradient-to-r from-gray-900/90 via-slate-800/90 to-gray-700/90 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-emerald-900/30">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <img
                src="https://i.ibb.co.com/B2HvwsSC/show.png"
                alt="menu icon"
                className="my-1.5 inline-block size-6"
              />
            </label>

            <NavLink
              to={"/dashboard"}
              className="px-4 text-xl text-white font-bold"
            >
              Dashboard
            </NavLink>
          </nav>

          {/* Page content */}
          <Outlet />
        </div>

        {/* Sidebar */}
        <div className="drawer-side is-drawer-close:overflow-visible bg-gradient-to-b from-slate-950/95 via-emerald-950/90 to-green-900/90 backdrop-blur-xl border-r border-white/10 shadow-2xl">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="flex min-h-full flex-col items-start pt-3 is-drawer-close:w-20 is-drawer-open:w-64">
            <ul className="menu w-full">
              {/* Home */}
              <li>
                <Link
                  to="/home"
                  onClick={closeDrawer}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  <img
                    src="https://i.ibb.co.com/W484B9yL/homepage.png"
                    alt="home"
                    className="my-1.5 inline-block size-7"
                  />
                  <span className="is-drawer-close:hidden text-white">
                    Homepage
                  </span>
                </Link>
              </li>

              {/* Admin Routes */}
              {role === "admin" && (
                <li>
                  <Link
                    to={"registration-data"}
                    onClick={closeDrawer}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Registered Users"
                  >
                    <img
                      src="https://i.ibb.co.com/mdTx8kD/document.png"
                      alt="document"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden text-white">
                      Registered Users
                    </span>
                  </Link>
                </li>
              )}

              {role === "admin" && (
                <li>
                  <Link
                    to={"site-users"}
                    onClick={closeDrawer}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Users"
                  >
                    <img
                      src="https://i.ibb.co.com/7TRX0ZY/management-consulting.png"
                      alt="users"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden text-white">
                      User
                    </span>
                  </Link>
                </li>
              )}

              {role === "admin" && (
                <li>
                  <Link
                    to={"manage-users"}
                    onClick={closeDrawer}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Manage Users"
                  >
                    <img
                      src="https://i.ibb.co.com/ns1rbPqz/management.png"
                      alt="manage users"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden text-white">
                      Manage Users
                    </span>
                  </Link>
                </li>
              )}

              {role === "admin" && (
                <li>
                  <Link
                    to={"admin-request"}
                    onClick={closeDrawer}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Admin Request"
                  >
                    <img
                      src="https://i.ibb.co.com/gLmj0Dmv/system-administration.png"
                      alt="admin request"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden text-white">
                      Admin Request
                    </span>
                  </Link>
                </li>
              )}

              {/* User Routes */}
              {role === "user" && (
                <li>
                  <Link
                    to={"be-admin"}
                    onClick={closeDrawer}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Become An Admin"
                  >
                    <img
                      src="https://i.ibb.co.com/7TRX0ZY/management-consulting.png"
                      alt="be admin"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden text-white">
                      Become An Admin
                    </span>
                  </Link>
                </li>
              )}

              {role === "user" && (
                <li>
                  <Link
                    to={"kabin-status"}
                    onClick={closeDrawer}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="View My Kabin"
                  >
                    <img
                      src="https://i.ibb.co.com/rRTwfSNn/profile-1.png"
                      alt="kabin"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden text-white">
                      View My Kabin
                    </span>
                  </Link>
                </li>
              )}

              {role === "admin" && (
                <li>
                  <Link
                    to={"request-kabin"}
                    onClick={closeDrawer}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Request for Kabin"
                  >
                    <img
                      src="https://i.ibb.co.com/DgvfX2qW/documentation.png"
                      alt="request kabin"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden text-white">
                      Request for Kabin
                    </span>
                  </Link>
                </li>
              )}

              {/* Settings */}
              {(role === "user" || role === "admin") && (
                <li>
                  <button
                    onClick={handleSettings}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Settings"
                  >
                    <img
                      src="https://i.ibb.co.com/3ykM89JC/settings.png"
                      alt="settings"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden text-white">
                      Settings
                    </span>
                  </button>
                </li>
              )}

              <hr className="my-20 font-bold text-xl text-white" />

              {/* Profile */}
              {(role === "user" || role === "admin") && (
                <li>
                  <Link
                    to={"dashboard-profile"}
                    onClick={closeDrawer}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Profile"
                  >
                    <img
                      src="https://i.ibb.co.com/hRwSDzpF/profile.png"
                      alt="profile"
                      className="my-1.5 inline-block size-7"
                    />
                    <span className="is-drawer-close:hidden text-white">
                      Profile
                    </span>
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
                  <img
                    src="https://i.ibb.co.com/Z60FQzNg/logout.png"
                    alt="logout"
                    className="my-1.5 inline-block size-7"
                  />
                  <span className="is-drawer-close:hidden text-white">
                    Logout
                  </span>
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