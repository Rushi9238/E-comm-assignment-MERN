
# E-Commerce MERN Application

A full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to browse products, manage shopping cart, and place orders.

## 🚀 Features

### Frontend
- **Product Listing**: Grid layout displaying all available products
- **Product Cards**: Show product image, name, description, price with "Add to Cart" functionality
- **Shopping Cart**: Add/remove items, quantity management, total calculation
- **Order Placement**: User information form with validation
- **Responsive Design**: Works on desktop and mobile devices

### Backend
- **RESTful APIs**: Clean API endpoints for products and orders
- **Product Management**: Fetch product data from in-memory storage
- **Order Processing**: Handle order placement with validation
- **Error Handling**: Comprehensive error handling and validation

## 📁 Project Structure


```bash
E-comm/
├── backend/
│ ├── routes/
│ │ ├── product.Routes.js
│ │ └── order.Routes.js
│ ├── public/
│ ├── app.js
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Header/
│ │ │ ├── ProductList/
│ │ │ ├── ProductCard/
│ │ │ └── Cart/
│ │ ├── context/
│ │ │ └── CartContext.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
├── .env
└── README.md
```

## 🛠️ Technology Stack

### Frontend
- **React.js** - UI framework
- **React Router DOM** - Client-side routing
- **Context API** - State management
- **Vite** - Build tool and dev server
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie handling

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## ⚙️ Installation & Setup

### Method 1: Development Mode (Frontend & Backend Separate)

1. **Clone the repository**
```bash
git clone <repository-url>
cd E-comm
````

2. **Setup Backend**
```bash
# Install backend dependencies
npm install

# Start backend server (runs on port 3033)
npm run dev
````

2. **Setup Frontend (in a new terminal)**
```bash
# Navigate to frontend directory
cd frontend

# Install frontend dependencies
npm install

# Start frontend development server (runs on port 5173)
npm run dev
````

## 🚀 Deployment on Render.com
**Prerequisites**

- Render.com account
- GitHub repository connected

### Deployment Steps
**Prepare your repository**

- Ensure all code is pushed to GitHub
- Verify package.json scripts are configured

**Create a new Web Service on Render**

- Connect your GitHub repository
- Use the following settings:

Build Command: ````npm run install-deps && npm run build````
Start Command: ````npm start````
Environment: Node.js

**Environment Variables (in Render dashboard)**
```bash
env
NODE_ENV=production
PORT=10000
CORS_ORIGIN=https://your-app-name.onrender.com
````

## 📚 API Endpoints
Products

```GET /api/products``` - Fetch all products

Orders

````POST /api/orders```` - Place a new order


## 🎯 Usage
Browse Products: Visit the home page to see all available products

Add to Cart: Click "Add to Cart" on any product

View Cart: Click the cart icon in the header to review your items

Manage Quantities: Use +/- buttons to adjust item quantities

Place Order: Fill in your details and click "Place Order"

## 🔧 Available Scripts
Backend Scripts
npm start - Start production server

npm run dev - Start development server with nodemon

npm run build - Build frontend for production

Frontend Scripts (from frontend directory)
npm run dev - Start Vite development server

npm run build - Build for production

npm run preview - Preview production build

## 🐛 Troubleshooting
Common Issues
Port already in use

Change PORT in .env file or use different ports

CORS errors

Verify CORS_ORIGIN environment variable

Check frontend API calls are using correct URLs

Build failures

Ensure Node.js version is compatible

Check all dependencies are properly installed

Development Tips
Use browser developer tools for debugging

Check server logs for backend errors

Verify API responses in Network tab

## 🤝 Contributing
Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Create a Pull Request

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Developed as part of Knovator Technologies Assignment
    
