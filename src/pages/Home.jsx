import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';

const Home = () => {
    const equipments = useLoaderData();
    const {name,photo,category,customization,price,rating,processing, stock, username, useremail,description} = equipments;
    
    return (
        <div>
            <div className='w-10/12 mx-auto grid grid-cols-3 gap-6'>
            {
                equipments.map(equipment=> <EquipmentCard key={equipment._id} equipment={equipment}></EquipmentCard>)
            }
            </div>
        </div>
    );
};

export default Home;