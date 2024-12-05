import React from 'react';
import { Link } from 'react-router-dom';
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
            
            fetch(`http://localhost:5000/equipmentdelete/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
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
        <Link to={`/equipmentupdate/${_id}`}><button className='btn btn-sm'>Update</button></Link>
        <Link onClick={() => handleDelete(_id)}><button className='btn btn-sm'>Delete</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default MyEquipmentCard;