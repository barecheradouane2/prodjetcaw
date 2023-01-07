import React, { useState } from 'react';
import AppBar from './AppBar';
import CreateBlog from './CreateBlog';
import './Styling.css';

const Blogs = () => {
  const [create, setCreate] = useState(false);
  const [blogs, setBlogs] = useState([
    { subject: 'Blog 1', description: 'Description of Blog 1', date: '2012-01-01', likes: 0, comments: [] },
    { subject: 'Blog 2', description: 'Description of Blog 2', date: '2022-01-02', likes: 0,  comments: [
      {
        name: "User 1",
        comment: "Comment for Blog 2",
      },
    ],
   },
  ]);
 
    
  const displayBlogs = () => {
    if (blogs) {
      return (
        <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Description</th>
            <th onClick={sortBlogs}>Date {sort ? '▲' : '▼'}</th>
            <th>Likes</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {sortedBlogs.map((blog, index) => (
            <tr key={index}>
              <td>{blog.subject}</td>
              <td>{blog.description}</td>
              <td>{blog.date}</td>
              <td>
                {blog.likes}
                <button onClick={() => likeBlog(blog.subject)}>Like</button>
              </td>
              <td>
             {blog.comments.map((comment) => (
             <div key={comment.name}>
                <b>{comment.name}:</b> {comment.comment}
             </div>
             ))}
             <button className="add-comment-button" onClick={() => setSelectedBlog(blog)}>Add Comment</button>

             </td>
            </tr>
          ))}
        </tbody>
      </table>  
      
      );
    }
  };

  const createBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
    setCreate(false);
  };

  const sortBlogs = () => {
    setSort(!sort);
  };
  const [sort, setSort] = useState(false);

  let sortedBlogs = [...blogs];
  if (!sort) {
    sortedBlogs = sortedBlogs.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  } else {
    sortedBlogs = sortedBlogs.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }

  const [originalBlogs] = useState(blogs);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filterBlogs = () => {
    if (startDate && endDate) {
      setBlogs(
        originalBlogs.filter(
          (blog) => blog.date >= startDate && blog.date <= endDate
        )
      );
    } else if (startDate) {
      setBlogs(originalBlogs.filter((blog) => blog.date >= startDate));
    } else if (endDate) {
      setBlogs(originalBlogs.filter((blog) => blog.date <= endDate));
    } else {
      setBlogs(originalBlogs); 
    }
  };
  const likeBlog = (subject) => {
    const index = blogs.findIndex((blog) => blog.subject === subject);
    if (index >= 0) {
      const updatedBlogs = [...blogs];
      updatedBlogs[index].likes++;
      setBlogs(updatedBlogs);
    }
  };
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const addComment = () => {
    const updatedBlog = {
      ...selectedBlog,
      comments: [...selectedBlog.comments, { name, comment }],
    };
    const updatedBlogs = blogs.map((blog) =>
      blog.subject === updatedBlog.subject ? updatedBlog : blog
    );
    setBlogs(updatedBlogs);
    setSelectedBlog(null);
    setName("");
    setComment("");
  };

  return (
    <div>
      <AppBar page="Blogs" />
      <h1 className='title'>Blogs</h1>
      {displayBlogs()}
       {selectedBlog && (
        <div className='comment'>
          <label>
            Name:
            <input
              class='comment-input'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Comment:
            <input 
              class="comment-input"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              />
          </label>
          <br />
          <button className="add-comment-button" onClick={addComment}>Add Comment</button>
        </div>
      )}
      {create ? (
        <CreateBlog createBlog={createBlog} setCreate={setCreate} />
      ) : (
        <button onClick={() => setCreate(true)} className="create-contact">Create Blog</button>
      )} 
        <button className="create-contact" onClick={sortBlogs}>Sort by Date {sort ? '▲' : '▼'}</button>
        <div className="date-filter">
        <label htmlFor="start-date">Start Date:</label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          onChange={event => setStartDate(event.target.value)}
        />
        <label htmlFor="end-date">End Date:</label>
        <input
          id="end-date"
          type="date"
          value={endDate}
          onChange={event => setEndDate(event.target.value)}
          />
          <button onClick={filterBlogs}>Filter</button>
        </div>
    </div>
  );
};

export default Blogs;
