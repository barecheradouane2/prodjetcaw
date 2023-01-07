import React from 'react';
import { Link } from 'react-router-dom';
import './Styling.css';

const AppBar = ({ page }) => {
  return (
    <div className="app-bar">
     <div className="logo-appbar">
        <img src={require('./caw.png')} alt="Logo" />
      </div>
      <Link to="/">Home</Link>
      {page !== 'Contacts' && <Link to="/contacts">Contacts</Link>}
      {page !== 'Blogs' && <Link to="/blogs">Blogs</Link>}
      <div className="page-name">{page}</div>
    </div>
  );
};

export default AppBar;
