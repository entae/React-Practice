import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        // Having a '+' in front of newValue forces the conversion of the string value to be treated as a number value
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid ? (
        <p className="center">Please enter a duration greater than 0</p>
      ) : (
        <ResultsTable input={userInput} />
      )}
    </>
  );
}

export default App;
