function ShoppingList() {

  function getUsername() {
    const username = prompt("Please enter your name:");
    return username ? username : "Guest";
  }

  const username = getUsername();

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
        <h1 className="shopping-list-title">Shopping List for {username}</h1>
        <div className="shopping-list-items-container">
          <button className="add-item-button" onClick={addItem}>Add Item</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;