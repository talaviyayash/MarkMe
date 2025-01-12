import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Route from "./router/Route";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <Provider store={store}>
        <BrowserRouter>
          <Route />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
