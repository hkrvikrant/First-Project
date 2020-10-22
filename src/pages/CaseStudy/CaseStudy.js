import React, { Component } from "react";

import { connect } from "react-redux";

import DemoCarousel from "../../components/Carousel/carousel";

import { fetchViewCaseStudyData } from "./actions";

import CaseStudyTabs from "../../components/CaseStudyTabs/caseStudyTabs";

import { MainWrap } from "../../container/Style";

import Loader from "../../CommonComponents/Loader/Loader";

class ViewCaseStudyPage extends Component {
  state = {
    Bannerloader: true,
    caseStudyTabs: [
      {
        buttonName: "About",
        id: 0,
      },
      {
        buttonName: "Scope & Outcome",
        id: 1,
      },
      {
        buttonName: "Team & Stakeholders",
        id: 2,
      },
      {
        buttonName: "Toolkits",
        id: 3,
      },
    ],
    buttonState: 0,
    tabLoader: false,
    viewDetailedCaseStudy: false,
  };
  componentDidMount() {
    this.props.dispatch(fetchViewCaseStudyData());
  }
  buttonHandler = (id) => {
    this.setState({ buttonState: id });
  };
  viewDetailedCaseButton = () => {
    this.setState({ viewDetailedCaseStudy: true });
  };
  render() {
    const { error, loading, caseStudyBanner, cardData, tabData } = this.props;

    if (error) {
      return <div>Something went wrong !!!!!</div>;
    }

    if (loading) {
      return <Loader />;
    }
    return (
      <MainWrap>
        <DemoCarousel
          bannerData={caseStudyBanner}
          indicator={false}
          button={false}
        />
        <CaseStudyTabs
          caseStudyTab={this.state.caseStudyTabs}
          buttonState={this.state.buttonState}
          buttonTabHandler={this.buttonHandler}
          youMayLike={cardData}
          tabLoading={this.state.tabLoader}
          tabsContent={tabData}
          DetailedCaseStudy={this.state.viewDetailedCaseStudy}
          caseStudyHandler={this.viewDetailedCaseButton}
        />
      </MainWrap>
    );
  }
}

const mapStateToProps = (state) => ({
  caseStudyBanner: state.caseStudyBanner,
  tabData: state.tabData,
  cardData: state.cardData,
  loading: state.loading,
  error: state.error,
});
export default connect(mapStateToProps)(ViewCaseStudyPage);
