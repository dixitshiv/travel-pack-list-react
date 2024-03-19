import { useState } from "react";

export default function Form({ onAddNewItem }) {
  const [description, setDescription] = useState("");
  const [noOfItem, setNoOfItem] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItemObj = { description, noOfItem, packed: false, id: Date.now() };
    console.log(newItemObj);
    onAddNewItem(newItemObj);
    setDescription("");
    setNoOfItem(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={noOfItem}
        onChange={(e) => setNoOfItem(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button> Add</button>
    </form>
  );
}
