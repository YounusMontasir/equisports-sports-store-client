import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({equipment}) => {
    const {name,photo,category,customization,price,rating,processing, stock, username, useremail,description} = equipment;
    return (
        <div>
            <div class="card bg-base-100 border-2 border-[#7ABB2D] p-6  ">
  <figure>
    <img className='h-56 object-cover w-full'
      src={photo}
      alt="" />
  </figure>
  <div class="">
    <h2 class="text-2xl font-semibold text-[#7ABB2D] mt-4">{name}</h2>
    <p className='mt-3'>{description}</p>
    <div class="flex justify-between mt-4">
      <p><span className='font-bold'>Price:</span> {price}$</p>
      <Link to={`/equipmentdetails/${equipment._id}`}><button  class="btn btn-sm bg-[#7ABB2D] text-white">Details</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default EquipmentCard;