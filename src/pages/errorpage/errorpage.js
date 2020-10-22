import React from "react";
import {
  HeadLine,
  error,
  Message,
  BackButton,
} from "./Style";
const errorpage = () => {
  return (
    <error>
      <HeadLine>404 Page Not Found</HeadLine>
      <img
        src={require("../../assests/Images/404-images.jpg")}
        alt="404Image"
      ></img>
      <Message>
        What you're looking for may have been <br />
        misplaced in Long Term Memory
      </Message>
      <BackButton>
        <a href="/">Back to Homepage</a>
      </BackButton>
    </error>
  );
};
export default errorpage;
