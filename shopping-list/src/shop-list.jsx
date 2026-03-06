import { useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState(getUsername);

  function getUsername() {
    const username = prompt("Please enter your name:");
    if (username === null) {
      alert("Username input cancelled. Defaulting to 'Guest'.");
      return "Guest";
    }
    
    // Validation checks for username
    if (username.length > 20) {
      alert("Username must be 20 characters or less. Please try again.");
      return getUsername();
    } else if (username.trim() === "") {
      alert("Username cannot be empty. Please try again.");
      return getUsername();
    } else if (username.includes(" ")) {
      alert("Username cannot contain spaces. Please try again.");
      return getUsername();
    }

    console.log("Username entered:", username);
    return username ? username : "Guest";
  }

  function changeUsername () {
    setUsername(getUsername());
  }

  function addItem() {
    const item = prompt("Enter an item to add to the shopping list:");
    if (item && item.trim() !== "") {
      setItems((prevItems) => [
        ...prevItems,
        { name: item.trim(), isCompleted: false },
      ]);
      console.log(`Added ${item} to the shopping list.`);
    }
  }

  function completeItem(indexToToggle) {
    setItems((prevItems) =>
      prevItems.map((item, index) =>
        index === indexToToggle
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  }

  function deleteItem(indexToDelete) {
    setItems((prev) => prev.filter((_, index) => index !== indexToDelete));
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
          <div className="items-header">
            <h1 className="shopping-list-items-title">Items:</h1>
            <button className="add-item-button" onClick={addItem}>Add Item</button>
          </div>
          {items.map((item, index) => (
            <div
              className={`item-container ${item.isCompleted ? "item-container-completed" : ""}`}
              key={`${item.name}-${index}`}
            >
              <div className="left-of-item-card">
                <h1 className="item-title">Item Number {index + 1}:</h1>
                <p className="item-name">{item.name}</p>
              </div>
              <div className="right-of-item-card">
                <button className="complete-button" onClick={() => completeItem(index)}>
                  {item.isCompleted ? "Undo" : "Complete"}
                </button>
                <button className="delete-button" onClick={() => deleteItem(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;