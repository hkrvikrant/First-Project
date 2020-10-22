import React from "react";

import {
  QuickLearn,
  Cards,
  ImageContent,
  MainContent,
  Button,
} from "./Style";

const QuickLearnCard = (props) => {
  return (
    <QuickLearn>
      {props.data.map((p, index) => (
        <Cards key={p.id}>
          <ImageContent>
            <img
              src={require("../../../assests/Images/group-3.svg")}
              alt="wuick learn card"
            />
          </ImageContent>
          <MainContent>
            <span>{p.LearnType}</span>
            <p>{p.title}</p>
            <Button>
              <span>{p.timing} min course</span>
              <button>Explore</button>
            </Button>
          </MainContent>
        </Cards>
      ))}
    </QuickLearn>
  );
};
export default QuickLearnCard;
