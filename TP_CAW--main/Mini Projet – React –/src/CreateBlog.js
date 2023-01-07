import React, { useState } from 'react';
import './Styling.css';

const CreateBlog = ({ createBlog, setCreate }) => {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createBlog({  subject: subject,
      description: description,
      date: date,
      likes: 0,
      comments: []});
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="Subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <br />
        <button type="submit" className="create-button">Save</button>
        <button onClick={() => setCreate(false)} className="create-button">Cancel</button>
      </form>
    </div>
  );
};

export default CreateBlog;
