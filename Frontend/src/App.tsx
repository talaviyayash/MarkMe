import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import Route from "./route/Route";
import theme from "./description/theme/theme.ts";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
