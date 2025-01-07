import React, { useContext,  useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import EquipmentCard from '../components/EquipmentCard';
import MyEquipmentCard from '../components/MyEquipmentCard';

const MyEquipments = () => {
    const data = useLoaderData()
  const [myEquipments, setMyEquipments] = useState(data)

    
    
    return (
        <div className='w-10/12 mx-auto mb-20'>
          <h1 className='text-3xl md:text-5xl text-[#7ABB2D] text-center mt-20 mb-20'>My Equipments</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
            {
                myEquipments.map(equipment=><MyEquipmentCard key={equipment._id} equipment={equipment} setMyEquipments={setMyEquipments} myEquipments={myEquipments}></MyEquipmentCard>)
            }
          </div>
        </div>
    );
};

export default MyEquipments;