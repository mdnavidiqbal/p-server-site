import { useQuery } from "@tanstack/react-query";

import { use } from "react";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import KabinRequestDataRow from "../../../layouts/DashboardLayout/TableRow/KabinRequestDataRow";
import Loading from "../../Loading/Loading";

const ManageKabinReques = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  // const {
  //   data: kabin = [],
  //   isLoading,
  //   refetch
  // } = useQuery({
  //   queryKey: ["kabin-reques", user?.email],
  //   queryFn: async () => {
  //     const result = await axiosSecure.get(`/kabin`);
  //     return result.data;
  //   },
  // });
  const {
  data: kabin = [],
  isLoading,
  refetch
} = useQuery({
  queryKey: ["kabin-reques", user?.email],
  queryFn: async () => {
    const result = await axiosSecure.get(`/kabin?status=pending`); // 🔥 এখানে change
    return result.data;
  },
});
  console.log(kabin);

  if (isLoading) return <Loading />;
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {kabin.map((req) => (
                  <KabinRequestDataRow
                    key={req._id}
                    req={req}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageKabinReques;
