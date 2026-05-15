import React, { use } from "react";
import KabinStatusDataRow from "../../../layouts/DashboardLayout/TableRow/KabinStatusDataRow";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import Loading from "../../Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const MyKabinStatus = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: kabin = [], isLoading } = useQuery({
    queryKey: ["kabin", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const result = await axiosSecure.get(`kabin-approved`);
      return result.data.data;
    },
  });
  console.log(kabin);
  if (isLoading) return <Loading />;
  return (
    <>
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
                  {kabin.length === 0 ? (
                    <tr>
                      <td
                        colSpan="3"
                        className="text-center py-8 text-gray-500"
                      >
                        No data found
                      </td>
                    </tr>
                  ) : (
                    kabin.map((details) => (
                      <KabinStatusDataRow key={details._id} details={details} />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyKabinStatus;
