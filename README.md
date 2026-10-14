# Rose Project

A full-stack e-commerce application for a flower and gift store, built with a React storefront, an admin dashboard, and a Node.js/Express backend connected to MongoDB. The project includes product management, shopping cart logic, authentication, order placement, payment processing, and order tracking for both customers and admins.

## Overview

This project is organized into three main parts:

- Frontend: customer-facing store
- Admin: management dashboard for products and orders
- Backend: REST API, database access, authentication, Cloudinary uploads, and payment integrations

The app is designed for selling floral products such as roses, bouquets, mixed arrangements, and decor items. It allows users to browse collections, view product details, add items to cart, place orders, and complete payments using Stripe or Razorpay.

## Main Features

### Customer Features
- Home page with hero section, collection highlights, bestseller products, and newsletter signup
- Product listing by category and sub-category
- Product detail page with multiple images and product information
- Search capability and filtered browsing
- Cart management with add, update, and quantity changes
- User registration and login
- Order placement with cash on delivery or online payment
- Stripe and Razorpay payment flows
- Order verification and user order history

### Admin Features
- Secure admin login
- Add new products with images and metadata
- Upload product photos using Cloudinary
- Mark products as bestselling
- View all incoming orders
- Update order status such as Order Placed, Packing, Shipped, Out For Delivery, and Delivered
- Manage product listings and remove products

### Backend Capabilities
- MongoDB integration with Mongoose models
- JWT-based authentication and admin authorization middleware
- Cloudinary image uploads
- Express routes for users, products, cart, and orders
- Stripe and Razorpay payment processing
- Order and cart data handling for each authenticated user

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify

### Admin Panel
- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcrypt
- Cloudinary
- Stripe
- Razorpay
- Multer
- CORS
- dotenv

## Project Structure

```text
FOREVER_FULLSTACK/
├── admin/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
└── README.md
```

## Application Flow

1. Customers visit the storefront and browse items.
2. They add products to the cart and log in or register.
3. The frontend sends authenticated requests to the backend API.
4. Orders are created and saved in MongoDB.
5. Admin users manage products and update order status from the dashboard.
6. Payments can be completed through Stripe or Razorpay depending on the checkout flow.

## Environment Variables

The backend relies on environment variables such as:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
PORT=4000
```

## Setup Instructions

### 1. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

### 2. Start the backend

```bash
cd backend
npm run server
```

### 3. Start the frontend

```bash
cd frontend
npm run dev
```

### 4. Start the admin panel

```bash
cd admin
npm run dev
```

## Notes

- The frontend and admin app are separate React applications sharing the same backend API.
- Product images are uploaded via Cloudinary for reliable media hosting.
- MongoDB stores product data, user data, cart state, and order records.
- The app is suitable as a starter commerce project or a foundation for a production flower shop website.

## Summary

This project is a complete flower shop e-commerce platform built with modern frontend and backend technologies. It blends customer shopping flows, secure authentication, admin management, and payment integrations into one cohesive full-stack application, making it a strong example of an end-to-end online commerce system.