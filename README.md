Tomato - Full Stack Food Ordering Web App    

A robust, fully responsive food delivery platform built using the MERN stack (MongoDB, Express, React, Node.js). This project consists of three main components: a customer-facing frontend, an admin panel for restaurant management, and a backend API handling data, authentication, and payments.


🛠️ Tech Stack
Frontend (Client & Admin):

React JS: For building the user interface.
Vite: Build tool for fast development.
React Router: For navigation and routing.
Context API: For global state management (Cart, Authentication).
CSS: Custom styling with media queries for responsiveness.
Backend:

Node.js & Express.js: Server-side runtime and framework.
JWT (JSON Web Token): For secure user authentication.
Bcrypt: For password hashing.
Multer: For image upload and storage.
Stripe: Payment gateway integration.
Validator: For email and password validation.
Database:

MongoDB Atlas: Cloud-based NoSQL database.
Mongoose: ODM for schema modeling.
✨ Features
🛒 User Features
Food Menu: Browse food items by category (Salads, Deserts, etc.).
Cart Management: Add/remove items, adjust quantities, and view real-time totals.
Authentication: Sign up and Login with JWT and Bcrypt security.
Order Placement: Enter delivery details and pay securely via Stripe.
My Orders: Track order status (Processing, Out for Delivery, Delivered).
🛡️ Admin Panel
Add Items: Upload new food items with images, prices, and descriptions.
List Items: View and delete existing food inventory.
Order Management: View all user orders and update their status (e.g., "Food Processing" to "Out for Delivery").
📂 Project Structure
The repository is divided into three main folders:

backend/: Contains the Node.js/Express API, database models, and routes.
frontend/: The customer-facing React application.
admin/: The React-based dashboard for restaurant owners.
⚙️ Installation & Setup
1. Backend Setup
Navigate to the backend folder and install dependencies:

cd backend
npm install
Create a .env file in the backend folder with the following variables:

JWT_SECRET=your_random_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
Run the server:

npm run server
The server runs on http://localhost:4000.

2. Frontend Setup
Navigate to the frontend folder and install dependencies:

cd frontend
npm install
Run the client application:

npm run dev
The frontend typically runs on http://localhost:5173.

3. Admin Panel Setup
Navigate to the admin folder and install dependencies:

cd admin
npm install
Run the admin dashboard:

npm run dev
🔗 API Endpoints
The backend exposes the following RESTful endpoints:

Food

POST /api/food/add - Add a new food item (Admin).
GET /api/food/list - Get all food items.
POST /api/food/remove - Remove a food item (Admin).
User

POST /api/user/register - Create a new user account.
POST /api/user/login - Login to an account.
Cart

POST /api/cart/add - Add item to user cart.
POST /api/cart/remove - Remove item from user cart.
POST /api/cart/get - Fetch user cart data.
Orders

POST /api/order/place - Place a new order.
POST /api/order/verify - Verify Stripe payment.
POST /api/order/userorders - Get specific user's order history.
GET /api/order/list - Get all orders (Admin).
POST /api/order/status - Update order status (Admin).
