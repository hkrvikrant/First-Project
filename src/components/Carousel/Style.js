import { Link } from "react-router-dom";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    padding-bottom: 30px;
  }
`;

export const Content = styled.div`
  width: 70%;
  display: flex;
  width: 75%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  > span {
    color: ${(props) => props.theme.fontColor.black};
    opacity: 0.5;
    font-weight: ${(props) => props.theme.fontWeight.w500};
    font-size: ${(props) => props.theme.fontSize.secondary};
  }
  > p {
    width: 88%;
    color: #1e1737;
    font-size: ${(props) => props.theme.fontSize.heading};
    font-weight: ${(props) => props.theme.fontWeight.w600};
    text-align: initial;
    margin: 20px 0px;
  }
`;
export const Button = styled(Link)`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.fontColor.secondaryColor};
  font-size: ${(props) => props.theme.fontSize.secondary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const Image = styled.div`
  width: 320px;
`;
export const ArrowImage = styled.img`
  width: 30px !important;
  height: 30px;
  margin-top: 6px;
`;

export const TeamAndDate = styled.div`
  opacity: 0.5;
  color: #3f4274;
  font-style: italic;
  line-height: 1.14;
  font-size: ${(props) => props.theme.fontSize.secondary};
  font-weight: ${(props) => props.theme.fontWeight.w300};
`;
