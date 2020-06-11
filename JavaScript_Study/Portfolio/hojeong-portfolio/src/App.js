import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import GridTest from "./Grid/gridtest";

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: "#11cb5f" }
  }
});

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />

      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Button color="primary">Primary</Button>
          <Button color="secondary">secondary</Button>
        </ThemeProvider>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <GridTest />
      </React.Fragment>
    </div>
  );
}

export default App;
