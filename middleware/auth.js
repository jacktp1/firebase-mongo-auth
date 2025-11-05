// middleware/auth.js
import admin from '../firebase.js';

export async function authenticate(req, res, next) {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    // Verify token with Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.uid = decodedToken.uid; // attach Firebase user ID to the request

    next(); // continue to next middleware or route
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
  }
}
