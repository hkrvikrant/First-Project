import React, { Component } from "react";

import {
  LogoWrapper,
  Logo,
  Wrapper,
  Navigations,
  GetInTouch,
  SideBarNavigation,
} from "./Style";

class SideBar extends Component {

  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Logo>
            <img
              src={require("../../assests/Images/group-6.png")}
              alt="nav button"
            ></img>
          </Logo>
          SBG.ai
        </LogoWrapper>
        <SideBarNavigation>
          <Navigations>
            <li>
              <button>
              <a href="/dashBoard" class="active" activeClassName="current">
                <img
                  src={require("../../assests/Images/group-2.png")}
                  alt="nav button"
                ></img>
              </a>
              </button>
            </li>
            <li>
              <button>
                <img
                  src={require("../../assests/Images/group-copy.png")}
                  alt="nav button"
                ></img>
              </button>
            </li>
            <li>
              <button>
                <a href="/contact">
                <img
                  src={require("../../assests/Images/group-copy-2.png")}
                  alt="nav button"
                >
                </img>
                </a>
              </button>
            </li>
          </Navigations>
          <GetInTouch>
            <img
              src={require("../../assests/Images/message-icon.png")}
              alt="nav button"
            ></img>
            <span>Get in touch</span>
          </GetInTouch>
        </SideBarNavigation>
      </Wrapper>
    );
  }
}
export default SideBar;
