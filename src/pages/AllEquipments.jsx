import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipments = () => {
    const equipments = useLoaderData();
    return (
        <div className='w-full lg:w-10/12 mx-auto mt-16'>
          <h1 className='mb-12 text-5xl  text-[#7ABB2D] text-center'>All Equipments</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className=''>
      <tr className='bg-[#7ABB2D] text-white text-[16px] font-bold'>
        <th>#</th>
        <th>Name</th>
        <th className='hidden md:block'>Catefory</th>
        <th>Price</th>
        <th className='hidden md:block'>Stock</th>
        <th>Rating</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        equipments.map((equipment,idx)=><tr>
            <th>{idx+1}</th>
            <th>{equipment.name}</th>
            <td className='hidden md:block'>{equipment.category}</td>
            <td>{equipment.price}$</td>
            <td className='hidden md:block'>{equipment.stock}</td>
            <td >{equipment.rating}</td>
            <td><Link to={`/equipmentdetails/${equipment._id}`}><button className='btn btn-sm bg-[#7ABB2D] text-white font-semibold'>Details</button></Link></td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllEquipments;