# ≡ƒìö FOOD-ORDER-MERN

A full-stack Food Ordering Web Application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

---

## ≡ƒÜÇ Features

- ≡ƒ¢Æ Browse and order food items
- ≡ƒöÉ User Authentication (Register / Login)
- ≡ƒº║ Cart Management
- ≡ƒôª Order Placement & Tracking
- ≡ƒ¢á∩╕Å Admin Panel to manage food items & orders
- ≡ƒÆ│ Payment Integration
- ≡ƒô▒ Responsive Design

---

## ≡ƒùé∩╕Å Project Structure

```
FOOD-ORDER-MERN/
Γö£ΓöÇΓöÇ frontend/       # React.js (Vite) - Customer-facing UI
Γö£ΓöÇΓöÇ admin/          # React.js (Vite) - Admin Dashboard
ΓööΓöÇΓöÇ backend/        # Node.js + Express.js - REST API + MongoDB
```

---

## ≡ƒ¢á∩╕Å Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React.js, Vite, Context API       |
| Admin     | React.js, Vite                    |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB (Mongoose)                |
| Auth      | JWT (JSON Web Tokens)             |
| Storage   | Multer (image uploads)            |

---

## ΓÜÖ∩╕Å Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB (local or Atlas)

### 1. Clone the Repository
```bash
git clone https://github.com/tamanna-2703/FOOD-ORDER-MERN.git
cd FOOD-ORDER-MERN
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create a .env file with your credentials (see .env.example)
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 4. Admin Setup
```bash
cd admin
npm install
npm run dev
```

---

## ≡ƒöÉ Environment Variables (Backend)

Create a `.env` file inside the `backend/` folder:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
```

---

## ≡ƒôí API Routes

| Method | Route              | Description          |
|--------|--------------------|----------------------|
| POST   | /api/user/register | Register a new user  |
| POST   | /api/user/login    | Login user           |
| GET    | /api/food/list     | Get all food items   |
| POST   | /api/cart/add      | Add item to cart     |
| POST   | /api/order/place   | Place an order       |

---

## ≡ƒæ⌐ΓÇì≡ƒÆ╗ Author

**Tamanna** ΓÇö [@tamanna-2703](https://github.com/tamanna-2703)

---

## ≡ƒôä License

This project is open source and available under the [MIT License](LICENSE).
