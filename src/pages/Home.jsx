import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';
import Banner from './../components/Banner';
import Brands from '../components/Brands';

const Home = () => {
    const equipments = useLoaderData();

    const [selectCategory, setSelectedCategory] = useState("All");

    const categoryList = [
        "All",
        "Cricket", 
        "Football", 
        "Badminton", 
        "Volleyball", 
        "Basketball", 
        "Rugby", 
        "Hockey", 
        "Others"
    ];

   
    const filteredEquipments = selectCategory === "All" 
        ? equipments 
        : equipments.filter(equipment => equipment.category === selectCategory);

    return (
        <div>
            <Banner></Banner>
            {/* equipment card */}
            <h1 className=' text-5xl mt-20 text-[#7ABB2D] text-center'>Products For You</h1>
            <p className='mb-12 text-xl mt-4 text-gray-400 text-center'>From beginners to pros, we’ve got what you need to excel in your game.</p>
            <div className="w-11/12 mx-auto grid grid-cols-4 gap-6 mt-20 mb-20">
                {/* Sidebar with Category Buttons */}
                <div className="col-span-1">
                    {categoryList.map((category, index) => (
                        <button
                            key={index}
                            className={`btn w-full mb-2 ${
                                selectCategory === category ? "bg-[#7ABB2D] text-white" : "bg-gray-200 dark:bg-[#140f2f58] text-white"
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="col-span-3 grid grid-cols-3 gap-4">
                    {filteredEquipments.length > 0 ? (
                        filteredEquipments.map((equipment) => (
                            <EquipmentCard key={equipment._id} equipment={equipment} />
                        ))
                    ) : (
                        <p className="col-span-3 text-center text-gray-500 ">No equipment found for this category.</p>
                    )}
                </div>
            </div>
            {/* brands */}
            <h1 className=' text-5xl mt-20 text-[#7ABB2D] text-center'>Our Trusted Brands</h1>
            <p className='mb-12 text-xl mt-4 text-gray-400 text-center'>From beginners to pros, we’ve got what you need to excel in your game.</p>
            <Brands></Brands>
        </div>
    );
};

export default Home;
