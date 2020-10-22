import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchContactData } from "./actions";

import Loader from "../../CommonComponents/Loader/Loader";

import './Style.css';

class ContactPage extends Component {
  componentDidMount() {
    fetchContactData();
  }

  render() {
    const { error, loading } = this.props;
    // console.log(error)
    if (error) {
      return <div>Something went wrong !!!!!</div>;
    }

    if (loading) {
      return <Loader />;
    }
    return (
        <div class="container">
        <h3>Contact Form</h3>
            <form>
                <input name="name" type="text1" id="name" placeholder="Your Name" required="required" class="error"></input>

                <input name="email" type="email" id="email" placeholder="Email Address" required="required" class="error"></input>
                
                <input name="subject" type="text1" id="subject" placeholder="Subject" required="required" class="error"></input>
            
                <textarea id="message" name="message" placeholder="Message" cols="50" rows="8"></textarea>
            
                <input type="submit" class="submit button medium border" id="submit" value="Submit Message"></input>
            </form>
        </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
});
export default connect(mapStateToProps,{fetchContactData})(ContactPage);
