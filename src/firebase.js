import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAciXBmfFF07dJ5-OQpUbTOtOmS28DIcSk",
  authDomain: "elevate-infra-22f7b.firebaseapp.com",
  projectId: "elevate-infra-22f7b",
  storageBucket: "elevate-infra-22f7b.firebasestorage.app",
  messagingSenderId: "63242882410",
  appId: "1:63242882410:web:21d24ab7e440f39e9c2913",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;