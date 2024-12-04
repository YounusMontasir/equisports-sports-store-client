import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyEquipments = () => {
    const {user} = useContext(AuthContext)
    const {email} = user
    return (
        <div>
            my equipments
        </div>
    );
};

export default MyEquipments;