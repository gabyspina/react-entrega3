import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsQy9j3oY7logvlA5K_wOtI4ORzF6YBR8",
  authDomain: "my-pet-shop-8cbeb.firebaseapp.com",
  databaseURL: "https://my-pet-shop-8cbeb-default-rtdb.firebaseio.com",
  projectId: "my-pet-shop-8cbeb",
  storageBucket: "my-pet-shop-8cbeb.appspot.com",
  messagingSenderId: "517162159242",
  appId: "1:517162159242:web:89086fbfcb5a48965d7173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);