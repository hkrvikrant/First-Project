import React from "react";

import { ErrorMessage, Input } from "../../pages/Login/style";

const InputData = (props) => {
  let inputElement = null;
  let validationError = null;
  let validation = true;
  if (props.invalid && props.touched) {
    validation = false;
    validationError = (
      <ErrorMessage>Please enter a valid {props.label}!</ErrorMessage>
    );
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <Input
          valid={validation}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = <input />;
  }
  return (
    <div>
      <div style={{ position: "relative" }}>{inputElement}</div>
      {validationError}
    </div>
  );
};
export default InputData;
