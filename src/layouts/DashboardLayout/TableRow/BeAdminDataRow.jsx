// import React from "react";

// const  BeAdminDataRow = ({ register }) => {
//   const { photourl, name, email, role,action} = register || {};

//   return (
//       <tr>
//         {/* Image */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <div className="flex items-center">
//             <div className="shrink-0">
//               <div className="block relative">
//                 <img
//                   alt="profile"
//                   src={photourl}
//                   className="mx-auto object-cover rounded h-10 w-15"
//                 />
//               </div>
//             </div>
//           </div>
//         </td>

//         {/* Name */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <p className="text-gray-900">{name}</p>
//         </td>

//         {/* Email */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <p className="text-gray-900">{email}</p>
//         </td>
//         {/* Role */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <p className="text-gray-900">{role}</p>
//         </td>
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <p className="text-gray-900">{action}</p>
//         </td>
//       </tr>
//   );
// };

// export default  BeAdminDataRow;

// import React, { useState } from "react";

// const BeAdminDataRow = ({ register }) => {
//   const { photourl, name, email, role } = register || {};

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <tr>
//         {/* Image */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <img
//             alt="profile"
//             src={photourl}
//             className="mx-auto object-cover rounded h-10 w-15"
//           />
//         </td>

//         {/* Name */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           {name}
//         </td>

//         {/* Email */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           {email}
//         </td>

//         {/* Role */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           {role}
//         </td>

//         {/* Action Button */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <button
//             onClick={() => setIsOpen(true)}
//             className="bg-blue-500 text-white px-3 py-1 rounded"
//           >
//             Open Modal
//           </button>
//         </td>
//       </tr>

//       {/* 🔥 Updated Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

//           <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-white text-gray-800">

//             {/* Title */}
//             <h2 className="flex items-center gap-2 text-xl font-semibold">
//               ⚠️ {name}
//             </h2>

//             {/* Body */}
//             <p className="text-gray-600">
//               Email: {email}
//             </p>

//             <p className="text-gray-600">
//               Are you sure you want to perform this action?
//             </p>

//             {/* Buttons */}
//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="px-4 py-2 border rounded"
//               >
//                 No
//               </button>

//               <button
//                 onClick={() => {
//                   console.log("Action confirmed");
//                   setIsOpen(false);
//                 }}
//                 className="px-4 py-2 bg-pink-600 text-white rounded"
//               >
//                 Yes
//               </button>
//             </div>

//           </div>

//         </div>
//       )}
//     </>
//   );
// };

// export default BeAdminDataRow;

import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { toast } from "react-toastify";



const BeAdminDataRow = ({ register }) => {
  const { photourl, name, email, role } = register || {};
    const axiosSecure = useAxiosSecure()
  const [isOpen, setIsOpen] = useState(false);
  const handleRequest = async()=>{
    try{
        await axiosSecure.post('/become-admin')
        toast.success("Request sent,wait for admin response",{
            autoClose:4000,
        })
    }catch(err){
        console.log(err)
        toast.error(err?.response?.data?.message)
    }finally{
        setIsOpen(false)
    }
  }

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
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
          <div className="relative p-4 w-full max-w-2xl">
            <div className="bg-white rounded shadow p-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b pb-4">
                <h3 className="text-xl font-bold">
                  Do you want to be an admin? - {name}
                </h3>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded"
                >
                  ✖
                </button>
              </div>

              {/* Body */}
              <div className="py-5 space-y-4 text-gray-600">
                <h4 className="font-bold text-lg">Email: {email}</h4>

                <p>
                  A website admin ensures optimal site performance, security,
                  and functionality by managing content, troubleshooting
                  technical issues, and maintaining server uptime daily. They
                  are crucial for protecting data through backups, improving
                  user experience, and enforcing security protocols against
                  cyber threats.
                </p>

                <p>
                  If you want to change your role plz click the accpet button otherwise decline button
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 border-t pt-4">
                <button
                  onClick={handleRequest}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 text-white px-4 py-2 rounded"
                >
                  I accept
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="border px-4 py-2 rounded "
                >
                  Decline
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
