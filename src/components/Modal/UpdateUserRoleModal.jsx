import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { useState } from "react";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import { toast } from "react-toastify";

const UpdateUserRoleModal = ({ isOpen, closeModal, user, refetch }) => {
    const [updatedRole, setUpdatedRole] = useState(user?.role)
    const axiosSecure = useAxiosSecure()
    const handleRoleUpdate = async ()=>{
        try{
            await axiosSecure.patch('update-role',{
                email: user.email,
                role: updatedRole
            })
            toast.success("User Role Update Sucessfully")
            refetch()
        } catch(err){
            console.log(err)
             toast.error(err?.response?.data?.message)
        }finally{
            closeModal();
        }
    }
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto bg-black/30 backdrop-blur-sm">
  <div className="flex min-h-full items-center justify-center p-4">
    <DialogPanel
      transition
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-gray-200 duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
    >
      {/* Header Section */}
      <div className="mb-6">
        <DialogTitle
          as="h3"
          className="text-xl font-bold text-gray-900 leading-tight"
        >
          Update User Account
        </DialogTitle>
        <p className="mt-2 text-sm text-gray-500">
          Assign a new administrative or standard role to this member.
        </p>
      </div>

      <form>
        {/* Input Field Label */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">
            Select Role
          </label>
          <select
            value={updatedRole}
            onChange={(e) => setUpdatedRole(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block p-3.5 outline-none transition-all duration-200"
            name="role"
          >
            <option value="user">System User</option>
            <option value="admin">System Administrator</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row-reverse gap-3 mt-8">
          <button
            onClick={handleRoleUpdate}
            type="button"
            className="w-full sm:w-auto cursor-pointer inline-flex justify-center items-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-100 transition-all active:scale-95"
          >
            Save Changes
          </button>
          
          <button
            type="button"
            onClick={closeModal}
            className="w-full sm:w-auto cursor-pointer inline-flex justify-center items-center rounded-xl bg-white border border-gray-200 px-6 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </DialogPanel>
  </div>
</div>
      </Dialog>
    </>
  );
};

export default UpdateUserRoleModal;
