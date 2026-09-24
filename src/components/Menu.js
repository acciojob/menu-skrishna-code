import React from "react";

function Menu({ menuItems, activeCategory }) {
  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="menu-container">
      {filteredItems.map((item) => {
        let testId = "";

        if (item.category === "Breakfast") {
          testId = "menu-item-breakfast";
        } else if (item.category === "Lunch") {
          testId = "menu-item-lunch";
        } else if (item.category === "Shakes") {
          testId = "menu-item-shakes";
        }

        return (
          <div
            className="menu-item"
            data-test-id={testId}
            key={item.id}
          >
            <img src={item.image} alt={item.name} />

            <div>
              <h2>{item.name}</h2>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
