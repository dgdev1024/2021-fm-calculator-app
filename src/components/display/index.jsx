/**
 * @file components/display/index.jsx
 * @brief The calculator's number display.
 */

import React from "react";
import { useCalculatorContext } from "../../contexts/calculator";
import "./index.scss";

export default () => {
  const { displayNumber, previousNumber, isPreviousNumberSet, error } =
    useCalculatorContext();

  return (
    <div className="display">
      <div
        className={`container display__container ${
          error !== "" && "display__container--error"
        }`}
        data-calc-error={error}
      >
        {isPreviousNumberSet && (
          <p className="display__text display__text--previous">
            {previousNumber.toLocaleString()}
          </p>
        )}
        <p className="display__text">{displayNumber.toLocaleString()}</p>
      </div>
    </div>
  );
};
