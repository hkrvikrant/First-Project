import React, { Component } from "react";

import fire from "../../Firebase/firebase";

import {
  HeaderNavigation,
  HeaderContent,
  ProfileIcon,
  StyledLink,
  ProfileContainer,
  LogOutBtn,
} from "./Style";

class Header extends Component {
  state = {
    navItems: [
      {
        link: "My Dashboard",
        id: 0,
        map: "/dashBoard",
      },
      {
        link: "View CaseStudy",
        id: 1,
        map: "/viewCaseStudy",
      },
    ],
  };
  logOutHandler = () => {
    let alert = window.confirm("Are you sure you want to Logout?");
    if (alert) {
      sessionStorage.setItem("users",false);
      fire.auth().signOut();
    }
  };
  render() {
    return (
      <HeaderContent>
        <HeaderNavigation>
          {this.state.navItems.map((i, index) => (
            <StyledLink key={i.id}>
              <a href={i.map}>{i.link}</a>
            </StyledLink>
          ))}
        </HeaderNavigation>
        <ProfileContainer>
          <ProfileIcon>
            <img
              src={require("../../assests/Images/oval.png")}
              alt="Profile icon"
            />
          </ProfileIcon>
          <LogOutBtn
            onClick={() => {
              this.logOutHandler();
            }}
          >
            LogOut
          </LogOutBtn>
        </ProfileContainer>
      </HeaderContent>
    );
  }
}
export default Header;
