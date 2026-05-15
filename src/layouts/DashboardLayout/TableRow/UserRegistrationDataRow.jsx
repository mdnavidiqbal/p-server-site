import { useState } from "react";
import DeleteModal from "../../../components/Modal/DeleteModal";

const UserRegistrationDataRow = ({ application }) => {
  const { photourl, name, email, role } = application || {};
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  // role badge style
  const getRoleStyle = (role) => {
    if (role === "admin")
      return "bg-emerald-100 text-emerald-700";
    if (role === "seller")
      return "bg-sky-100 text-sky-700";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <>
      <tr className="hover:bg-gray-50 transition duration-200 bg-cyan-600">

        {/* Avatar */}
        <td className="px-6 py-4">
          <img
            src={photourl}
            alt="profile"
            className="h-10 w-10 rounded-full object-cover border border-gray-200"
          />
        </td>

        {/* Name */}
        <td className="px-6 py-4 text-sm font-medium text-gray-800">
          {name}
        </td>

        {/* Email */}
        <td className="px-6 py-4 text-sm text-gray-600">
          {email}
        </td>

        {/* Role */}
        <td className="px-6 py-4">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${getRoleStyle(
              role
            )}`}
          >
            {role || "user"}
          </span>
        </td>

        {/* Action */}
        <td className="px-6 py-4">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 text-sm font-medium text-red-700 
            bg-red-100 rounded-lg hover:bg-red-200 transition duration-200"
          >
            Cancel
          </button>

          <DeleteModal isOpen={isOpen} closeModal={closeModal} />
        </td>

      </tr>
    </>
  );
};

export default UserRegistrationDataRow;