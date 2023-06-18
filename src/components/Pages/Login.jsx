import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";

import CustomInputLabel from "../CustomInputLabel.jsx";
import "../styles.css";

const Signin = (props) => {
  // take setIsUserSignedIn from props
  const { setIsUserSignedIn, auth } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log({ user, userCredential });
        setIsUserSignedIn(true);
        alert("User signed in!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <Grid className="signin-root-container">
      <Typography variant="h6">Please Sign In to Continue...</Typography>
      <br />
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
      <button onClick={handleSignin}>Sign In</button>
      <br />
      <br />
      <br />
      <Typography variant="h6">Email Entered: {email}</Typography>
      <Typography variant="h6">Password Entered: {password}</Typography>
    </Grid>
  );
};

export default Signin;
