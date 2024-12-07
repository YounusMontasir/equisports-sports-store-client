import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';



const EquipmentDetails = () => {
    const equipmentData = useLoaderData();
    const { name, photo, category, customization, price, rating, processing, stock, username, useremail, description } = equipmentData;

    return (
        <div className="p-6 space-y-4">
            <Navbar></Navbar>
            <div className='flex flex-col lg:flex-row gap-10 w-10/12 mx-auto '>
           <div className='w-full lg:w-1/2'>
           <img src={photo} alt={name} className="w-full rounded-lg shadow-md" />
           </div>
            
            <div className="space-y-4">
                <h1 className="text-2xl font-bold text-[#7ABB2D] pt-10">{name}</h1>
               
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Rating:</strong> {rating} ⭐</p>
                <p><strong>Stock:</strong> {stock ? 'In Stock' : 'Out of Stock'}</p>
                <p><strong>Customization:</strong> {customization ? 'Available' : 'Not Available'}</p>
                <p><strong>Uploaded By:</strong> {username} </p>
                <p><strong>Description:</strong> {description}</p>
                <button className='btn bg-[#7ABB2D] text-white font-bold'>Add to Cart</button>
            </div>
            </div>
        
        </div>
    );
};

export default EquipmentDetails;
