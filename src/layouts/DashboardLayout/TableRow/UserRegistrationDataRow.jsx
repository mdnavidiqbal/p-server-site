const UserRegistrationDataRow = ({ application }) => {
  const { photourl, name, email, role, status } = application || {};

  return (
    <tr>
      {/* Image */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={photourl}
                className="mx-auto object-cover rounded h-10 w-15"
              />
            </div>
          </div>
        </div>
      </td>

      {/* Name */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{name}</p>
      </td>

      {/* Email */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{email}</p>
      </td>

      {/* Phone */}
      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{phone}</p>
      </td> */}

      {/* Role */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{role}</p>
      </td>

      {/* Status */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{status}</p>
      </td>

      {/* Action */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
    </tr>
  );
};

export default UserRegistrationDataRow;
