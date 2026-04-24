import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
// import axios from "axios";

const SiteUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["siteusers"],
    queryFn: async () => {
      // const res = await axios.get("http://localhost:3000/Register");
      const res = await axiosSecure(`/Register`);
      return res.data.data;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <div className="ml-15 my-10 p-5 w-50 h-20 rounded-2xl bg-green-300">
        <div>
          <h1 className="text-center font-bold text-xl">Total Users</h1>
          <h1 className="text-center font-bold text-shadow-md">
            {users.length}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SiteUsers;
