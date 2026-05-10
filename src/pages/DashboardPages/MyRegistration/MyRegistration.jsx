// import { useQuery } from '@tanstack/react-query'
// import { use } from 'react'
// import { AuthContext } from '../../../provider/AuthProvider'
// import useAxiosSecure from '../../../hooks/UseAxiosSecure'
// import UserRegistrationDataRow from '../../../layouts/DashboardLayout/TableRow/UserRegistrationDataRow'
// import Loading from '../../Loading/Loading'

// const MyRegistration = () => {
//   const {user} = use(AuthContext)
//   const axiosSecure = useAxiosSecure()
//   const { data: apply = [], isLoading } = useQuery({
//     queryKey: ['apply', user?.email],
//     queryFn: async () => {
//       const result = await axiosSecure(`Register`)
//       return result.data.data
//     },
//   })
//   console.log(apply)

//   if (isLoading) return <Loading/>
//   return (
//     <>
//       <div className='container mx-auto px-4 sm:px-8'>
//         <div className='py-8'>
//           <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
//             <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
//               <table className='min-w-full leading-normal'>
//                 <thead>
//                   <tr>
//                     <th
//                       scope='col'
//                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
//                     >
//                       Image
//                     </th>
//                     <th
//                       scope='col'
//                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
//                     >
//                       Name
//                     </th>
//                     <th
//                       scope='col'
//                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
//                     >
//                       Email
//                     </th>
//                     <th
//                       scope='col'
//                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
//                     >
//                       Role
//                     </th>
//                     {/* <th
//                       scope='col'
//                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
//                     >
//                       Status
//                     </th> */}
//                     <th
//                       scope='col'
//                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
//                     >
//                      Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {apply.map(application => (
//                     <UserRegistrationDataRow key={application._id} application={application}/>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default MyRegistration

import { useQuery } from '@tanstack/react-query'
import { use } from 'react'
import { AuthContext } from '../../../provider/AuthProvider'
import useAxiosSecure from '../../../hooks/UseAxiosSecure'
import UserRegistrationDataRow from '../../../layouts/DashboardLayout/TableRow/UserRegistrationDataRow'
import Loading from '../../Loading/Loading'

import {
  FaClipboardList,
  FaCheckCircle,
  FaClock,
} from 'react-icons/fa'

const MyRegistration = () => {
  const { user } = use(AuthContext)
  const axiosSecure = useAxiosSecure()

  const { data: apply = [], isLoading } = useQuery({
    queryKey: ['apply', user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`Register`)
      return result.data.data
    },
  })

  if (isLoading) return <Loading />

  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-6'>

      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-800'>
          My Registrations
        </h1>

        <p className='text-gray-500 mt-2'>
          Manage and monitor all your submitted registrations.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>

        {/* Total Registration */}
        <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition duration-300'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>
                Total Registrations
              </p>

              <h2 className='text-3xl font-bold text-gray-800 mt-2'>
                {apply.length}
              </h2>

              <p className='text-sm text-blue-500 mt-1'>
                All submitted applications
              </p>
            </div>

            <div className='h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center'>
              <FaClipboardList size={24} />
            </div>
          </div>
        </div>

        {/* Approved */}
        <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition duration-300'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>
                Approved
              </p>

              <h2 className='text-3xl font-bold text-gray-800 mt-2'>
                {
                  apply.filter(
                    item => item?.status === 'approved'
                  ).length
                }
              </h2>

              <p className='text-sm text-green-500 mt-1'>
                Successfully approved
              </p>
            </div>

            <div className='h-14 w-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center'>
              <FaCheckCircle size={24} />
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition duration-300'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>
                Pending Review
              </p>

              <h2 className='text-3xl font-bold text-gray-800 mt-2'>
                {
                  apply.filter(
                    item =>
                      item?.status === 'pending' ||
                      !item?.status
                  ).length
                }
              </h2>

              <p className='text-sm text-yellow-500 mt-1'>
                Waiting for approval
              </p>
            </div>

            <div className='h-14 w-14 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center'>
              <FaClock size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className='bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden'>

        {/* Table Header */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 py-5 border-b border-gray-100'>

          <div>
            <h2 className='text-xl font-semibold text-gray-800'>
              Registration List
            </h2>

            <p className='text-sm text-gray-500 mt-1'>
              Showing all submitted registrations.
            </p>
          </div>

          {/* Search */}
          <div className='w-full md:w-72'>
            <input
              type='text'
              placeholder='Search registration...'
              className='w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        {/* Table */}
        <div className='overflow-x-auto'>

          <table className='min-w-full divide-y divide-gray-200'>

            <thead className='bg-gray-50'>
              <tr>

                <th
                  scope='col'
                  className='px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500'
                >
                  Image
                </th>

                <th
                  scope='col'
                  className='px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500'
                >
                  Name
                </th>

                <th
                  scope='col'
                  className='px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500'
                >
                  Email
                </th>

                <th
                  scope='col'
                  className='px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500'
                >
                  Role
                </th>

                <th
                  scope='col'
                  className='px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500'
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-100 bg-white'>

              {apply.length > 0 ? (
                apply.map(application => (
                  <UserRegistrationDataRow
                    key={application._id}
                    application={application}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan='5'
                    className='text-center py-12 text-gray-500'
                  >
                    No registration data found.
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-5 border-t border-gray-100 bg-gray-50'>

          <p className='text-sm text-gray-500'>
            Total Registrations: {apply.length}
          </p>

          <div className='flex items-center gap-2'>

            <button className='px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm hover:bg-gray-100 transition'>
              Previous
            </button>

            <button className='px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition'>
              1
            </button>

            <button className='px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm hover:bg-gray-100 transition'>
              Next
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MyRegistration