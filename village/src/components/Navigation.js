import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">Village</Link>
        </div>
        <div>
          <Link to="/smurf-form">Add Smurf</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
