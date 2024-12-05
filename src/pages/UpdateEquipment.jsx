import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

import { AuthContext } from '../provider/AuthProvider';

const UpdateEquipment = () => {
    const  data = useLoaderData();
    const navigate = useNavigate()
    const {_id,name,photo,category,customization,price,rating,processing, stock, username, useremail,description} = data;
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
        
        fetch(`http://localhost:5000/equipmentupdate/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newEquipments)
        })
        .then(res => res.json())
        .then(data => console.log(data)
        )
        navigate(`/myequipments/${user?.email}`)

    }
    return (
        <div className='w-10/12 mx-auto mt-10'>
           <form onSubmit={handleForm}>
            {/* reow 1 */}
            <div className='flex gap-4'>
            <div className='form-control w-[50%]'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Type here" name="name" defaultValue={name} class="input input-bordered w-full" />
            </div>
            <div className='form-control w-[50%]'>
                <label htmlFor="">Photo URl</label>
                <input type="text" placeholder="Type here"  name="photo" defaultValue={photo} class="input input-bordered w-full" />
            </div>
            </div>
              {/* reow 2 */}
              <div className='flex gap-4'>
            <div className='form-control w-[50%]'>
                <label htmlFor="">Category</label>
                <select class="select select-secondary w-full" defaultValue={category} name='category'>
  <option disabled value="">Select Your Category</option>
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
            <div className='form-control w-[50%]'>
                <label htmlFor="">Customization</label>
                <input type="text" placeholder="Type here" defaultValue={customization}  name="customization" class="input input-bordered w-full" />
            </div>
            </div>
              {/* reow 3 */}
              <div className='flex gap-4'>
            <div className='form-control w-[50%]'>
                <label htmlFor="">Price</label>
                <input type="text" placeholder="Type here" defaultValue={price} name="price" class="input input-bordered w-full" />
            </div>
            <div className='form-control w-[50%]'>
                <label htmlFor="">Rating (1 to 5)</label>
                <input type="text" placeholder="Type here" defaultValue={rating}  name="rating" class="input input-bordered w-full" />
            </div>
            </div>
              {/* reow 1 */}
              <div className='flex gap-4'>
            <div className='form-control w-[50%]'>
                <label htmlFor="">Processing Time</label>
                <input type="text" placeholder="Type here" defaultValue={processing} name="processing" class="input input-bordered w-full" />
            </div>
            <div className='form-control w-[50%]'>
                <label htmlFor="">Stock Status</label>
                <input type="text" placeholder="Type here" defaultValue={stock}  name="stock" class="input input-bordered w-full" />
            </div>
            </div>
              {/* reow 5 */}
              <div className='flex gap-4'>
            <div className='form-control w-[50%]'>
                <label htmlFor="">User Name</label>
                <input type="text" placeholder="Type here" value={user?.displayName}  name="username" class="input input-bordered w-full" />
            </div>
            <div className='form-control w-[50%]'>
                <label htmlFor="">User Email</label>
                <input type="text" placeholder="Type here" value={user?.email}  name="useremail" class="input input-bordered w-full" />
            </div>
            </div>
              {/* reow 6 */}
              
            <div className=' w-full'>
                <label htmlFor="">Description</label>
            <textarea class="textarea textarea-primary" defaultValue={description} placeholder="Bio" name='description'></textarea>
            </div>
            <button className='btn w-full' type='submit'>Update Equipment</button>
            
           </form>
        </div>
    );
};

export default UpdateEquipment;