import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {  Route,Routes } from "react-router-dom";

//  import { Switch } from "react-router";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
    <Navbar title="TextUtil" aboutText="About US" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      <div className="container my-3">
         
        <Routes>
              <Route exact path="/about" element={<About />} />
                <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter text to get some" mode={mode} />} />
            </Routes>
         
       
      </div>
    </>
  );
}

export default App;
