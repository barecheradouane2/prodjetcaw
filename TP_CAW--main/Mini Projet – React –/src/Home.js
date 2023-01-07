import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from './AppBar';
import './Styling.css';

const Home = () => {
  return (
    <div>
      <AppBar />
      <div className="home-container">
        <div className="logo">
          <img src={require('./caw.png')} alt="Logo" />
        </div>
        <h1>We are Aichi Abdeldjabar and Bareche Radouane</h1>
        <h2>WELCOME TO OUR SITE</h2>
        <p>
          You can browse our site with the <Link to="/contacts">Contacts</Link> or <Link to="/blogs">Blogs</Link> links.
        </p>
      </div>
    </div>
  );
};

export default Home;
