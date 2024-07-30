import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Status() {
  const { id } = useParams();
  const [backendData, setBackendData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/api/flights/${id}`)
      .then(response => {
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setBackendData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Flight Status for ID: {id}</h1>
      <ul>
        {backendData.map(flight => (
          <li key={flight.id}>
            {flight.flightId} - {flight.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Status;
