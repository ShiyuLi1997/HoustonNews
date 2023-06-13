import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Login successful
				const user = userCredential.user;
				console.log("Logged in as:", user.email);
			})
			.catch((error) => {
				// Login error
				console.log("Login error:", error);
			});
	};

	return (
		<div>
			<input
				type="email"
				value={email}
				onChange={handleEmailChange}
				placeholder="Email"
			/>
			<input
				type="password"
				value={password}
				onChange={handlePasswordChange}
				placeholder="Password"
			/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
