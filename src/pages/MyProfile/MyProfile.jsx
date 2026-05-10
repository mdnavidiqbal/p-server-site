import React, { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

const MyProfile = () => {
  const { user } = use(AuthContext);
  console.log(user)
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
  
 
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-4 bg-gradient-to-r from-[#1c92d2] to-[#f2fcfe]">
      <div className="max-w-lg mx-auto bg-base-200 p-6 rounded-xl shadow-2xl text-center my-30 ">
        <h2 className="text-3xl font-bold mb-4">My Profile</h2>
        <img
          src={register?.photourl}
          alt="profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">{register?.name}</h3>
        <p className="text-sm text-gray-600">{register?.email}</p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/kabinnama"
            className="btn btn-primary bg-purple-500 hover:bg-purple-600"
          >
            Apply Registration
          </Link>
          <Link
            to="/createbiodata"
            className="btn btn-primary bg-purple-500 hover:bg-purple-600"
          >
            Create Bio-Data
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
