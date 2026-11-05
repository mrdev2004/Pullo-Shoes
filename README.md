# 🛒 Pullo Shoes — Full-Stack MERN E-Commerce & Admin Platform

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)

A full-featured MERN stack e-commerce web application featuring an interactive storefront, Redux-powered shopping cart, user authentication, and a dedicated administrative dashboard for managing products and registered users.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
  - [Customer / Storefront](#customer--storefront)
  - [Admin Dashboard](#admin-dashboard)
- [Tech Stack](#tech-stack)

## 📖 Overview

**Pullo Shoes** is a full-stack shopping and product catalog management application. It consists of:
1. **Frontend (`Ecom/Ecom`)**: Built with **React 18** and **Vite** for fast performance, utilizing **Redux Toolkit** for centralized shopping cart state management, and **React Router DOM** for routing between public store views and the admin panel.
2. **Backend (`nodejs_todoapp-master`)**: An **Express.js & Node.js** REST API connected to **MongoDB** via Mongoose, providing endpoints for authentication (JWT & bcrypt), product CRUD operations, and user management.

---

## ✨ Key Features

### Customer / Storefront
- **Modern Homepage & Showcase**: Responsive hero section and promotional banners.
- **Product Catalog (`/shop`)**: Browse items dynamically fetched from MongoDB with live search and keyword filtering.
- **Redux-Powered Shopping Cart (`/cart`)**:
  - Add items to cart with user-specific isolation.
  - Increment/decrement item quantity and live price recalculation.
  - Remove items from cart.
  - Checkout process with cart clearance and feedback toasts.
- **User Authentication (`/login`, `/register`)**:
  - Account registration with secure password hashing via `bcrypt`.
  - User login with cookie-based JWT session authentication.
  - Navigation bar displays active login state and logout option.
- **Company Pages**: About Us (`/about`) and Contact Us (`/contact`) pages.

### Admin Dashboard
- **Admin Authentication**: Secure administrative login routing directly to the management portal.
- **Product Management (`/admin/insert`, `/admin/vprod`)**:
  - Add new products with title, price, description, category, and direct image upload (Base64 encoded).
  - View all live catalog products in a styled data table.
  - In-place editing and updating of product details.
  - Delete obsolete products from the database with confirmation.
- **User Management (`/admin/vuser`)**:
  - View all registered platform users.
  - Remove user records directly from the database.

---

## 🛠 Tech Stack

### Frontend
- **Framework / Bundler:** React 18, Vite
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`), `react-redux`
- **Routing:** React Router DOM (v6)
- **HTTP Client:** Axios
- **Notifications:** React Hot Toast
- **Icons & Styling:** React Icons, Bootstrap, Custom CSS

### Backend
- **Runtime:** Node.js (ES Modules)
- **Web Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication & Security:** JSON Web Tokens (`jsonwebtoken`), `bcrypt`, `cookie-parser`, `cors`
- **Configuration & Utilities:** `dotenv`, `nodemon`
