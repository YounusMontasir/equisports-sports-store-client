import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext)
  console.log(user);

  
  

  
    const items = (
        <>
        <NavLink to="/"><li className='mr-3'>Home</li></NavLink>
        <NavLink to="allequipments"><li className='mr-3'>All Equipments</li></NavLink>
        <NavLink to="addequipments"><li className='mr-3'>Add Equipment</li></NavLink>
        <NavLink to="myequipments"><li className='mr-3'>My Equipment</li></NavLink>
        </>
    )
    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul 
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
        {items}
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
     {items}
    </ul>
  </div>
  <div class="navbar-end">
    {
      user? <div className='flex items-center'>
        <img className='rounded-full w-10 h-10' src={user.photoURL} alt="" />
        <Link to="/"><button onClick={signOutUser} className='btn'>Logout</button></Link>
      </div> : <Link to="/auth/login"><button className='btn'>Login</button></Link>
    }
  
  </div>
</div>
    );
};

export default Navbar;