import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
const KabinRequestDataRow = ({ req, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleRoleUpdate = async () => {
    try {
      await axiosSecure.patch("/update-kabin", {
        email: req.email,
        status: "approved", // or "rejected"
      });

      toast.success("Status Updated", {
        duration: 1000,
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
    </tr>
  );
};

export default KabinRequestDataRow;
