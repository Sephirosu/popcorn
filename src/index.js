import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import RatingStars from "./RatingStars";
import { useState } from "react";

// const Test = () => {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <RatingStars color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <RatingStars
      maxRating={5}
      messages={["Terrible", "Awful", "Okay", "Good", "Awesome"]}
    />
    <RatingStars
      maxRating={5}
      color="red"
      size={24}
      className="test"
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
