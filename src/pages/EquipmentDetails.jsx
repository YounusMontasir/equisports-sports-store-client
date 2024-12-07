import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'


const EquipmentDetails = () => {
    const equipmentData = useLoaderData();
    const { name, photo, category, customization, price, rating, processing, stock, username, useremail, description } = equipmentData;

    return (
        <div className="p-6 space-y-4">

            <div className='flex felx-col md:flex-row'>
           <div className='w-1/2'>
           <img src={photo} alt={name} className="w-full rounded-lg shadow-md" />
           </div>
            
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">{name}</h1>
               
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Rating:</strong> {rating} ⭐</p>
                <p><strong>Stock:</strong> {stock ? 'In Stock' : 'Out of Stock'}</p>
                <p><strong>Customization:</strong> {customization ? 'Available' : 'Not Available'}</p>
                <p><strong>Uploaded By:</strong> {username} ({useremail})</p>
                <p><strong>Description:</strong> {description}</p>
            </div>
            </div>
            <div>
            <button 
                data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!"
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Hover me
            </button>
            
            <Tooltip id="my-tooltip" />
        </div>
        </div>
    );
};

export default EquipmentDetails;
