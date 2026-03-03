import { useState } from "react";

function ShoppingList() {

  function getUsername() {
    const username = prompt("Please enter your name:");
    console.log("Username entered:", username);
    return username ? username : "Guest";
  }

  function changeUsername () {
    setUsername(getUsername());
  }
  
  const [username, setUsername] = useState(getUsername);

  function addItem() {
    const item = prompt("Enter an item to add to the shopping list:");
    if (item) {
      // Logic to add the item to the shopping list (not implemented yet)
      console.log(`Added ${item} to the shopping list.`);
    }
  }

  return (
    <div className="container">
      <div className="shopping-list-card">
        <div className="shopping-list-header">
          <h1 className="shopping-list-title">{username}'s Shopping List</h1>
          <button className="change-name-button" onClick={changeUsername}>Change Username</button>
        </div>
        <div className="divider-line"></div>
        <div className="shopping-list-items-container">
          <h1 className="shopping-list-items-title">Items:</h1>
          <button className="add-item-button" onClick={addItem}>Add Item</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;