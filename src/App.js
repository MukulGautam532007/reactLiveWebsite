import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React from "react";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Wether Dark mode is Enable or Not
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
  const tooglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#061744";
      showAlert("Dark mode is Enabled.", "success");
      document.title = "TextUtiles - Dark Mode";

      // setInterval(() => {
      // document.title ='TexUtiles is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title ='Install TextUtiles Now';
      //   }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is Enabled.", "success");
      document.title = "TextUtiles - Light Mode";
    }
  };

  const togglemodeDanger = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#943b3b";
      // document.body.style.color = "white";
      showAlert("Danger Mode is Enabled.", "success");
      document.title = "TextUtiles - Danger Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled.", "success");
      document.title = "TextUtiles - Light Mode";
    }
  };

  return (
    <>

{/* <Router> */}
      <Navbar
        title="TextUtiles"
        aboutText="About"
        mode={mode}
        tooglemode={tooglemode}
        togglemodeDanger={togglemodeDanger}
      />
      <Alert alert={alert} />

        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}

            {/* <Route path="/"> */}
              <TextForm
                showAlert={showAlert}
                heading="Enter Your Text to Analyze Below"
                mode={mode}
              />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
