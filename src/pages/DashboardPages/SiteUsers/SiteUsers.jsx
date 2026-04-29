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

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">Error loading data!</div>;

  const roleDataObj = users.reduce((acc, user) => {
    const role = user.role || "User";
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(roleDataObj).map((role) => ({
    name: role,
    value: roleDataObj[role],
  }));

  // Blue for User, Green for Admin
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800">User Analytics</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Total Users Card */}
          <div className="bg-white p-8 shadow-xl rounded-3xl flex flex-col items-center justify-center border-t-8 border-blue-500">
            <h3 className="text-gray-400 text-sm uppercase font-bold">Total Users</h3>
            <p className="text-6xl font-black text-gray-800">{users.length}</p>
          </div>

          {/* Role Based Pie Chart */}
          <div className="lg:col-span-2 bg-white p-6 shadow-xl rounded-3xl h-[350px]">
            <h3 className="text-center font-bold text-gray-700 mb-2">Role Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="40%" // Chart-ke bame sorano hoyeche jate Legend-er jayga hoy
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name }) => name}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                {/* Legend-ke vertical kore upore/dane neya hoyeche */}
                <Legend 
                  verticalAlign="middle" 
                  align="right" 
                  layout="vertical"
                  wrapperStyle={{ paddingBottom: "40px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 font-bold text-gray-600">Name</th>
                <th className="p-4 font-bold text-gray-600">Email</th>
                <th className="p-4 font-bold text-gray-600">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4 text-gray-600">{user.email}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      user.role === 'admin' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {user.role || 'User'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SiteUsers;