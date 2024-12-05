import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import EquipmentCard from '../components/EquipmentCard';
import MyEquipmentCard from '../components/MyEquipmentCard';

const MyEquipments = () => {
    const data = useLoaderData()
  const [myEquipments, setMyEquipments] = useState(data)
    
    return (
        <div className='w-10/12 mx-auto'>
          <h1 className='text-5xl text-center mt-20 mb-20'>My Equipments</h1>
          <div className='grid grid-cols-3 gap-6'>
            {
                myEquipments.map(equipment=><MyEquipmentCard key={equipment._id} equipment={equipment} setMyEquipments={setMyEquipments} myEquipments={myEquipments}></MyEquipmentCard>)
            }
          </div>
        </div>
    );
};

export default MyEquipments;