import styled from "styled-components";

export const AppWrap = styled.div`
  margin: auto;
  max-width: 1280px;
`;
export const AppContainer = styled.div`
  display: flex;
`;
export const MainContainer = styled.div`
  width: calc(85% - 60px);
  margin-left: 15%;
  padding: 0px 30px;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    margin-left: 0;
    width: calc(100% - 60px);
  }
`;
export const MainWrap = styled.div`
  width: 90%;
`;
