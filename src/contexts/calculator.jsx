/**
 * @file contexts/calculator.jsx
 * @brief Context in charge of managing calculator memory and executing
 * calculations.
 */

import React, { useState, useEffect, useContext } from "react";
const Context = React.createContext();

export const MathOperations = {
  None: -1,
  Add: 0,
  Subtract: 1,
  Multiply: 2,
  Divide: 3,
};

const CalculatorProvider = ({ children }) => {
  const [displayNumberString, setDisplayNumberString] = useState("");
  const [displayNumber, setDisplayNumber] = useState(0);
  const [previousNumber, setPreviousNumber] = useState(0);
  const [isPreviousNumberSet, setPreviousNumberSet] = useState(false);
  const [operation, setOperation] = useState(MathOperations.None);
  const [evaluated, setEvaluated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    setDisplayNumber(Number(displayNumberString));
  }, [displayNumberString]);

  const clearDisplay = () => {
    setDisplayNumberString("");
    setPreviousNumber(0);
    setPreviousNumberSet(false);
  };

  const pushDigit = (digit) => {
    if (evaluated === true || error !== "") {
      clearDisplay();
      setEvaluated(false);
      setOperation(MathOperations.None);
    }

    if (displayNumberString.length === 8) {
      return;
    }

    if (
      typeof digit === "number" ||
      (digit === "." && displayNumberString.includes(".") === false)
    )
      setDisplayNumberString((str) => str + digit.toString());
  };

  const popDigit = () => {
    if (evaluated === true || error !== "") {
      clearDisplay();
      setEvaluated(false);
      setOperation(MathOperations.None);
    }

    if (displayNumberString !== "") {
      setDisplayNumberString((str) => str.slice(0, -1));
    }
  };

  const evaluate = () => {
    if (evaluated === true) {
      return;
    }

    let result;
    switch (operation) {
      case MathOperations.Add:
        result = previousNumber + displayNumber;
        break;
      case MathOperations.Subtract:
        result = previousNumber - displayNumber;
        break;
      case MathOperations.Multiply:
        result = previousNumber * displayNumber;
        break;
      case MathOperations.Divide:
        if (displayNumber === 0) {
          setError("Division By Zero");
          return;
        }
        result = previousNumber / displayNumber;
        break;
      default:
        return;
    }

    if (result > 99999999) {
      setError("Overflow");
      return;
    }

    setPreviousNumber(0);
    setPreviousNumberSet(false);
    setDisplayNumberString(result.toString());
    setEvaluated(true);
  };

  const setMathOperation = (operation) => {
    if (error !== "") {
      return;
    }

    setOperation(operation);
    setPreviousNumber(displayNumber);
    setPreviousNumberSet(true);
    setDisplayNumberString("");
    setEvaluated(false);
  };

  return (
    <Context.Provider
      value={{
        displayNumber,
        previousNumber,
        isPreviousNumberSet,
        error,
        pushDigit,
        popDigit,
        clearDisplay,
        evaluate,
        setMathOperation,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CalculatorProvider;
export const useCalculatorContext = () => useContext(Context);
