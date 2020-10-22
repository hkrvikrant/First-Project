import React, { Component } from "react";

import {
  LoginContent,
  InputContent,
  Button,
  ErrorMessage,
  Container,
} from "../Login/style";

import Input from "../../CommonComponents/Input/input";

import validate from "../../Validation/validation";

import Loader from "../../CommonComponents/Loader/Loader";

import fire from "../../Firebase/firebase";

class SignUp extends Component {
  state = {
    signUpForm: {
      FullName: {
        label: "FullName",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "FullName",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 20,
        },
        valid: false,
        touched: false,
      },
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
      },
      ConfirmPassword: {
        label: "Confirm Password",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Confirm Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 8,
          maxLength: 15,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    loading: false,
  };
  inputChangedHandler = (event, InputIdentifier) => {
    const updatedSignUpForm = {
      ...this.state.signUpForm,
    };
    const UpdatedFormElement = {
      ...updatedSignUpForm[InputIdentifier],
    };
    UpdatedFormElement.value = event.target.value;
    UpdatedFormElement.valid = validate(
      UpdatedFormElement.value,
      UpdatedFormElement.validation
    );
    UpdatedFormElement.touched = true;
    updatedSignUpForm[InputIdentifier] = UpdatedFormElement;
    this.setState({ signUpForm: updatedSignUpForm });
    this.setState({ formIsValid: false });
  };

  signUp = (e) => {
    if (
      this.state.signUpForm.FullName.value !== "" &&
      this.state.signUpForm.UserName.value !== "" &&
      this.state.signUpForm.Password.value !== "" &&
      this.state.signUpForm.ConfirmPassword.value !== "" &&
      this.state.signUpForm.Password.value ===
        this.state.signUpForm.ConfirmPassword.value
    ) {
      this.setState({ formIsValid: false });
      this.setState({ loading: true });
      e.preventDefault();
      fire
        .auth()
        .createUserWithEmailAndPassword(
          this.state.signUpForm.UserName.value,
          this.state.signUpForm.Password.value
        )
        .then((u) => {
          this.props.history.push({
            pathname: "/",
          });
        });
    } else {
      if(this.state.signUpForm.Password.value !==
        this.state.signUpForm.ConfirmPassword.value){
          this.setState({ passwordValidation: true });
        }
        else{
          this.setState({ formIsValid: true });
        }
    }
  };

  loginHandler = () => {
    this.props.history.push({
      pathname: "/",
    });
  };
  render() {
    let UserDetailsArr = [];
    for (let key in this.state.signUpForm) {
      UserDetailsArr.push({
        id: key,
        config: this.state.signUpForm[key],
      });
    }
    let formValid = "";
    if (this.state.formIsValid) {
      formValid = (
        <ErrorMessage>Please Enter the valid user details</ErrorMessage>
      );
    }
    else if(this.state.passwordValidation){
      formValid = (
        <ErrorMessage>Incorrect password</ErrorMessage>
      );
    }
    return (
      <Container style={{ textAlign: "center" }}>
        {this.state.loading === true ? (
          <Loader />
        ) : (
          <LoginContent>
            <h2>Sign Up</h2>
            <InputContent>
              {UserDetailsArr.map((p) => (
                <Input
                  key={p.id}
                  elementType={p.config.elementType}
                  label={p.config.label}
                  elementConfig={p.config.elementConfig}
                  value={p.config.value}
                  invalid={!p.config.valid}
                  touched={p.config.touched}
                  changed={(event) => this.inputChangedHandler(event, p.id)}
                />
              ))}
              {formValid}
              <Button
                onClick={(event) => {
                  this.signUp(event);
                }}
              >
                Sign Up
              </Button>
              <Button
                onClick={() => {
                  this.loginHandler();
                }}
              >
                Log in
              </Button>
            </InputContent>
          </LoginContent>
        )}
      </Container>
    );
  }
}
export default SignUp;
