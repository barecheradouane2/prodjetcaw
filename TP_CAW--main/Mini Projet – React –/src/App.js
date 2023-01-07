import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contacts from './Contacts';
import CreateContact from './CreateContact';
import Blogs from './Blogs';
import CreateBlog from './CreateBlog';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/create-contact" element={<CreateContact/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/create-blog" element={<CreateBlog/>}/>
      </Routes>
      </div>
      </BrowserRouter>
  );
};

export default App;
