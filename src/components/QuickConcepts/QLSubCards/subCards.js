import React from "react";

import { Subcards, Card, Type } from "./Style";

const SubCards = (props) => {
  return (
    <Subcards>
      {props.data.map((p, index) => (
        <Card key={p.id}>
          <img
            src={require(`../../../assests/Images/${p.image}.png`)}
            alt="card images"
          />
          <p>{p.title}</p>
          <span>{p.timing} min read</span>
          <Type>{p.type}</Type>
        </Card>
      ))}
    </Subcards>
  );
};
export default SubCards;
