// Dr instruction form for patient recovery

import React from 'react';
import { useEffect, useState } from 'react';
import "../styles/drinstruct.css";

const API_URL = 'http://localhost:5000/api/drinstructions'; // Replace with our actual backend API endpoint

function  DrInsrtuct() {
  const [instructions, setInstructions] = useState([]);
  const [newInstruction, setNewInstruction] = useState('');

  // Fetch instructions
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setInstructions(data));
  }, []);

  
    // Add new instruction
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newInstruction.trim()) return;

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newInstruction })
    });

    const data = await res.json();
    setInstructions(prev => [...prev, data]);
    setNewInstruction('');
  };

  // Delete instruction
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setInstructions(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div className="App">
      <h1>Patient Recovery Care Instructions</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter care instruction"
          value={newInstruction}
          onChange={(e) => setNewInstruction(e.target.value)}
        />
        <button type="submit">Add Instruction</button>
      </form>

      <ul>
        {instructions.map(instruction => (
          <li key={instruction.id}>
            {instruction.text}
            <button onClick={() => handleDelete(instruction.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DrInsrtuct;