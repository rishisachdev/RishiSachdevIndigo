import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FlightStatus() {
  const [flightStatus, setFlightStatus] = useState('');
  const navigate = useNavigate(); // Import useNavigate

  const handleInputChange = (event) => {
    setFlightStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted flight status:', flightStatus);

    // Redirect to the desired path with flightStatus as a URL parameter
    navigate(`/status/${flightStatus}`); // Adjust the path to include the flight ID
  };

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Flight Status</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '2rem' }}>
          <label htmlFor="flightNumber" style={{ fontSize: '1.5rem' }}>Flight ID:</label>
          <input
            type="text"
            className="form-control"
            id="flightNumber"
            value={flightStatus}
            onChange={handleInputChange}
            style={{ fontSize: '1.5rem', padding: '1rem' }}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ fontSize: '1.5rem', padding: '1em' }}>
          Check Status
        </button>
      </form>
    </div>
  );
}

export default FlightStatus;
