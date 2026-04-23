import React from 'react';
import AdminStatistics from '../../../layouts/Statistics/AdminStatistics';
import useRole from '../../../hooks/useRole';
import Loading from '../../Loading/Loading';
import UserStatistics from '../../../layouts/Statistics/UserStatistics';

const Statistics = () => {
    const [role,isRoleLoading] = useRole()
    if(isRoleLoading) return <Loading/>
    return (
        <div>
            {role === 'user' && <UserStatistics/>}
           {role === 'admin' &&  <AdminStatistics/>}
        </div>
    );
};

export default Statistics;