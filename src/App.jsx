import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import CustomInputLabel from "./components/CustomInputLabel.jsx";
// import Login from "./components/Login.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyBBXO8uQeF08I6jyAMZaPMNyZz1fS42Srk",
  authDomain: "meinanproject.firebaseapp.com",
  projectId: "meinanproject",
  storageBucket: "meinanproject.appspot.com",
  messagingSenderId: "505519465081",
  appId: "1:505519465081:web:42eb7b4dce1471222e2aa8",
  measurementId: "G-6BZ4LSKZJE",
};

const App = (params) => {
  // Initialize Firebase Authentication and get a reference to the service
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  console.log({ auth, app });

  const signon = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log({ user, userCredential });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <Grid className="root-container">
      <CustomInputLabel
        type="none"
        label="Email"
        smallMSG="We do not share your email address"
        onInputChange={(change) => {
          setEmail(change);
        }}
      />
      <CustomInputLabel
        type="none"
        label="Password"
        smallMSG="We got top of the bar security"
        onInputChange={(change) => {
          setPassword(change);
        }}
      />
      <Typography variant="h6">Email Entered: {email}</Typography>
      <Typography variant="h6">Password Entered: {password}</Typography>
      <button onClick={signon}>Sign On</button>
      {/* <Login /> */}
    </Grid>
  );
};

export default App;
