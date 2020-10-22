import React from "react";

import { Heading, Description } from "./Style";

const AboutTab = (props) => {
  return (
    <div id="About">
      <div>
        <Heading>{props.data.title}</Heading>
        <Description>
          <p>
            {props.data.description}
            <br /> <br />
            {props.data.description1}
          </p>
          <div>{props.data.moreInfoTitle} </div>
          <p>{props.data.moreInfo}</p>
        </Description>
      </div>
    </div>
  );
};

export default AboutTab;
