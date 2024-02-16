import { useState } from 'react';
import { Home } from './pages/Home/Home';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { Profile } from './pages/Profile/Profile';
import { Hobbies } from './pages/Hobbies/Hobbies';

import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dist/App.css';
// import { Login } from './components/pages/Login/Login';
// import { Profile } from './components/pages/Profile/Profile';
// import { Register } from './components/pages/Register/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/hobbies",
    element: <Hobbies />
  },
]);
function App() {
  return (
    <div className='App'>

      <RouterProvider router={router} />

    </div >
  )
}

export default App
