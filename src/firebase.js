
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHM1bW1-gLFOdEj9FZCuAz6VK_ORC3ZA0",
  authDomain: "elevate-infra-1502d.firebaseapp.com",
  projectId: "elevate-infra-1502d",
  storageBucket: "elevate-infra-1502d.firebasestorage.app",
  messagingSenderId: "571433572889",
  appId: "1:571433572889:web:dfb4e11a0fe4a074f72888",
  measurementId: "G-XPE98J5DPW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
