import React from "react";

const FoodNutrients = ({ nutrients }) => {
  return (
    <ul className="nutrient-list">
      <li className="nutrient-ENERC_KCAL">
        Energy: {nutrients.ENERC_KCAL && nutrients.ENERC_KCAL.toFixed(2)} kcal
      </li>
      <li className="nutrient-PROCNT">
        Protein: {nutrients.PROCNT && nutrients.PROCNT.toFixed(2)} g
      </li>
      <li className="nutrient-FAT">
        Fat: {nutrients.FAT && nutrients.FAT.toFixed(2)} g
      </li>
      <li className="nutrient-CHOCDF">
        Carbs: {nutrients.CHOCDF && nutrients.CHOCDF.toFixed(2)} g
      </li>
    </ul>
  );
};

export default FoodNutrients;
