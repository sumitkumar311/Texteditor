import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2b2f32";
      document.title = "TextUtils-Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils";
    }
  };

  return (
    <>
        <Navbar title="Textutils" mode={mode} toggle={toggle} />
        <Textform heading="Enter the text to analyze" mode={mode} />
        {/* <About /> */}
      {/* <Router>
        <Navbar title="Textutils" mode={mode} toggle={toggle} />

        <Routes>
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/topics"  
            element={<Textform heading="Enter the text to analyze" mode={mode} />}
          />
        </Routes>
      </Router> */}
    </>
  );
};

export default App;
