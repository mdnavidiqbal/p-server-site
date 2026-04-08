import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyProfile = () => {
    const {user} = use(AuthContext)
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default MyProfile;