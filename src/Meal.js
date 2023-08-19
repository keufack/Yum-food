import React from "react";
import { TbArrowAutofitRight } from "react-icons/tb";
import { mealData } from "./data/data";
const Meal = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-3xl text-center py-2">
        Our Meal
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-5">
        {mealData.map((item) => (
          <MealCard
            name={item.name}
            image={item.image}
            id={item.id}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

const MealCard = (props) => {
  const { name, image, id, price } = props;
  return (
    <div key={id} className="border-none hover:scale-105 duration-300">
      <img
        alt={name}
        src={image}
        className="w-full h-[220px] object-cover rounded-lg"
      />
      <div className="flex justify-between py-2 px-2">
        <p className="font-bold">{name}</p>
        <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold">
          {price}
        </p>
      </div>
      <div className="pl-2 py-4 -mt-7">
        <p className="flex items-center text-indigo-600">
          View More <TbArrowAutofitRight className="w-5 ml-2" />
        </p>
      </div>
    </div>
  );
};
export default Meal;
