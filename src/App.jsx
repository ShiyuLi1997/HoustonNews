import React from "react";
import { Grid, Typography } from "@mui/material";

import CustomInputLabel from "./components/CustomInputLabel.jsx";
// import Login from "./components/Login.jsx";
const App = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
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
			{/* <Login /> */}
		</Grid>
	);
};

export default App;
