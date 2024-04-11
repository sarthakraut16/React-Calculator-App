import { useState } from "react";
import "./App.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import Heading from "./components/Heading";

function App() {
  let [calVal, setCalVal] = useState("");

  const calculate = (buttonText)=>{
    console.log(buttonText);
    if(buttonText === "AC"){
      setCalVal("")
    }
    else if(buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className="calculator">
      <Heading/>
      <Display displayValue={calVal} />
      <ButtonsContainer onCalculate ={calculate} />
    </div>
  );
}

export default App;
