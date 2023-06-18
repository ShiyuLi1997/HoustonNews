import React, { useState } from "react";
import { Grid } from "@mui/material";

import Signon from "./components/Pages/Signon.jsx";
import Login from "./components/Pages/Login.jsx";
import SimpleYoutubeAPI from "./components/utils/SimpleYoutubeAPI.jsx";
import ContentPage from "./components/Contents/ContentPage/ContentPage.jsx";

// Initialize Cloud Storage and get a reference to the service

const App = (params) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    // <Grid className="root-container">
    //   <Login
    //     setIsUserSignedIn={setIsUserSignedIn}
    //     setUser={setUser}
    //     auth={auth}
    //   />
    //   <Signon
    //     setIsUserSignedIn={setIsUserSignedIn}
    //     setUser={setUser}
    //     auth={auth}
    //   />

    //   <SimpleYoutubeAPI />
    // </Grid>
    <ContentPage></ContentPage>
  );
};

export default App;
