import React, { useState } from 'react';

const Stateapp = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const addItem = () => {
    setItems([...items, { id: Date.now(), name: itemName }]);
    setItemName(''); // reset input field
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id, name) => {
    setItems(items.map((item) => item.id === id ? { ...item, name: name } : item));
  };

  const handleChange = (e) => {
    setItemName(e.target.value);
  };

  return (
    <div>
      <h2>Product list</h2>
      <label htmlFor="">Enter item name:</label>
      <input type="text" value={itemName} onChange={handleChange} />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => updateItem(item.id, itemName)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stateapp;