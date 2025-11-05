// routes/auth.js
import express from 'express';
import admin from '../firebase.js';
import User from '../models/User.js';

const router = express.Router();

// ===== REGISTER / SAVE USER ROUTE =====
router.post('/register', async (req, res) => {
  try {
    const { uid, name, email, subject1, subject2, subject3 } = req.body;

    // Optional: check if user already exists
    let existingUser = await User.findOne({ uid });
    if (existingUser) {
      return res.status(200).json({ message: 'User already exists', user: existingUser });
    }

    const newUser = new User({
      uid,
      name,
      email,
      subject1,
      subject2,
      subject3
    });

    await newUser.save();
    res.json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ===== GET USER DATA ROUTE =====
router.post('/getUserData', async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = await admin.auth().verifyIdToken(token);
    const email = decoded.email;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token', error: err.message });
  }
});

export default router;
