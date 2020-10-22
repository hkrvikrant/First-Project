import React, { Component } from "react";

import {
  LoginContent,
  InputContent,
  Button,
  ErrorMessage,
  Container,
} from "./style";

import { withRouter } from "react-router-dom";

import validate from "../../Validation/validation";

import Input from "../../CommonComponents/Input/input";

import fire from "../../Firebase/firebase";

import Loader from "../../CommonComponents/Loader/Loader";

class Login extends Component {
  state = {
    loginForm: {
      UserName: {
        label: "UserName",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Username",
        },
        value: "",
        validation: {
          required: true,
          minLength: 10,
          maxLength: 30,
          email: true,
        },
        valid: false,
        touched: false,
        ErrorMessage: 0,
      },
      Password: {
        label: "Password",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 8,
          maxLength: 15,
        },
        valid: false,
        touched: false,
        ErrorMessage: 0,
      },
    },
    formIsValid: false,
    loading: false,
    invalidUserEntry: false,
  };
  inputChangedHandler = (event, InputIdentifier) => {
    const updatedLoginForm = {
      ...this.state.loginForm,
    };
    const UpdatedFormElement = {
      ...updatedLoginForm[InputIdentifier],
    };
    UpdatedFormElement.value = event.target.value;
    UpdatedFormElement.valid = validate(
      UpdatedFormElement.value,
      UpdatedFormElement.validation
    );
    UpdatedFormElement.touched = true;
    updatedLoginForm[InputIdentifier] = UpdatedFormElement;
    this.setState({ loginForm: updatedLoginForm });
    this.setState({ invalidUserEntry: false });
    this.setState({formIsValid : false})
  };
  signUpHandler = () => {
    this.props.history.push({
      pathname: "/SignUp",
    });
  };
  LoginHandler = (e) => {
    if(this.state.loginForm.UserName.value !== "" && this.state.loginForm.Password.value !== ""){
      sessionStorage.setItem("users",true);
      this.setState({formIsValid : false})
      this.setState({ loading: true });
      e.preventDefault();
      fire
        .auth()
        .signInWithEmailAndPassword(
          this.state.loginForm.UserName.value,
          this.state.loginForm.Password.value
        )
        .then((u) => {
          if (this.state.loading === true) {
            this.setState({ loading: false });
            setTimeout(() => this.props.history.push("/dashBoard"), 0);
          }
        })
        .catch((err) => {
          if (this.state.loading === true) {
            this.setState({ loading: false });
          }
          this.setState({ invalidUserEntry: true });
        });
      }
      else{
        this.setState({formIsValid : true})
      }
  };
  render() {
    let UserDetailsArr = [];
    for (let key in this.state.loginForm) {
      UserDetailsArr.push({
        id: key,
        config: this.state.loginForm[key],
      });
    }
    let inValidUser = "";
    if (this.state.invalidUserEntry) {
      inValidUser = <ErrorMessage>Invalid User</ErrorMessage>;
    }
    let formValid = "";
    if (this.state.formIsValid) {
      formValid = <ErrorMessage>Please Enter the valid username and password </ErrorMessage>;
    }
    return (
      <Container style={{ textAlign: "center" }}>
        {this.state.loading === true ? (
          <Loader />
        ) : (
          <LoginContent>
            <h2>User Login</h2>
            <InputContent>
              {inValidUser}
              {UserDetailsArr.map((p) => (
                <Input
                  key={p.id}
                  elementType={p.config.elementType}
                  label={p.config.label}
                  elementConfig={p.config.elementConfig}
                  value={p.config.value}
                  changed={(event) => this.inputChangedHandler(event, p.id)}
                  invalid={!p.config.valid}
                  touched={p.config.touched}
                  ErrorMessage={p.config.ErrorMessage}
                />
              ))}
              {formValid}
              <Button
                onClick={(event) => {
                  this.LoginHandler(event);
                }}
              >
                Log in
              </Button>
              <Button
                onClick={(event) => {
                  this.signUpHandler(event);
                }}
              >
                Sign up
              </Button>
            </InputContent>
          </LoginContent>
        )}
      </Container>
    );
  }
}
export default withRouter(Login);
