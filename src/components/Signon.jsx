import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";

import CustomInputLabel from "./CustomInputLabel.jsx";
import "./styles.css";

const Signon = (props) => {
  // take setIsUserSignedIn from props
  const { setIsUserSignedIn, auth } = props;

  // email and password are the states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // signon callback function
  const signonCallback = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed On
        const user = userCredential.user;
        console.log({ user, userCredential });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <Grid className="signin-root-container">
      <Typography variant="h6">Please Sign On to Continue...</Typography>
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
      <button onClick={signonCallback}>Sign On</button>
      <br />
      <br />
      <br />
      <Typography variant="h6">Email Entered: {email}</Typography>
      <Typography variant="h6">Password Entered: {password}</Typography>
    </Grid>
  );
};

export default Signon;
