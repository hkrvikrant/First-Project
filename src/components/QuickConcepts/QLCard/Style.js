import styled from "styled-components";

export const QuickLearn = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    margin-top: 0;
  }
`;
export const Cards = styled.div`
  background-color: aliceblue;
  margin-right: 20px;
  width: calc(100% / 2 - 10px);
  height: 250px;
  border-radius: 16px;
  position: relative;
  &:last-child {
    margin-right: 0px;
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    margin-top: 20px;
    margin-right: 0px;
    width: 100%;
  }
`;
export const ImageContent = styled.div`
  height: inherit;
  float: right;
  > img {
    max-height: 100%;
    max-width: 100%;
  }
`;
export const MainContent = styled.div`
  padding: 27px 32px;
  position: absolute;
  width: calc(100% - 62px);
  > span {
    color: ${(props) => props.theme.fontColor.black};
    opacity: 0.5;
    font-size: ${(props) => props.theme.fontSize.secondary};
  }
  > p {
    color: #131415;
    font-size: ${(props) => props.theme.fontSize.h3};
    font-weight: ${(props) => props.theme.fontWeight.w600};
    width: 220px;
  }
`;
export const Button = styled.div`
  font-size: ${(props) => props.theme.fontSize.secondary};
  display: flex;
  justify-content: space-between;
  padding-top: 10%;
  > span {
    color: #848484;
  }
  > button {
    border-radius: 9px;
    color: #0e1721;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    padding: 6px 14px;
    border: none;
    background-color: ${(props) => props.theme.backgroundColor.white};
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;
