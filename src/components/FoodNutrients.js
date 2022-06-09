import React from "react";

const FoodNutrients = ({ nutrients }) => {
  console.log(nutrients);

  return (
    <ul className="nutrient-list">
      <li className="nutrient-ENERC_KCAL">
        Energy: {nutrients.ENERC_KCAL.toFixed(2)} kcal
      </li>
      <li className="nutrient-PROCNT">
        Protein: {nutrients.PROCNT.toFixed(2)} g
      </li>
      <li className="nutrient-FAT">Fat: {nutrients.FAT.toFixed(2)} g</li>
      <li className="nutrient-CHOCDF">
        Carbs: {nutrients.CHOCDF.toFixed(2)} g
      </li>
    </ul>
  );
};

export default FoodNutrients;
