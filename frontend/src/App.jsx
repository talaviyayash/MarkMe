import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Route from "./router/Route";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </>
  );
};

export default App;
