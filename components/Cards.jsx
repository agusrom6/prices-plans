import React from "react";
import { RiUser3Line, RiCheckLine, RiBuilding4Fill, RiBriefcase3Fill } from "react-icons/ri";

const plans = [
  { id: 1, nombre: "Personal", precio: "Free", icon: RiUser3Line },
  { id: 2, nombre: "Business", precio: "$10", icon: RiBuilding4Fill },
  { id: 3, nombre: "Enterprise", precio: "$20", icon: RiBriefcase3Fill },
];

const Card = ({ nombre, precio, Icon }) => {
  return (
    <div className="bg-[#0F1C2E] p-12 rounded-xl hover:bg-[#3D5A80] text-white hover:translate-1 transition-all">
      <div className="flex flex-col items-center mb-20">
        <Icon className="text-5xl text-orange-600" />
        <h2 className="text-4xl">{nombre}</h2>
        <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet.</p>
        <h5 className="text-2xl uppercase tracking-[4px] font-bold">{precio}</h5>
        <p className="text-gray-500 mb-8">Lorem ipsum dolor.</p>
        <button className="bg-[#1F3A5F] py-2 px-8 rounded-lg text-white transition-all">
          Current plan
        </button>
      </div>
      <ul className="flex flex-col gap-4 text-gray-300">
        {[...Array(5)].map((_, i) => (
          <li key={i} className="flex items-center gap-4">
            <RiCheckLine className="text-green-300 text-2xl" /> Lorem, ipsum dolor.
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <Card key={plan.id} nombre={plan.nombre} precio={plan.precio} Icon={plan.icon} />
      ))}
    </div>
  );
};

export default Cards;
