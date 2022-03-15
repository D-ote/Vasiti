import { useState } from "react";
import "./App.css";
import { ReviewContext } from "./context/context";
import { LandingPage } from "./pages/LandingPage/LandingPage";

function App() {
  const [review, setReview] = useState([]);

  return (
    <ReviewContext.Provider value={{ review, setReview }}>
      <LandingPage />
    </ReviewContext.Provider>
  );
}

export default App;
