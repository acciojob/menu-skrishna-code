import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

function App() {
  const [menuItems] = useState([
    {
      id: 1,
      name: "Pancakes",
      category: "Breakfast",
      image: "https://via.placeholder.com/150",
      price: 100,
    },
    {
      id: 2,
      name: "Poha",
      category: "Breakfast",
      image: "https://via.placeholder.com/150",
      price: 80,
    },
    {
      id: 3,
      name: "Veg Thali",
      category: "Lunch",
      image: "https://via.placeholder.com/150",
      price: 150,
    },
    {
      id: 4,
      name: "Paneer Rice",
      category: "Lunch",
      image: "https://via.placeholder.com/150",
      price: 180,
    },
    {
      id: 5,
      name: "Chocolate Shake",
      category: "Shakes",
      image: "https://via.placeholder.com/150",
      price: 120,
    },
    {
      id: 6,
      name: "Strawberry Shake",
      category: "Shakes",
      image: "https://via.placeholder.com/150",
      price: 130,
    },
  ]);

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div id="main">
      <h1>Our Menu</h1>

      <div className="buttons">
        <button
          id="filter-btn-1"
          onClick={() => setActiveCategory("Breakfast")}
        >
          Breakfast
        </button>

        <button
          id="filter-btn-2"
          onClick={() => setActiveCategory("Lunch")}
        >
          Lunch
        </button>

        <button
          id="filter-btn-3"
          onClick={() => setActiveCategory("Shakes")}
        >
          Shakes
        </button>
      </div>

      <Menu
        menuItems={menuItems}
        activeCategory={activeCategory}
      />
    </div>
  );
}

export default App;
