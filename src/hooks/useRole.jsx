
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";

const useRole = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    data: role,
    isLoading: isRoleLoading,
    error,
  } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["role", user?.email],
    retry: false, // 🔥 important (no infinite retry)
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/Register/role/${user.email}`
      );
      return data?.role;
    },
  });

  // 🔍 debug (optional)
  // console.log(role, isRoleLoading, error);

  return [role, isRoleLoading, error];
};

export default useRole;