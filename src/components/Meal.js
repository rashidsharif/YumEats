import React, { useState } from "react";
import { mealData } from "./data/Data";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  const filterCat = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-center text-2xl py-8">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={() => setFoods(mealData)}
            className="m-1 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            All
          </button>
          <button
            onClick={() => filterCat("Chicken")}
            className="m-1 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Chicken
          </button>
          <button
            onClick={() => filterCat("salad")}
            className="m-1 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Salad
          </button>
          <button
            onClick={() => filterCat("pizza")}
            className="m-1 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Pizza
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border-none hove:scale-105 duration-300 "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex justify-between py-2 px-2">
              <p className="font-bold text-black">{item.title}</p>
              <p className="bg-orange-700 h-18 rounded-full w-18 -mt-10 text-white py-4 px-2 border-8 font-bold">
                {item.price}
              </p>
            </div>
            <div className="pl-2 py-4">
              <p className="flex item-center text-indigo-700">
                {" "}
                View More
                <ArrowSmRightIcon className="h-6 w-6" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
