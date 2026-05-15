import { useState } from 'react'
import UpdateUserRoleModal from '../../../components/Modal/UpdateUserRoleModal'

const UserDataRow = ({ user, refetch }) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)

  // role badge color
  const getRoleStyle = (role) => {
    if (role === 'admin') return 'bg-green-100 text-green-700'
    if (role === 'moderator') return 'bg-blue-100 text-blue-700'
    return 'bg-gray-100 text-gray-600'
  }

  return (
    <>
      <tr className="hover:bg-gray-50 transition duration-200 bg-red-300">
        
        {/* Email */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
          {user?.email}
        </td>

        {/* Name */}
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
          {user?.name}
        </td>

        {/* Role */}
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getRoleStyle(user?.role)}`}>
            {user?.role || 'user'}
          </span>
        </td>

        {/* Action */}
        <td className="px-6 py-4 whitespace-nowrap text-sm">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Update Role
          </button>
        </td>

      </tr>

      {/* Modal */}
      <UpdateUserRoleModal
        user={user}
        refetch={refetch}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  )
}

export default UserDataRow