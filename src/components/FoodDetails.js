import React from "react";
import { v4 as uuidv4 } from "uuid";

const FoodDetails = ({ food }) => {
  return food.map((food) => {
    return (
      <ul key={uuidv4()} className="nutrient-list">
        <li className="nutrient">{food.nutrients}</li>
      </ul>
    );
  });
};

export default FoodDetails;
