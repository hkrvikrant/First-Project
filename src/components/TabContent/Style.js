import styled from "styled-components";

export const About1 = styled.div`
  height: 400px;
`;

export const Heading = styled.h4`
  font-size: ${(props) => props.theme.fontSize.h4};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.fontColor.primaryColor};
  margin-top: 0;
`;

export const Description = styled.div`
  font-size: ${(props) => props.theme.fontSize.secondary};
  line-height: 1.57;
  color: ${(props) => props.theme.fontColor.dusk};
  > div {
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
`;

export const ImageContainer = styled.div`
  width: 96%;
`;
export const ContentWrapper = styled.div`
  height: 258px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: calc(77% - 15px);
  margin-right: 15px;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ViewDetailedCaseStudy = styled.button`
  color: #3448c5;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background: none;
  margin: 20px 0px;
  :focus {
    outline: none;
  }
`;
