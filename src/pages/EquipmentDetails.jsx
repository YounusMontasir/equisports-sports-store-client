import React from 'react';

import { useLoaderData } from 'react-router-dom';

const EquipmentDetails = () => {
    const equipmentData = useLoaderData()
    const {name,photo,category,customization,price,rating,processing, stock, username, useremail,description} = equipmentData;
    
    
    return (
        <div>
           <p>{name}</p>
           <img src={photo} alt="" />
           
        </div>
    );
};

export default EquipmentDetails;