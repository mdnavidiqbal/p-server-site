// import { toast } from "react-toastify";
// import useAxiosSecure from "../../../hooks/UseAxiosSecure";

import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";

// // user er sthey   eita hobey
// const KabinRequestDataRow = ({ req,refetch }) => {
//     const axiosSecure = useAxiosSecure()
//   const handleRoleUpdate = async () => {
//     try {
//       await axiosSecure.patch("/kabin/:id",{
//         email: req?.email, role:'admin',});
//       toast.success("Role Updated", {
//         duration: 4000,
//       });
//       refetch()
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.response?.data?.message);
//     }
//   };
//   return (
//     <tr>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 ">{req?.email}</p>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <span onClick={handleRoleUpdate} className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
//           <span

//             aria-hidden="true"
//             className="absolute inset-0 bg-green-200 opacity-50 "
//           ></span>
//           <span  className="relative">Accept Request</span>
//         </span>
//       </td>
//     </tr>
//   );
// };

// export default KabinRequestDataRow;

const KabinRequestDataRow = ({ req, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleRoleUpdate = async () => {
    try {
      axiosSecure.patch("/update-kabin", {
        email: req.email,
        status: "approved", // or "rejected"
      });
      toast.success("Role Updated", {
        duration: 4000,
      });
      refetch();
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };

  console.log(req);
  return (
    <tr>
      {/* Email */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{req?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{req?.status}</p>
      </td>

      {/* Accept Button */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={handleRoleUpdate}
          className="cursor-pointer px-3 py-1 bg-green-200 rounded"
        >
          Accept
        </span>
      </td>

      {/* Reject Button */}
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => handleStatusUpdate("rejected")}
          className="cursor-pointer px-3 py-1 bg-red-200 rounded"
        >
          Reject
        </span>
      </td> */}
    </tr>
  );
};

export default KabinRequestDataRow;
