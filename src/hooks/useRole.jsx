import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";


const useRole = () => {
  const { user, loading } = use(AuthContext)
  const axiosSecure = useAxiosSecure()
  const { data: role, isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["role",user?.email],
    queryFn: async () => {
    //   const {data} = await axios.get(`http://localhost:3000/Register/role/${user?.email}`)
    const {data} = await axiosSecure(`/Register/role/${user?.email}`)
      return data.role;
    },
  });
  return [role, isRoleLoading];
};

export default useRole;
