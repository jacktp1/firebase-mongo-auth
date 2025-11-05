// firebase.js
import admin from 'firebase-admin';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

// Read and parse your service account JSON manually
const serviceAccount = JSON.parse(
  fs.readFileSync('./firebaseServiceAccount.json', 'utf8')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;

