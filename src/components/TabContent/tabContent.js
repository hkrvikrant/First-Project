import React from "react";

import AboutTab from "./About";

import ScopeAndOutcomeTab from "./scopeAndOutcome";

import Loader from "../../CommonComponents/Loader/Loader";

import ToolKits from "./Toolkits";

import { ContentWrapper, ViewDetailedCaseStudy } from "./Style";

const TabContent = (props) => {
  return (
    <ContentWrapper>
      {Object.keys(props.tabsContent).length > 0 ? (
        <div>
          <AboutTab data={props.tabsContent["aboutData"]} />
          <ScopeAndOutcomeTab data={props.tabsContent["scopeOutcomeData"]} />
          {props.viewDetailedCaseStudy === false ? (
            <ViewDetailedCaseStudy
              onClick={() => {
                props.caseStudyButtonHandler();
              }}
            >
              View Detailed Casestudy
            </ViewDetailedCaseStudy>
          ) : (
            <ToolKits />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </ContentWrapper>
  );
};
export default TabContent;
