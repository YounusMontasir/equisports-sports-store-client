import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({equipment}) => {
    const {name,photo,category,customization,price,rating,processing, stock, username, useremail,description} = equipment;
    return (
        <div>
            <div class="card bg-base-100 border-2 border-gray-200 p-6  ">
  <figure>
    <img className='h-72 object-cover w-full'
      src={photo}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <Link to={`/equipmentdetails/${equipment._id}`}><button  class="btn btn-sm">Details</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default EquipmentCard;