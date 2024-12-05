import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import EquipmentCard from '../components/EquipmentCard';

const MyEquipments = () => {
    const myEquipments = useLoaderData()
    console.log(myEquipments);
    
    return (
        <div className='w-10/12 mx-auto'>
          <h1 className='text-5xl text-center mt-20 mb-20'>My Equipments</h1>
          <div className='grid grid-cols-3 gap-6'>
            {
                myEquipments.map(equipment=><EquipmentCard key={equipment._id} equipment={equipment}></EquipmentCard>)
            }
          </div>
        </div>
    );
};

export default MyEquipments;