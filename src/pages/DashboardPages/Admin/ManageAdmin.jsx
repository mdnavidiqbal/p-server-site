import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import AdminRequestDataRow from "../../../layouts/DashboardLayout/TableRow/AdminRequestDataRow";
import { use, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Loading from "../../Loading/Loading";

import {
  FaUserShield,
  FaClock,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";

const ManageAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);

  const [search, setSearch] = useState("");

  const {
    data: requests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["admin-request", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/admin-request`);
      return result.data;
    },
  });

  // Filter by email
  const filteredRequests = requests.filter((item) =>
    item?.email
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Manage Admin Requests
        </h1>

        <p className="text-gray-500 mt-2">
          Review and manage all admin access requests.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">

        {/* Total Requests */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition duration-300">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Requests
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                {requests.length}
              </h2>

              <p className="text-sm text-blue-500 mt-1">
                All submitted requests
              </p>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <FaUserShield size={24} />
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition duration-300">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Pending Requests
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                {
                  requests.filter(
                    (item) =>
                      item?.status === "pending" ||
                      !item?.status
                  ).length
                }
              </h2>

              <p className="text-sm text-yellow-500 mt-1">
                Waiting for review
              </p>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <FaClock size={24} />
            </div>
          </div>
        </div>

        {/* Approved */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition duration-300">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Approved Requests
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                {
                  requests.filter(
                    (item) =>
                      item?.status === "approved"
                  ).length
                }
              </h2>

              <p className="text-sm text-green-500 mt-1">
                Successfully approved
              </p>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
              <FaCheckCircle size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 py-5 border-b border-gray-100">

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Admin Request List
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Showing all admin access requests.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch />
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search by email..."
              className="w-full rounded-xl border border-gray-200 pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="min-w-full divide-y divide-gray-200">

            <thead className="bg-gray-50">
              <tr>

                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Email
                </th>

                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 bg-white">

              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <AdminRequestDataRow
                    key={req._id}
                    req={req}
                    refetch={refetch}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan="2"
                    className="text-center py-12 text-gray-500"
                  >
                    No admin request found.
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-5 border-t border-gray-100 bg-gray-50">

          <p className="text-sm text-gray-500">
            Showing {filteredRequests.length} requests
          </p>

          <button
            onClick={() => refetch()}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
          >
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAdmin;