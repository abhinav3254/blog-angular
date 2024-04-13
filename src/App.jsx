import { useState, useEffect } from 'react';
import Auth from "./components/Auth";
import axios from "axios"
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import WriteBlog from './components/WriteBlog';
import MyBlogs from './components/MyBlogs';
import BlogDetails from './components/BlogDetails';

export default function App() {
  axios.defaults.baseURL = 'http://localhost:8080';

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
        <Route path='/write' element={<WriteBlog />} />
        <Route path='/my-blogs' element={<MyBlogs />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
      </Routes>
    </div>
  )
}