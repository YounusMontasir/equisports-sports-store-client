import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipments = () => {
    const equipments = useLoaderData();
    return (
        <div className='w-10/12 mx-auto mt-20'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        equipments.map((equipment,idx)=><tr>
            <th>{idx+1}</th>
            <th>{equipment.name}</th>
            <td>{equipment.category}</td>
            <td>{equipment.price}</td>
            <td>{equipment.rating}</td>
            <td><Link to={`/equipmentdetails/${equipment._id}`}><button className='btn btn-sm'>Details</button></Link></td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllEquipments;