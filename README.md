# Firebase + MongoDB Authentication App

This is a simple full-stack authentication demo built with **Firebase Authentication** and **MongoDB (via Mongoose)**.  
It lets users **sign up** using Firebase Auth and stores additional user details in MongoDB.  
Users can then **log in** to view their personal dashboard.

---

## 🚀 Features

- Firebase Authentication (Email + Password)
- MongoDB for user profile storage
- Node.js + Express backend
- Basic frontend (HTML + Vanilla JS)
- Secure communication between Firebase client and backend
- Ready for deployment on **Render**

---

## 🗂️ Project Structure

firebase-mongo-auth/
│
├── server.js # Express server setup
├── firebase.js # Firebase Admin SDK setup
├── routes/
│ └── auth.js # Routes for user register/login
├── models/
│ └── User.js # Mongoose model for users
├── .env # Environment variables (not committed)
├── index.html # Signup page
├── login.html # Login page
├── dashboard.html # User dashboard page
└── README.md

yaml
Copy code

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<your-db-name>

yaml
Copy code

---

## 🧩 Running Locally

```bash
npm install
node server.js
Then open:

http://localhost:5000 → Signup page

<<<<<<< HEAD
http://localhost:5000/login.html → Login page
=======
http://localhost:5000/login.html → Login page
>>>>>>> 79275dd (Moved project files into src folder for Render)
