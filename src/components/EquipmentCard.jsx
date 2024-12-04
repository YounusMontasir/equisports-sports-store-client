import React from 'react';

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
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default EquipmentCard;