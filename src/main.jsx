import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBBXO8uQeF08I6jyAMZaPMNyZz1fS42Srk",
	authDomain: "meinanproject.firebaseapp.com",
	projectId: "meinanproject",
	storageBucket: "meinanproject.appspot.com",
	messagingSenderId: "505519465081",
	appId: "1:505519465081:web:42eb7b4dce1471222e2aa8",
	measurementId: "G-6BZ4LSKZJE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log({ app, analytics });

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
