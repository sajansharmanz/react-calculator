import { useState } from "react";
import Body from "./components/body/body.component";
import Screen from "./components/screen/screen.component";
import ButtonContainer from "./components/button-container/button-container.component";

import "./App.css";

function App() {
  const [results, setResults] = useState("");

  const onClick = (name) => {
    if (name === "C") {
      clear();
    } else if (name === "DEL") {
      setResults(results.slice(0, -1));
    } else if (name === "=") {
      calculate();
    } else {
      setResults(results + name);
    }
  };

  const clear = () => {
    setResults("");
  };

  const calculate = () => {
    let calcString = "";

    if (results.includes("--")) {
      calcString = results.replace("--", "+");
    } else {
      calcString = results;
    }

    const evaluated = eval(calcString);

    setResults(evaluated);
  };

  return (
    <div className="App">
      <Body>
        <Screen results={results} />
        <ButtonContainer clickFn={onClick} />
      </Body>
    </div>
  );
}

export default App;
