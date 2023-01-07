import React, { useState, useEffect } from 'react';
import CreateContact from './CreateContact';
import AppBar from './AppBar';

import './Styling.css';

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      name: 'Aichi Abdeldjabar',
      phone: '0557826215',
      email: 'abdeldjabar.aichi@univ-constantine2.dz'
    },
    {
      name: 'Bareche Radouane',
      phone: '0667852549',
      email: 'radouane.bareche@univ-constantine2.dz'
    },
    {
      name: 'islam eddine bougroura',
      phone: '0665215482',
      email: 'islam.bougroura@univ-constantine2.dz'
    }
  ]);
  
  const display_Contacts = () => {
        if (contacts) {
          return (
            <table>
               <thead>
                 <tr>
                   <th>Name</th>
                   <th>Phone</th>
                   <th>Email</th>
                 </tr>
                </thead>
              <tbody>
                {searchResults.map((contact, index) => (
                   <tr key={index}>
                      <td>{contact.name}</td>
                      <td>{contact.phone}</td>
                      <td>{contact.email}</td>
                   </tr>
                  ))}
                </tbody>
             </table>
          );
        }
      };

  const [create, setCreate] = useState(false);

  const createContact = contact => {
    setContacts([...contacts, contact]);
    setCreate(false);
  };

  const [display, setDisplay] = useState(true);

  const displayContacts = () => {
    setDisplay(!display);
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('name');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    let results = [];
    if (searchCategory === 'name') {
      results = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (searchCategory === 'phone') {
      results = contacts.filter(contact =>
        contact.phone.includes(searchTerm)
      );
    } else if (searchCategory === 'email') {
      results = contacts.filter(contact =>
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setSearchResults(results);
  }, [searchTerm, searchCategory, contacts]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = event => {
    setSearchCategory(event.target.value);
  };

  return (
    <div>
      <AppBar page="Contacts" />
      <h1 className='title'>Contacts</h1>
      
      
      <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={searchCategory} onChange={handleCategoryChange}>
        <option value="name">Name</option>
        <option value="phone">Phone</option>
        <option value="email">Email</option>
      </select>
      </div>
      {display && (display_Contacts())}
      
      {create ? (
        <CreateContact createContact={createContact} setCreate={setCreate} />
      ) : (
        <button onClick={() => setCreate(true)} className="create-contact">Create Contact</button>
      )}
      <button onClick={displayContacts} className="create-contact">
        {display ? 'Hide' : 'Show'} Contacts
      </button>
    </div>
  );
};

export default Contacts;
