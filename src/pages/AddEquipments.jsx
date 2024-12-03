import React from 'react';
import { Form } from 'react-router-dom';


const AddEquipments = () => {
    return (
        <div className='w-10/12 mx-auto mt-10'>
           <form>
            <div>

            </div>
            <div className='form-control'>
                <label htmlFor="">Item Name</label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>
           </form>
        </div>
    );
};

export default AddEquipments;
// Image, 
// Item Name, 
// Category Name,
// Description, 
// Price, 
// Rating, 
// Customization (bat with extra grip, hit paper etc), 
// Processing Time (delivery time), 
// Stock Status (available product quantity), 
// User Email (logged-in user email, read-only), 
// User Name (logged-in user name, read-only).
