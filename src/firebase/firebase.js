import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARifcdD4GQhrWjkzv7v-kxlQrargqFnDk",
  authDomain: "react-17563.firebaseapp.com",
  projectId: "react-17563",
  storageBucket: "react-17563.appspot.com",
  messagingSenderId: "819304494781",
  appId: "1:819304494781:web:cfce1a1734a270538f29d4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);