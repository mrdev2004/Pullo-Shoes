import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from "react-redux";
import { Store1 } from "./app/Store1.js";
import { Toaster } from 'react-hot-toast';

import App from './App.jsx';
import Navbar from './Components/Navbar.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ContactUs from './Components/ContactUs.jsx';
import Shop from './Components/Shop.jsx';
import Login1 from './Components/Login1.jsx';
import Register1 from './Components/Register1.jsx';
import Cart from './Components/Cart1.jsx';
import Home from './Components/Home.jsx';

import AdminNavbar from './Components/AdminNavbar.jsx';
import ViewUsers from './Components/ViewUsers.jsx';
import ViewProducts from './Components/ViewProducts.jsx';
import InsertData from './Components/InsertData.jsx';

const MainApp = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {/* Render Navbar only if not on an admin route */}
      {!isAdminRoute && <Navbar />}
      {isAdminRoute && <AdminNavbar />}
      <Toaster />

      <Routes>
        {/* General routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/register" element={<Register1 />} />
        <Route path="/cart" element={<Cart />} />

        {/* Admin routes */}
        <Route path="/admin/insert" element={<InsertData />} />
        <Route path="/admin/vprod" element={<ViewProducts />} />
        <Route path="/admin/vuser" element={<ViewUsers />} />
      </Routes>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store1}>
    <BrowserRouter>
      <MainApp />
      <App />
    </BrowserRouter>
  </Provider>,
);
