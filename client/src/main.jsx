import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {Provider} from 'react-redux';
import axios from "axios";
import { store } from "./store/store.js";

axios.defaults.baseURL = "http://localhost:3000/api/v1";
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>

  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>
);
