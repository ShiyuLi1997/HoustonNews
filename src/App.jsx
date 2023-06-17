import React, { useState } from "react";
import { Grid } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import Signon from "./components/Signon.jsx";
import Login from "./components/Login.jsx";
import SimpleYoutubeAPI from "./components/SimpleYoutubeAPI.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyBBXO8uQeF08I6jyAMZaPMNyZz1fS42Srk",
  authDomain: "meinanproject.firebaseapp.com",
  projectId: "meinanproject",
  storageBucket: "meinanproject.appspot.com",
  messagingSenderId: "505519465081",
  appId: "1:505519465081:web:42eb7b4dce1471222e2aa8",
  measurementId: "G-6BZ4LSKZJE",
};

// Initialize Cloud Storage and get a reference to the service

const App = (params) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Initialize Firebase Authentication and get a reference to the service
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const storage = getStorage(app);
  console.log({ auth, app });

  return (
    <Grid className="root-container">
      <Login
        setIsUserSignedIn={setIsUserSignedIn}
        setUser={setUser}
        auth={auth}
      />
      <Signon
        setIsUserSignedIn={setIsUserSignedIn}
        setUser={setUser}
        auth={auth}
      />

      <SimpleYoutubeAPI />
    </Grid>
  );
};

export default App;
