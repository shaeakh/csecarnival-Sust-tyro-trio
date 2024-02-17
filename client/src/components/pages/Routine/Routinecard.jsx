import React, { useState } from 'react';

const Routine = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddEntry = () => {
    setEntries([...entries, formData]);
    setFormData({});
  };

  return (
    <div>
      <table style={{ borderRadius: '10px' }}>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.column1}</td>
              <td>{entry.column2}</td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="column1"
                value={formData.column1 || ''}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="column2"
                value={formData.column2 || ''}
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleAddEntry}>Add Entry</button>
    </div>
  );
};

export default Routine;
