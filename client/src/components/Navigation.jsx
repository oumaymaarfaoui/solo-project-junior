import React from "react";
import { useNavigate, useLocation } from "react-router-dom";


const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <a
            className={location.pathname === '/home' ? 'active' : ''}
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              navigate('/home');
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={location.pathname === '/addbook' ? 'active' : ''}
            href="/addbook"
            onClick={(e) => {
              e.preventDefault();
              navigate('/addbook');
            }}
          >
            Add a book
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
