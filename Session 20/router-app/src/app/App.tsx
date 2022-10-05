import React from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "../pages/Welcome";
import BlogLayout from "../pages/BlogLayout";
import BlogPosts from "../pages/BlogPosts";
import PostDetails from "../pages/PostDetails";
import NewPost from "../pages/NewPost";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogPosts />} />
          <Route path=":id" element={<PostDetails />} />
        </Route>
        <Route path="/blog/new" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
