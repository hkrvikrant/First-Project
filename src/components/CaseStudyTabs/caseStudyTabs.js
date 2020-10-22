import React from "react";

import {
  Tabs,
  Tab,
  ContainWrap,
  TabsHeader,
  RatingsContainer,
} from "./Style";

import TabContent from "../TabContent/tabContent";

import YMLikeCard from "../YMLikeCard/YMLikeCard";

import Loader from "../../CommonComponents/Loader/Loader";

const CaseStudyTabs = (props) => {
  return (
    <div>
      <TabsHeader>
        <Tabs>
          {props.caseStudyTab.map((p, index) => (
            <Tab
              key={p.id}
              onClick={() => {
                props.buttonTabHandler(index);
              }}
              active={p.id === props.buttonState}
            >
              <a href={"#" + p.buttonName}>{p.buttonName}</a>
            </Tab>
          ))}
        </Tabs>
        <RatingsContainer>
          <img
            src={require("../../assests/Images/star-icon.png")}
            alt="Star icon"
          />
          <span>Interested?</span>
          <img
            src={require("../../assests/Images/save-icon.png")}
            alt="Save icon"
          />
        </RatingsContainer>
      </TabsHeader>
      {props.tabLoading === true ? (
        <Loader />
      ) : (
        <ContainWrap>
          <TabContent
            tabsContent={props.tabsContent}
            viewDetailedCaseStudy={props.DetailedCaseStudy}
            caseStudyButtonHandler={props.caseStudyHandler}
          />
          <YMLikeCard cardData={props.youMayLike} />
        </ContainWrap>
      )}
    </div>
  );
};

export default CaseStudyTabs;
