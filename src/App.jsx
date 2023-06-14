import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import CustomInputLabel from "./components/CustomInputLabel.jsx";
import Signon from "./components/Signon.jsx";
import Login from "./components/Signin.jsx";

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
  // is User Signed In local state
  const [isUserSignedIn, setIsUserSignedIn] = React.useState(false);

  // Initialize Firebase Authentication and get a reference to the service
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  console.log({ auth, app });

  return (
    <Grid className="root-container">
      <Login setIsUserSignedIn={setIsUserSignedIn} auth={auth} />
      <Typography variant="h4">
        isUserSignedIn: {isUserSignedIn.toString()}
      </Typography>
      <Signon setIsUserSignedIn={setIsUserSignedIn} auth={auth} />
    </Grid>
  );
};

export default App;
