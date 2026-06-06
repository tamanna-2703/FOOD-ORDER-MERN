import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../fooditem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Show all if no category or "All"
  const filteredList =
    !category || category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {filteredList.map((item) => (
          <FoodItem
            key={item._id}          // ✅ unique key for React
            id={item._id}           // ✅ id passed to FoodItem / cart
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
