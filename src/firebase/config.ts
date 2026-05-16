// SAITED 2026 — Firebase configuration
//
// Setup steps:
// 1. Go to https://console.firebase.google.com
// 2. Create (or open) your Firebase project
// 3. Enable Firestore: Build → Firestore Database → Create database (start in test mode)
// 4. Add a Web App: Project Settings → Your Apps → </> Web → register app
// 5. Copy the firebaseConfig object below and replace the placeholder values
// 6. Your Firestore data will appear under the "registrations" collection

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRShDFZSV2RkXIKnuGv7zEhQQR0-Jy5R4",
  authDomain: "saited-46254.firebaseapp.com",
  projectId: "saited-46254",
  storageBucket: "saited-46254.firebasestorage.app",
  messagingSenderId: "275142200567",
  appId: "1:275142200567:web:d54bd39eaba324bdf217f2",
  measurementId: "G-GZ35ZB0HMW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
