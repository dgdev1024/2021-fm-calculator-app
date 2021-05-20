/**
 * @file components/controls/index.jsx
 * @brief Displays the calculator's control buttons below the display.
 */

import React from "react";
import {
  MathOperations,
  useCalculatorContext,
} from "../../contexts/calculator";
import "./index.scss";

export default () => {
  const { pushDigit, popDigit, clearDisplay, evaluate, setMathOperation } =
    useCalculatorContext();

  return (
    <div className="controls">
      <div className="container controls__container">
        <button
          tabIndex="4"
          className="controls__button"
          onClick={() => pushDigit(7)}
        >
          7
        </button>
        <button
          tabIndex="5"
          className="controls__button"
          onClick={() => pushDigit(8)}
        >
          8
        </button>
        <button
          tabIndex="6"
          className="controls__button"
          onClick={() => pushDigit(9)}
        >
          9
        </button>
        <button
          tabIndex="7"
          className="controls__button controls__button--delete"
          onClick={() => popDigit()}
        >
          Del
        </button>
        <button
          tabIndex="8"
          className="controls__button"
          onClick={() => pushDigit(4)}
        >
          4
        </button>
        <button
          tabIndex="9"
          className="controls__button"
          onClick={() => pushDigit(5)}
        >
          5
        </button>
        <button
          tabIndex="10"
          className="controls__button"
          onClick={() => pushDigit(6)}
        >
          6
        </button>
        <button
          tabIndex="11"
          className="controls__button"
          aria-label="Addition"
          title="Addition"
          onClick={() => setMathOperation(MathOperations.Add)}
        >
          +
        </button>
        <button
          tabIndex="12"
          className="controls__button"
          onClick={() => pushDigit(1)}
        >
          1
        </button>
        <button
          tabIndex="13"
          className="controls__button"
          onClick={() => pushDigit(2)}
        >
          2
        </button>
        <button
          tabIndex="14"
          className="controls__button"
          onClick={() => pushDigit(3)}
        >
          3
        </button>
        <button
          tabIndex="15"
          className="controls__button"
          aria-label="Subtraction"
          title="Subtraction"
          onClick={() => setMathOperation(MathOperations.Subtract)}
        >
          -
        </button>
        <button
          tabIndex="16"
          className="controls__button"
          aria-label="Insert Decimal Point"
          title="Insert Decimal Point"
          onClick={() => pushDigit(".")}
        >
          .
        </button>
        <button
          tabIndex="17"
          className="controls__button"
          onClick={() => pushDigit(0)}
        >
          0
        </button>
        <button
          tabIndex="18"
          className="controls__button"
          aria-label="Division"
          title="Division"
          onClick={() => setMathOperation(MathOperations.Divide)}
        >
          /
        </button>
        <button
          tabIndex="19"
          className="controls__button"
          aria-label="Multiplication"
          title="Multiplication"
          onClick={() => setMathOperation(MathOperations.Multiply)}
        >
          x
        </button>
        <button
          tabIndex="20"
          className="controls__button controls__button--delete controls__button--reset"
          onClick={() => clearDisplay()}
        >
          Reset
        </button>
        <button
          tabIndex="21"
          className="controls__button controls__button--equals"
          aria-label="Evaluate"
          title="Evaluate"
          onClick={() => evaluate()}
        >
          =
        </button>
      </div>
    </div>
  );
};
