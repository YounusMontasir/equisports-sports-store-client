import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import EquipmentCard from "../components/EquipmentCard";

const AllEquipments = () => {
  const equipmentsData = useLoaderData();
  const [equipments, setEquipments] = useState(equipmentsData);
  const handleSortByPrice = () => {
    const sort = [...equipments].sort((a, b) => b.price - a.price);
    setEquipments(sort);
  };
  return (
    <div className="w-full lg:w-10/12 mx-auto mt-16 mb-20">
      <h1 className="mb-12 sm:text-3xl md:text-5xl  text-[#7ABB2D] text-center">
        All Equipments
      </h1>
      <div className="flex justify-end items-center mb-10">
        <button
          className="btn bg-[#7ABB2D] text-white font-bold"
          onClick={handleSortByPrice}
        >
          Sort by Price
          <img
            className="h-5 w-5"
            src="https://i.ibb.co.com/Ypp11cM/sort.png"
            alt=""
          />
        </button>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {equipments.map((equipment) => (
          <EquipmentCard
            equipment={equipment}
            key={equipment._id}
          ></EquipmentCard>
        ))}
      </div>
    </div>
  );
};

export default AllEquipments;
