import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './Homepage/homepage';
import Admin from './Homepage/admin';
import AllFlightStatus from './Homepage/Get All Flight Status/AllFlightStatus';
import FlightStatus from './Homepage/Get Specific Flight Status/FlightStatus';
import Status from './Homepage/Get Specific Flight Status/Flight Status/Status';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/allflights" element={<AllFlightStatus />} />
            <Route path="/flightstatus" element={<FlightStatus />} />
            <Route path="/status/:id" element={<Status />} /> 
            <Route path="/admin" element={<Admin />} /> 

          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
