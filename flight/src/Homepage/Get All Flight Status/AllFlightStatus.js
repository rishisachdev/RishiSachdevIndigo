import React, { useState, useEffect } from 'react';
import axios from 'axios';
function AllFlightStatus() {

  const [ flights, setFlights] = useState ([])
  //const [flights, setFlights] = useState( [{"flightId":"6E 2341","airline":"Indigo","status":"Cancelled","departureGate":"A12","arrivalGate":"B7","scheduledDeparture":"2024-07-26 14:00:00","scheduledArrival":"2024-07-26 18:00:00","actualDeparture":null,"actualArrival":null,"updated":0},{"flightId":"6E 2342","airline":"Indigo","status":"Cancelled","departureGate":"C3","arrivalGate":"D4","scheduledDeparture":"2024-07-26 16:00:00","scheduledArrival":"2024-07-26 20:00:00","actualDeparture":null,"actualArrival":null,"updated":0},{"flightId":"6E 2343","airline":"Indigo","status":"On Time","departureGate":"E2","arrivalGate":"F1","scheduledDeparture":"2024-07-26 12:00:00","scheduledArrival":"2024-07-26 16:00:00","actualDeparture":null,"actualArrival":null,"updated":0}]);



  //Uncomment when testing complete
  useEffect(() => {
    axios.get('http://localhost:8080/api/flights')
      .then(response => {
        setFlights(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>All Flights Status</h1>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            <strong>Flight ID:</strong> {flight.flightId} <br />
            <strong>Airline:</strong> {flight.airline} <br />
            <strong>Status:</strong> {flight.status} <br />
            <strong>Departure Gate:</strong> {flight.departureGate} <br />
            <strong>Arrival Gate:</strong> {flight.arrivalGate} <br />
            <strong>Scheduled Departure:</strong> {flight.scheduledDeparture} <br />
            <strong>Scheduled Arrival:</strong> {flight.scheduledArrival} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllFlightStatus;
