import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownClick = () => {
    setShowDropdown(prevState => !prevState);
  };

  const handleOptionClick = (option) => {
    if (option === 'Get All Flight Status') {
      navigate('/allflights'); // Correct path to match App.js routes
    } else if (option === 'Get Specific Flight Status') {
      navigate('/flightstatus'); // Correct path to match App.js routes
    }
    setShowDropdown(false);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <h3>
            <button onClick={handleDropdownClick}>Flight Status</button>
            </h3>
            {showDropdown && (
              <ul className="dropdown">
                <li onClick={() => handleOptionClick('Get All Flight Status')}>
                  Get All Flight Status
                </li>
                <li onClick={() => handleOptionClick('Get Specific Flight Status')}>
                  Get Specific Flight Status
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <a href="/admin">Admin</a>
          </li>

        </ul>
      </nav>
      <h1 className="title">WELCOME TO FLIGHT</h1>
      <p>
        For any queries
        <br />
        Contact us at 0123456789
        <br />
        Email at customer@flight.com
      </p>
    </div>
  );
}

export default HomePage;
