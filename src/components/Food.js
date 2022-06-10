import React, { useState } from "react";
import FoodNutrients from "./FoodNutrients";

const Food = ({ food }) => {
  const [show, setShow] = useState(false);
  const { label, image, foodID, nutrients } = food.food;

  return (
    <div className="card border-info mb-3">
      <div className="card-header">{label}</div>
      <div className="card-body">
        <img src={image} alt={"________________________________"} />
        <br />
        <button className="btn btn-info" onClick={() => setShow(!show)}>
          Nutrients
        </button>
        {show && <FoodNutrients key={foodID} nutrients={nutrients} />}
      </div>
    </div>
  );
};

export default Food;
