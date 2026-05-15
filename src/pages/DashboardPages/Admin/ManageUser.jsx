import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { use, useState } from 'react'
import { AuthContext } from '../../../provider/AuthProvider'
import Loading from '../../Loading/Loading'
import UserDataRow from '../../../layouts/DashboardLayout/TableRow/UserDataRow'

import {
  FaUsers,
  FaUserCheck,
  FaUserShield,
} from 'react-icons/fa'

const ManageUser = () => {
  const { user } = use(AuthContext)
  const axiosSecure = useAxiosSecure()

  // search state
  const [search, setSearch] = useState('')

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`Register`)
      return result.data.data
    },
  })

  // filter users by email
  const filteredUsers = users.filter(item =>
    item?.email
      ?.toLowerCase()
      .includes(search.toLowerCase())
  )

  if (isLoading) return <Loading />

  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-6'>

      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-800'>
          Manage Users
        </h1>

        <p className='text-gray-500 mt-2'>
          Manage all registered users, roles and permissions.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>

        <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>
                Total Users
              </p>

              <h2 className='text-3xl font-bold text-gray-800 mt-2'>
                {users.length}
              </h2>
            </div>

            <div className='h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center'>
              <FaUsers size={24} />
            </div>
          </div>
        </div>

        <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>
                Active Users
              </p>

              <h2 className='text-3xl font-bold text-gray-800 mt-2'>
                {users.length}
              </h2>
            </div>

            <div className='h-14 w-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center'>
              <FaUserCheck size={24} />
            </div>
          </div>
        </div>

        <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>
                Admin Members
              </p>

              <h2 className='text-3xl font-bold text-gray-800 mt-2'>
                {
                  users.filter(item => item.role === 'admin')
                    .length
                }
              </h2>
            </div>

            <div className='h-14 w-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center'>
              <FaUserShield size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className='bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden'>

        {/* Top Section */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 py-5 border-b border-gray-100'>

          <div>
            <h2 className='text-xl font-semibold text-gray-800'>
              User List
            </h2>

            <p className='text-sm text-gray-500 mt-1'>
              Total {filteredUsers.length} users found.
            </p>
          </div>

          {/* Search */}
          <div className='w-full md:w-80'>
            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search by email...'
              className='w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        {/* Table */}
        <div className='overflow-x-auto'>

          <table className='min-w-full divide-y divide-gray-200'>

            <thead className='bg-gray-50'>
              <tr>

                <th className='px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>
                  Email
                </th>

                <th className='px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>
                  Name
                </th>

                <th className='px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>
                  Role
                </th>

                <th className='px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>
                  Action
                </th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-100 bg-white'>

              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <UserDataRow
                    refetch={refetch}
                    key={user?._id}
                    user={user}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan='4'
                    className='text-center py-10 text-gray-500'
                  >
                    No user found!
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className='flex items-center justify-between px-6 py-5 border-t border-gray-100 bg-gray-50'>

          <p className='text-sm text-gray-500'>
            Showing {filteredUsers.length} users
          </p>

          <button className='px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition'>
            Refresh
          </button>
        </div>
      </div>
    </div>
  )
}

export default ManageUser