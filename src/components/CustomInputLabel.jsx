import React from "react";

import {
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
	Grid,
} from "@mui/material";

import "./styles.css";

const CustomInputLabel = (configs) => {
	const { type, label, smallMSG, onInputChange } = configs;
	return (
		<Grid container className="signin-container">
			<FormControl>
				<Grid>
					<InputLabel htmlFor="user-input">{label}</InputLabel>
					<Input
						id="user-input"
						aria-describedby="user-input"
						onChange={(event) => {
							onInputChange(event.target.value);
						}}
					/>
					<FormHelperText id="user-input">{smallMSG}</FormHelperText>
				</Grid>
			</FormControl>
		</Grid>
	);
};

export default CustomInputLabel;
