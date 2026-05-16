import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TO CONFIGURE: Replace all values below with your Firebase project config
// Get it from: console.firebase.google.com
// → Select your project → Project Settings → Your Apps → Web App → Config
// Also enable Firestore at: Build → Firestore Database → Create Database → Test Mode

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
