import React, { useState } from 'react';




const UpdateFlightStatus = () => {
  const [flightId, setFlightId] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setFlightId(event.target.value);
  };

  const handleSelectChange = (event) => {
    setStatus(event.target.value);

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/flights/${flightId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({status})
      });

      if (!response.ok) {
        throw new Error('Failed to update flight status');
      }

      setMessage('Flight status updated successfully!');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Update Flight Status</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Flight Status:
          <br></br>
          <br></br>
          <input type="text" value={flightId} onChange={handleChange} placeholder='Flight Id' />

          <select id="flightSelect" value={status} onChange={handleSelectChange}>
        <option value="">--Please choose an option--</option>
        <option value="On Time">On Time</option>
        <option value="Delayed">Delayed</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Boarding">Boarding</option>
      </select>
        </label>
        <br></br>
        <br></br>
        <button type="submit">Update Status</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateFlightStatus;
