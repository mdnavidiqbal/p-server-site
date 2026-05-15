import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { toast } from "react-toastify";

const BeAdminDataRow = ({ register }) => {
  const { photourl, name, email, role } = register || {};
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const handleRequest = async () => {
    try {
      await axiosSecure.post("/become-admin");
      toast.success("Request sent,wait for admin response", {
        autoClose: 4000,
      });
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <>
      <tr>
        {/* Image */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <img
            alt="profile"
            src={photourl}
            className="mx-auto object-cover rounded h-10 w-15"
          />
        </td>

        {/* Name */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {name}
        </td>

        {/* Email */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {email}
        </td>

        {/* Role */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {role}
        </td>

        {/* Action Button */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white bg-blue-500 px-4 py-2 rounded"
          >
            Request
          </button>
        </td>
      </tr>

      {/* 🔥 Flowbite style modal (React version) */}
      {/* Professional Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          {/* Modal Box */}
          <div className="w-full max-w-lg mx-4 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Admin Role Request
                  </h3>
                  <p className="text-sm text-gray-500">
                    Confirm role upgrade request
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5 space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={photourl}
                    alt="profile"
                    className="w-12 h-12 rounded-full object-cover border"
                  />

                  <div>
                    <h4 className="font-medium text-gray-800">{name}</h4>
                    <p className="text-sm text-gray-500">{email}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-600 leading-relaxed">
                  <p>
                    You are requesting to upgrade your account to <b>Admin</b>.
                    Admins can manage users, content, and system settings.
                    Please confirm you understand the responsibilities before
                    proceeding.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t flex justify-end gap-3 bg-gray-50">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleRequest}
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:opacity-90 transition shadow-md"
                >
                  Confirm Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BeAdminDataRow;
