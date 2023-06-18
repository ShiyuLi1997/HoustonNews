import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBXO8uQeF08I6jyAMZaPMNyZz1fS42Srk",
  authDomain: "meinanproject.firebaseapp.com",
  projectId: "meinanproject",
  storageBucket: "meinanproject.appspot.com",
  messagingSenderId: "505519465081",
  appId: "1:505519465081:web:42eb7b4dce1471222e2aa8",
  measurementId: "G-6BZ4LSKZJE",
};

// Initialize Firebase Authentication and get a reference to the service
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
console.log({ auth, app });
