import React, { useContext } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const AddEquipments = () => {
    const {user} = useContext(AuthContext)
    const handleForm = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const customization = form.customization.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing = form.processing.value;
        const stock = form.stock.value;
        const username = form.username.value;
        const useremail = form.useremail.value;
        const description = form.description.value;

        const newEquipments = {name,photo,category,customization,price,rating,processing, stock, username, useremail,description}
        
        fetch("http://localhost:5000/equipments", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newEquipments)
        })
        .then(res => res.json())
        .then(data => console.log(data)
        )
        
       

    }
    return (
        <div className='w-6/12 mx-auto mt-10  p-10 shadow-2xl mb-20'>
            <h1 className='mb-16 text-5xl  text-[#7ABB2D] text-center'>Add Equipments</h1>
           <form onSubmit={handleForm}>
            {/* reow 1 */}
            <div className='flex gap-4 mb-4'>
            <div className='form-control w-[50%]'>
                <label className='text-[#7ABB2D] font-bold mb-1' htmlFor="">Name</label>
                <input type="text" placeholder="Type here" name="name" class="input input-bordered w-full" />
            </div>
            <div className='form-control w-[50%]'>
                <label className='text-[#7ABB2D] font-bold mb-1' htmlFor="">Photo URl</label>
                <input type="text" placeholder="Type here"  name="photo" class="input input-bordered w-full" />
            </div>
            </div>
              {/* reow 2 */}
              <div className='flex gap-4 mb-4'>
            <div className='form-control w-[50%]'>
                <label className='text-[#7ABB2D] font-bold mb-1' htmlFor="">Category</label>
                <select class="select select-secondary w-full" name='category'>
  <option disabled selected>Select Your Category</option>
  <option>Cricket</option>
  <option>Football</option>
  <option>Basketball</option>
  <option>Hockey</option>
  <option>Badminton</option>
  <option>Volleyball</option>
  <option>Rugby</option>
  <option>Others</option>
</select>
            </div>
            <div className='form-control w-[50%] '>
                <label className='text-[#7ABB2D] font-bold mb-1' htmlFor="">Customization</label>
                <input type="text" placeholder="Type here"  name="customization" class="input input-bordered w-full" />
            </div>
            </div>
              {/* reow 3 */}
              <div className='flex gap-4 mb-4'>
            <div className='form-control w-[50%]'>
                <label className='text-[#7ABB2D] font-bold mb-1' htmlFor="">Price</label>
                <input type="text" placeholder="Type here"  name="price" class="input input-bordered w-full" />
            </div>
            <div className='form-control w-[50%]'>
                <label className='text-[#7ABB2D] font-bold mb-1' htmlFor="">Rating (1 to 5)</label>
                <input type="text" placeholder="Type here"  name="rating" class="input input-bordered w-full" />
            </div>
            </div>
              {/* reow 1 */}
              <div className='flex gap-4 mb-4'>
            <div className='form-control w-[50%]'>
                <label className='text-[#7ABB2D] font-bold mb-1' htmlFor="">Processing Time</label>
                <input type="text" placeholder="Type here"  name="processing" class="input input-bordered w-full" />
            </div>
            <div className='form-control w-[50%] '>
                <label className='text-[#7ABB2D] font-bold mb-1' htmlFor="">Stock Status</label>
                <input type="text" placeholder="Type here"  name="stock" class="input input-bordered w-full" />
            </div>
            </div>
              {/* reow 5 */}
              <div className='flex gap-4 mb-4'>
            <div className='form-control w-[50%]'>
                <label className='text-[#7ABB2D] font-bold mb-1' htmlFor="">User Name</label>
                <input type="text" placeholder="Type here" value={user?.displayName}  name="username" class="input input-bordered w-full" />
            </div>
            <div className='form-control w-[50%]'>
                <label className='text-[#7ABB2D] font-bold mb-1' htmlFor="">User Email</label>
                <input type="text" placeholder="Type here" value={user?.email}  name="useremail" class="input input-bordered w-full" />
            </div>
            </div>
              {/* reow 6 */}
              
            <div className=' w-full mb-4 form-control'>
                <label className='text-[#7ABB2D] font-bold mb-1' htmlFor="">Description</label>
            <textarea class="textarea textarea-primary" placeholder="Bio" name='description'></textarea>
            </div>
            <button className='btn w-full bg-[#7ABB2D] text-white font-bold' type='submit'>Add Equipment</button>
            
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
