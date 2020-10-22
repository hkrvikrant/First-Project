import React from "react";

import { LikeHeading, LikeContainer, Card } from "./Style";

const YMLikeCard = (props) => {
  return (
    <LikeContainer>
      <LikeHeading>You might like</LikeHeading>
      <Card>
        <div>{props.cardData.title}</div>
        <p>{props.cardData.cardDescription}</p>
        <span>{props.cardData.footerTitle}</span>
      </Card>
    </LikeContainer>
  );
};
export default YMLikeCard;
