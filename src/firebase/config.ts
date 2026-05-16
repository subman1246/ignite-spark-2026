// SAITED 2026 — Firebase configuration
// Get config from: console.firebase.google.com → Project Settings → Your Apps → Web App → Config
// Enable Firestore at: Build → Firestore Database → Create Database → Test Mode

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRShDFZSV2RkXIKnuGv7zEhQQR0-Jy5R4",
  authDomain: "saited-46254.firebaseapp.com",
  projectId: "saited-46254",
  storageBucket: "saited-46254.firebasestorage.app",
  messagingSenderId: "275142200567",
  appId: "1:275142200567:web:d54bd39eaba324bdf217f2",
  measurementId: "G-GZ35ZB0HMW",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
