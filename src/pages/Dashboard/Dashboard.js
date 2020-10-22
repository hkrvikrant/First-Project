import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchDashboardData } from "./actions";

import DashBoardButton from "../../components/DashBoardBtn/DashBoardBtn";

import DemoCarousel from "../../components/Carousel/carousel";

import { MainWrap } from "../../container/Style";

import Loader from "../../CommonComponents/Loader/Loader";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDashboardData());
  }

  render() {
    const { error, loading, myFeedItems, carouselData } = this.props;
    if (error) {
      return <div>Something went wrong !!!!!</div>;
    }

    if (loading) {
      return <Loader />;
    }
    return (
      <MainWrap>
        <DemoCarousel
          bannerData={carouselData}
          indicator={true}
          button={true}
        />
        <DashBoardButton myFeedNavs={myFeedItems} />
      </MainWrap>
    );
  }
}
const mapStateToProps = (state) => ({
  myFeedItems: state.myFeedItems,
  carouselData: state.carouselData,
  loading: state.loading,
  error: state.error,
});
export default connect(mapStateToProps)(Dashboard);
