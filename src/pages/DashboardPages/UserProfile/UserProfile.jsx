import { use } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router";
import useRole from "../../../hooks/useRole";

const UserProfile = () => {
  const { user } = use(AuthContext);
  const [role,isRoleLoading] = useRole();
  console.log(role,isRoleLoading)
  console.log(user);
  return (
    <div>
      <div className="max-w-lg mx-auto bg-base-200 p-6 rounded-xl shadow-2xl text-center my-30 ">
        <h2 className="text-3xl font-bold mb-4">My Profile</h2>
        <img
          src={user?.photourl}
          alt="profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">{role}</h3>
        <h3 className="text-xl font-semibold">{user?.displayName}</h3>
        <p className="text-sm text-gray-600 pt-3">{user?.email}</p>
        <h4 className="text-sm pt-3">User ID:-{user?.uid}</h4>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to=""
            className="btn btn-primary bg-purple-500 hover:bg-purple-600"
          >
            Update Profile
          </Link>
          <Link
            to="/"
            className="btn btn-primary bg-purple-500 hover:bg-purple-600"
          >
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
