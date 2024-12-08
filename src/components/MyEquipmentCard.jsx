import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Swal from 'sweetalert2';

const MyEquipmentCard = ({equipment,setMyEquipments,myEquipments}) => {
    const {_id, name,photo,category,customization,price,rating,processing, stock, username, useremail,description} = equipment;


    const handleDelete =(id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`https://equisports-server-gules.vercel.app/equipmentdelete/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      const exist = myEquipments.filter(equip => equip._id !== id)
                      setMyEquipments(exist)
                }
                
                
            })
            
            }
          });
    }
    return (
        <div>
            <div class="card bg-base-100 border-2 border-[#7ABB2D]  p-6  ">
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
        <div className='space-x-2'>
          <Link to={`/equipmentupdate/${_id}`}><button className='btn btn-sm bg-[#7ABB2D] text-white font-bold'>Update</button></Link>
        <Link onClick={() => handleDelete(_id)}><button data-tooltip-id="my-tooltip" data-tooltip-content="Permanantly delete the Item" className='btn btn-sm bg-[#7ABB2D] text-white font-bold'>Delete</button></Link>
        <Tooltip id="my-tooltip" />
        </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default MyEquipmentCard;