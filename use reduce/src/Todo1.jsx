import React, { useState } from 'react';

const Todo1 = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const inputItem = (e) => {
    setItemName(e.target.value);
  };

  const handleAddItem = () => {
    setItems([...items, { id: items.length + 1, name: itemName }]);
    setItemName('');
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>TODO_List</h1>
        </div>
        <div className="input_list">
          <input
            type="text"
            placeholder='enter your task'
            onChange={inputItem}
            value={itemName}
          />
          <button className='add-btn' onClick={handleAddItem}>
            Add button
          </button>
        </div>
        <div className="list">
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
              <button
                className='delete-btn'
                onClick={() => handleDeleteItem(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo1;