// import { FaUserAlt, FaDollarSign } from 'react-icons/fa'
// import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'

// const AdminStatistics = () => {
//   return (
//     <div>
//       <div className='mt-12'>
//         {/* small cards */}
//         <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grow'>
//           {/* Sales Card */}
//           <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
//             <div
//               className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
//             >
//               <FaDollarSign className='w-6 h-6 text-white' />
//             </div>
//             <div className='p-4 text-right'>
//               <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
//                 Total Revenue
//               </p>
//               <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
//                 $120
//               </h4>
//             </div>
//           </div>
//           {/* Total Orders */}
//           <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
//             <div
//               className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
//             >
//               <BsFillCartPlusFill className='w-6 h-6 text-white' />
//             </div>
//             <div className='p-4 text-right'>
//               <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
//                 Total Orders
//               </p>
//               <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
//                 120
//               </h4>
//             </div>
//           </div>
//           {/* Total Plants */}
//           <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
//             <div
//               className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
//             >
//               <BsFillHouseDoorFill className='w-6 h-6 text-white' />
//             </div>
//             <div className='p-4 text-right'>
//               <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
//                 Total Plants
//               </p>
//               <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
//                 120
//               </h4>
//             </div>
//           </div>
//           {/* Users Card */}
//           <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
//             <div
//               className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
//             >
//               <FaUserAlt className='w-6 h-6 text-white' />
//             </div>
//             <div className='p-4 text-right'>
//               <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
//                 Total User
//               </p>
//               <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
//                 10
//               </h4>
//             </div>
//           </div>
//         </div>

//         <div className='mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
//           {/*Sales Bar Chart */}
//           <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2'>
//             {/* Chart goes here.. */}
//           </div>
//           {/* Calender */}
//           <div className=' relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden'>
//             {/* Calender */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AdminStatistics

import { FaUserAlt, FaDollarSign } from 'react-icons/fa'
import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'

const AdminStatistics = () => {
  return (
    <div className='mt-12 px-4'>
      {/* Cards */}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        
        {/* Card */}
        <div className='bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>Total Users</p>
              <h2 className='text-2xl font-bold text-gray-800 mt-1'>$120</h2>
            </div>
            <div className='h-12 w-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600'>
              <FaDollarSign size={20} />
            </div>
          </div>
        </div>

        {/* Card */}
        <div className='bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>Total Register for Kabin</p>
              <h2 className='text-2xl font-bold text-gray-800 mt-1'>120</h2>
            </div>
            <div className='h-12 w-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600'>
              <BsFillCartPlusFill size={20} />
            </div>
          </div>
        </div>

        {/* Card */}
        <div className='bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'></p>
              <h2 className='text-2xl font-bold text-gray-800 mt-1'>120</h2>
            </div>
            <div className='h-12 w-12 flex items-center justify-center rounded-xl bg-pink-100 text-pink-600'>
              <BsFillHouseDoorFill size={20} />
            </div>
          </div>
        </div>

        {/* Card */}
        <div className='bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>Total Users</p>
              <h2 className='text-2xl font-bold text-gray-800 mt-1'>10</h2>
            </div>
            <div className='h-12 w-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600'>
              <FaUserAlt size={20} />
            </div>
          </div>
        </div>

      </div>

      {/* নিচের section */}
      <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
        
        {/* Chart */}
        <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-5 xl:col-span-2'>
          <h3 className='text-lg font-semibold text-gray-700 mb-4'>Sales Overview</h3>
          {/* chart here */}
        </div>

        {/* Calendar */}
        <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-5'>
          <h3 className='text-lg font-semibold text-gray-700 mb-4'>Calendar</h3>
          {/* calendar here */}
        </div>

      </div>
    </div>
  )
}

export default AdminStatistics