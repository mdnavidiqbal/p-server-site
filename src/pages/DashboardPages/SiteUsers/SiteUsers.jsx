// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/UseAxiosSecure";
// // import axios from "axios";

// const SiteUsers = () => {
//   const axiosSecure = useAxiosSecure();
//   const {
//     data: users = [],
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["siteusers"],
//     queryFn: async () => {
//       // const res = await axios.get("http://localhost:3000/Register");
//       const res = await axiosSecure(`/Register`);
//       return res.data.data;
//     },
//   });
//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

//   return (
//     <div>
//       <div className="ml-15 my-10 p-5 w-50 h-20 rounded-2xl bg-green-300">
//         <div>
//           <h1 className="text-center font-bold text-xl">Total Users</h1>
//           <h1 className="text-center font-bold text-shadow-md">
//             {users.length}
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SiteUsers;

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/UseAxiosSecure";
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const SiteUsers = () => {
//   const axiosSecure = useAxiosSecure();

//   const {
//     data: users = [],
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["siteusers"],
//     queryFn: async () => {
//       const res = await axiosSecure(`/Register`);
//       return res.data.data;
//     },
//   });

//   if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   if (error) return <div className="text-red-500 text-center mt-10">Error loading data!</div>;

//   const roleDataObj = users.reduce((acc, user) => {
//     const role = user.role || "User";
//     acc[role] = (acc[role] || 0) + 1;
//     return acc;
//   }, {});

//   const chartData = Object.keys(roleDataObj).map((role) => ({
//     name: role,
//     value: roleDataObj[role],
//   }));

//   // Blue for User, Green for Admin
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-extrabold mb-8 text-gray-800">User Analytics</h2>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
//           {/* Total Users Card */}
//           <div className="bg-white p-8 shadow-xl rounded-3xl flex flex-col items-center justify-center border-t-8 border-blue-500">
//             <h3 className="text-gray-400 text-sm uppercase font-bold">Total Users</h3>
//             <p className="text-6xl font-black text-gray-800">{users.length}</p>
//           </div>

//           {/* Role Based Pie Chart */}
//           <div className="lg:col-span-2 bg-white p-6 shadow-xl rounded-3xl h-[350px]">
//             <h3 className="text-center font-bold text-gray-700 mb-2">Role Distribution</h3>
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={chartData}
//                   cx="40%" // Chart-ke bame sorano hoyeche jate Legend-er jayga hoy
//                   cy="50%"
//                   innerRadius={60}
//                   outerRadius={100}
//                   paddingAngle={5}
//                   dataKey="value"
//                   label={({ name }) => name}
//                 >
//                   {chartData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 {/* Legend-ke vertical kore upore/dane neya hoyeche */}
//                 <Legend 
//                   verticalAlign="middle" 
//                   align="right" 
//                   layout="vertical"
//                   wrapperStyle={{ paddingBottom: "40px" }}
//                 />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* User Table */}
//         <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
//           <table className="w-full text-left">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-4 font-bold text-gray-600">Name</th>
//                 <th className="p-4 font-bold text-gray-600">Email</th>
//                 <th className="p-4 font-bold text-gray-600">Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user._id} className="border-b hover:bg-gray-50">
//                   <td className="p-4 font-medium">{user.name}</td>
//                   <td className="p-4 text-gray-600">{user.email}</td>
//                   <td className="p-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-bold ${
//                       user.role === 'admin' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
//                     }`}>
//                       {user.role || 'User'}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SiteUsers;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Users, ShieldCheck, Mail, Search } from "lucide-react"; // install lucide-react or use any icons

const SiteUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["siteusers"],
    queryFn: async () => {
      const res = await axiosSecure(`/Register`);
      return res.data.data;
    },
  });

  if (isLoading) return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-emerald-600 border-opacity-50"></div>
      <p className="text-emerald-600 font-semibold animate-pulse">Analyzing User Data...</p>
    </div>
  );
  
  if (error) return <div className="text-red-500 text-center mt-10 font-bold">Failed to sync with server. Please try again.</div>;

  const roleDataObj = users.reduce((acc, user) => {
    const role = user.role || "User";
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(roleDataObj).map((role) => ({
    name: role.charAt(0).toUpperCase() + role.slice(1),
    value: roleDataObj[role],
  }));

  // Professional Emerald & Slate color palette
  const COLORS = ["#10b981", "#334155", "#6366f1", "#f59e0b"];

  return (
    <div className="p-6 md:p-10 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">System Users</h2>
            <p className="text-slate-500 font-medium mt-1">Manage roles and monitor user distribution</p>
          </div>
          
          <div className="relative w-full md:w-72 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all bg-white"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Stats Card */}
          <div className="lg:col-span-1 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] flex flex-col items-center justify-center border border-slate-100 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform">
                <Users size={80} className="text-emerald-600" />
             </div>
            <h3 className="text-slate-400 text-xs uppercase font-black tracking-widest mb-2">Total Users</h3>
            <p className="text-7xl font-black text-slate-800 leading-none tracking-tighter">
                {users.length}
            </p>
            <div className="mt-4 px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase">
                Active Database
            </div>
          </div>

          {/* Chart Card */}
          <div className="lg:col-span-3 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] border border-slate-100 min-h-[350px]">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-700 text-lg">Role Insights</h3>
                <div className="flex gap-2">
                    {chartData.map((d, i) => (
                        <div key={i} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-50 border border-slate-100">
                            <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[i % COLORS.length]}}></div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase">{d.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                    >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                </PieChart>
                </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* User Table Card */}
        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] border border-slate-100 overflow-hidden">
          {/* <div className="p-6 border-b border-slate-50 bg-slate-50/30 flex justify-between items-center">
            <h3 className="font-bold text-slate-700">Detailed Directory</h3>
            <button className="text-emerald-600 font-bold text-xs hover:underline underline-offset-4">Export CSV</button>
          </div> */}
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                <tr className="text-slate-400 text-[11px] uppercase tracking-wider font-black">
                    <th className="px-8 py-5">Full Name</th>
                    <th className="px-8 py-5">Email Address</th>
                    <th className="px-8 py-5">Security Status</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                {users.map((user) => (
                    <tr key={user._id} className="group hover:bg-emerald-50/30 transition-colors">
                    <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                                {user.name?.charAt(0) || 'U'}
                            </div>
                            <span className="font-bold text-slate-700">{user.name}</span>
                        </div>
                    </td>
                    <td className="px-8 py-5">
                        <div className="flex items-center gap-2 text-slate-500 font-medium italic">
                            <Mail size={14} className="text-slate-300" />
                            {user.email}
                        </div>
                    </td>
                    <td className="px-8 py-5">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase ring-1 ring-inset ${
                        user.role === 'admin' 
                            ? 'bg-slate-900 text-white ring-slate-900' 
                            : 'bg-white text-emerald-600 ring-emerald-100 shadow-sm'
                        }`}>
                        {user.role === 'admin' && <ShieldCheck size={12} />}
                        {user.role || 'User'}
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteUsers;