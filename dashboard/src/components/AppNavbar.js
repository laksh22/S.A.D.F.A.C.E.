import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";

class AppNavbar extends Component {
  render() {
    return (
      <div>
        <AppBar style={{ background: "#0070c6" }}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Emotions
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default AppNavbar;
