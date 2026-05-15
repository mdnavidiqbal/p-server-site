import React from "react";
import { Link } from "react-router";

const UserStatistics = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Top Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg">

        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-blue-100 max-w-xl">
          Manage your profile, monitor your activities, and stay updated with your latest dashboard insights.
        </p>

      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                Total Requests
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                24
              </h2>
            </div>

            <div className="bg-blue-100 p-4 rounded-xl text-2xl">
              📄
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                Approved
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                12
              </h2>
            </div>

            <div className="bg-green-100 p-4 rounded-xl text-2xl">
              ✅
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                Pending
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                08
              </h2>
            </div>

            <div className="bg-yellow-100 p-4 rounded-xl text-2xl">
              ⏳
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                Messages
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                05
              </h2>
            </div>

            <div className="bg-pink-100 p-4 rounded-xl text-2xl">
              💬
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Recent Activity
          </h2>

          <div className="space-y-5">

            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-semibold text-gray-700">
                  Registration Submitted
                </p>

                <p className="text-sm text-gray-500">
                  Your registration request was submitted successfully.
                </p>
              </div>

              <span className="text-sm text-blue-600">
                Today
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-semibold text-gray-700">
                  Profile Updated
                </p>

                <p className="text-sm text-gray-500">
                  You updated your profile information.
                </p>
              </div>

              <span className="text-sm text-blue-600">
                Yesterday
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-700">
                  Admin Approved Request
                </p>

                <p className="text-sm text-gray-500">
                  Your latest request has been approved.
                </p>
              </div>

              <span className="text-sm text-blue-600">
                2 days ago
              </span>
            </div>

          </div>
        </div>

        {/* Quick Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">

          <img
            src="https://i.ibb.co.com/hRwSDzpF/profile.png"
            alt="profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 object-cover"
          />

          <h2 className="text-xl font-bold text-gray-800 mt-4">
            User Profile
          </h2>

          <p className="text-gray-500 text-sm mt-1 pb-3">
            Manage your account and profile settings.
          </p>

          <Link to={'dashboard-profile'} className="btn btn-primary bg-purple-500 hover:bg-purple-600">
            View Profile
          </Link>

        </div>

      </div>
    </div>
  );
};

export default UserStatistics;