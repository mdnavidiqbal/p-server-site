import { useQuery } from '@tanstack/react-query'
import { use } from 'react'
import { AuthContext } from '../../../provider/AuthProvider'
import useAxiosSecure from '../../../hooks/UseAxiosSecure'
import UserRegistrationDataRow from '../../../layouts/DashboardLayout/TableRow/UserRegistrationDataRow'
import Loading from '../../Loading/Loading'

const MyRegistration = () => {
  const {user} = use(AuthContext)
  const axiosSecure = useAxiosSecure()
  const { data: apply = [], isLoading } = useQuery({
    queryKey: ['apply', user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`Register`)
      return result.data.data
    },
  })
  console.log(apply)

  if (isLoading) return <Loading/>
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Image
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    {/* <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th> */}
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                     Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {apply.map(application => (
                    <UserRegistrationDataRow key={application._id} application={application}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyRegistration