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

import {
  FaUserAlt,
  FaDollarSign,
  FaUserCheck,
  FaFileSignature,
} from "react-icons/fa";

import {
  BsFillCartPlusFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";

import {
  MdPendingActions,
  MdVerified,
} from "react-icons/md";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const chartData = [
  { name: "Jan", users: 40 },
  { name: "Feb", users: 60 },
  { name: "Mar", users: 90 },
  { name: "Apr", users: 75 },
  { name: "May", users: 110 },
  { name: "Jun", users: 140 },
];

const pieData = [
  { name: "Approved", value: 70 },
  { name: "Pending", value: 20 },
  { name: "Rejected", value: 10 },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const AdminStatistics = () => {
  return (
    <div className="mt-10 px-4 md:px-6 lg:px-8 bg-gray-50 min-h-screen">

      {/* Top Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Here’s your platform overview.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {/* Revenue */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                $12,500
              </h2>
              <p className="text-green-500 text-sm mt-1">
                +12% this month
              </p>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <FaDollarSign size={24} />
            </div>
          </div>
        </div>

        {/* Users */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                1,250
              </h2>
              <p className="text-blue-500 text-sm mt-1">
                +25 new today
              </p>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <FaUserAlt size={24} />
            </div>
          </div>
        </div>

        {/* Kabin Registrations */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Kabin Registrations
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                320
              </h2>
              <p className="text-pink-500 text-sm mt-1">
                +8 new requests
              </p>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
              <BsFillCartPlusFill size={24} />
            </div>
          </div>
        </div>

        {/* Approved */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Approved Kabin
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                280
              </h2>
              <p className="text-green-500 text-sm mt-1">
                95% success rate
              </p>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
              <MdVerified size={24} />
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Pending Requests
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                24
              </h2>
              <p className="text-yellow-500 text-sm mt-1">
                Need review
              </p>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <MdPendingActions size={24} />
            </div>
          </div>
        </div>

        {/* Staff */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Staff</p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                18
              </h2>
              <p className="text-indigo-500 text-sm mt-1">
                Active members
              </p>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <FaUserCheck size={24} />
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Branches</p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                5
              </h2>
              <p className="text-cyan-500 text-sm mt-1">
                Nationwide
              </p>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
              <BsFillHouseDoorFill size={24} />
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Documents Uploaded
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                1,890
              </h2>
              <p className="text-red-500 text-sm mt-1">
                Securely stored
              </p>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
              <FaFileSignature size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Bar Chart */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 xl:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-700">
              User Growth Overview
            </h3>

            <button className="px-4 py-2 rounded-lg bg-gray-100 text-sm hover:bg-gray-200 transition">
              Monthly
            </button>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            Request Status
          </h3>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={110}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Recent Activities
          </h3>

          <button className="text-sm text-blue-600 hover:underline">
            View All
          </button>
        </div>

        <div className="space-y-5">

          <div className="flex items-start justify-between border-b pb-4">
            <div>
              <h4 className="font-medium text-gray-800">
                New Kabin Registration Submitted
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                By Ahmed Rahman
              </p>
            </div>

            <span className="text-xs text-gray-400">
              2 min ago
            </span>
          </div>

          <div className="flex items-start justify-between border-b pb-4">
            <div>
              <h4 className="font-medium text-gray-800">
                User Account Verified
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                By Admin Team
              </p>
            </div>

            <span className="text-xs text-gray-400">
              10 min ago
            </span>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-medium text-gray-800">
                New Document Uploaded
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Marriage Certificate Added
              </p>
            </div>

            <span className="text-xs text-gray-400">
              1 hour ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStatistics;