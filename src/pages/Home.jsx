import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';

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
            <div className="w-10/12 mx-auto grid grid-cols-4 gap-6">
                {/* Sidebar with Category Buttons */}
                <div className="col-span-1">
                    {categoryList.map((category, index) => (
                        <button
                            key={index}
                            className={`btn w-full mb-2 ${
                                selectCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
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
                        <p className="col-span-3 text-center text-gray-500">No equipment found for this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
