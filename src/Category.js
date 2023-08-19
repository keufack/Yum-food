import React from "react";
import { categories } from "./data/data";
const Category = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-4">
      <h1 className="text-orange-500 font-bold text-3xl text-center py-2">
        Trending categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2"></div>
    </div>
  );
};
export default Category;
