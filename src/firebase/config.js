import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIL-8yGpB1sjh1khHFZlbxKyNKXMJZTzg",
  authDomain: "u1-porfolio.firebaseapp.com",
  projectId: "u1-porfolio",
  storageBucket: "u1-porfolio.firebasestorage.app",
  messagingSenderId: "1070957784970",
  appId: "1:1070957784970:web:35faea8b55767e3911a273",
  measurementId: "G-4XQ4YK4RZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
