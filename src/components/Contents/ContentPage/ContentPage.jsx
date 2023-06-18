import {
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signin from "../../Pages/Login";

function ContentPage({ children, ...props }) {
  return (
    <Paper
      sx={{
        bgcolor: "##f0efed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      variant="outlined"
      square
    >
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MeiNan News
            </Typography>

            <nav>
              {/* <Button color="inherit">
                <Link to="/">Home</Link>
              </Button> */}
              {/* <Button color="inherit">
                <Link to="/createpost">Create Post</Link>
              </Button> */}
              <Button color="inherit">
                <Link to="/signin">Sign In</Link>
              </Button>
            </nav>
          </Toolbar>
        </AppBar>
        {children}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/createpost" element={<CreatePost />} /> */}
        </Routes>
      </Router>
    </Paper>
  );
}

export default ContentPage;
