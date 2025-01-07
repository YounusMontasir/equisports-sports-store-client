import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkMode(savedTheme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const items = (
    <>
      <NavLink to="/"><li className='text-center'>Home</li></NavLink>
      <NavLink to="/allequipments"><li className='text-center'>All Equipments</li></NavLink>
      <NavLink to="/addequipments"><li className='text-center'>Add Equipment</li></NavLink>
      <NavLink to={`/myequipments/${user?.email}`}><li className='text-center'>My Equipment</li></NavLink>
    </>
  );

  return (
    <div className={`${
    darkMode ? 'bg-[#1D232A] ' : 'bg-white'  } w-full   mx-auto sticky top-0 z-10 shadow-lg`}>
    <div className={`navbar w-full md:w-11/12 mx-auto`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabindex="0"
            className="menu menu-sm dropdown-content bg-[#7ABB2D] text-white font-bold rounded-box z-[10] mt-3 w-52 p-2 shadow">
            {items}
          </ul>
        </div>
        <img src="https://i.ibb.co.com/n0DC7rS/logo-4-removebg-preview.png" className='h-16 w-24' alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#7ABB2D] text-[16px] font-semibold items-center gap-6">
          {items}
        </ul>
      </div>
      <div className="navbar-end">
        <label className="flex cursor-pointer gap-2 md:mr-1">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            className="toggle theme-controller"
            checked={darkMode}
            onChange={toggleDarkMode} />
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        {user ? (
          <div className='flex items-center'>
            <img className='rounded-full w-6 h-6 md:w-10 md:h-10 md:mr-2' title={user.displayName} src={user.photoURL} alt="User" />
            <Link to="/"><button onClick={signOutUser} className='btn btn-sm bg-[#7ABB2D] text-white'>Logout</button></Link>
          </div>
        ) : (
          <Link to="/auth/login"><button className='btn btn-sm bg-[#7ABB2D] text-white'>Login</button></Link>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
