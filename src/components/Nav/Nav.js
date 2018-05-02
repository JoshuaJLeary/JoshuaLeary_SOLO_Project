import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            My Profile
          </Link>
        </li>
        <li>
          <Link to="/info">
            Join Event
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
