import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaltRating={3}
    />
    <StarRating maxRating={10} color="red" size={22} /> */}
  </React.StrictMode>
);
