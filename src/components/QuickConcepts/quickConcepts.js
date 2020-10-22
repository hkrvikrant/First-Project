import React, { Component } from "react";

import QuickLearnCard from "./QLCard/QLCard";

import SubCards from "./QLSubCards/subCards";

import axios from "../../Axios/Axios";

import Loader from "../../CommonComponents/Loader/Loader";

class QuickConcepts extends Component {
  state = {
    quickLearnData: [],
    subCardsData: [],
    loader: false,
  };
  componentDidMount() {
    axios.get("/dashboard.json").then((response) => {
      this.setState({
        quickLearnData: Object.values(response.data.quickLearnData),
      });
      this.setState({
        subCardsData: Object.values(response.data.subCardsData),
      });
      setTimeout(() => this.setState({ loader: true }), 3000);
    });
  }
  render() {
    return (
      <div>
        {this.state.loader === false ? (
          <Loader />
        ) : (
          <div>
            <QuickLearnCard data={this.state.quickLearnData}></QuickLearnCard>
            <SubCards data={this.state.subCardsData}></SubCards>
          </div>
        )}
      </div>
    );
  }
}

export default QuickConcepts;
