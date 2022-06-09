import React, { useState } from "react";
import FoodNutrients from "./FoodNutrients";
import { v4 as uuidv4 } from "uuid";

const Food = ({ food }) => {
  //console.log(food);
  const [show, setShow] = useState(false);
  const { label, image, nutrients } = food.food;

  //console.log(nutrients);

  return (
    <div className="food" class="card border-info mb-3">
      <div className="food_label" class="card-header">
        {label}
      </div>
      <div class="card-body">
        <img src={image} alt={"__________________________________"} />
        <br />
        <button class="btn btn-info" onClick={() => setShow(!show)}>
          Nutrients
        </button>
        {show && <FoodNutrients key={uuidv4()} nutrients={nutrients} />}
      </div>
    </div>
  );
};

export default Food;
