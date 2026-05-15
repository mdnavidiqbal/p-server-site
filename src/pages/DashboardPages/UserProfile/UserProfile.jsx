import { use } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router";
import useRole from "../../../hooks/useRole";
import Loading from "../../Loading/Loading";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserProfile = () => {
  const { user } = use(AuthContext);
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();
  const { data: register = [], isLoading } = useQuery({
    queryKey: ["register", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const result = await axiosSecure.get(`Register/${user.email}`);
      return result.data.data;
    },
  });

  if (isLoading) return <Loading />;
  console.log(register);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white border border-gray-100 rounded-2xl shadow-lg p-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

        {/* Profile Image */}
        <div className="flex flex-col items-center text-center">
          <img
            src={register?.photourl || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
          />

          {/* Name */}
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {register?.name || user?.name}
          </h2>

          {/* Role badge */}
          <span className="mt-2 px-4 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700">
            {role || "user"}
          </span>

          {/* Email */}
          <p className="mt-3 text-gray-600 text-sm">{user?.email}</p>

          {/* UID */}
          <p className="mt-1 text-xs text-gray-400 break-all">
            ID: {user?.uid}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
           to="/underconstruction"
            className="px-5 py-2 text-sm font-medium rounded-lg 
            bg-gradient-to-r from-purple-500 to-indigo-500 
            text-white hover:opacity-90 transition"
          >
            Update Profile
          </Link>

          <Link
            to="/underconstruction"
            className="px-5 py-2 text-sm font-medium rounded-lg 
            border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
          >
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
