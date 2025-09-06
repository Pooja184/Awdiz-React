import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UseContextCom from "./22aug/UseContextCom.jsx";
import { store } from '../../Day4-01-08/src/23aug/redux/store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      {/* <UseContextCom> */}
      <Provider store={store}>

        <App />
      </Provider>
      {/* </UseContextCom> */}
    </StrictMode>
  </BrowserRouter>
);
