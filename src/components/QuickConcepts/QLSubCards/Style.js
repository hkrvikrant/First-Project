import styled from "styled-components";

export const Subcards = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  width: calc(100% / 4 - 15px);
  margin-right: 20px;
  color: ${(props) => props.theme.fontColor.black};
  font-size: ${(props) => props.theme.fontSize.tertiary};
  &:last-child {
    margin-right: 0;
  }
  > img {
    width: 100%;
  }
  > p {
    width: 172px;
    font-size: ${(props) => props.theme.fontSize.primary};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    color: ${(props) => props.theme.colors.primaryColor};
  }
  @media only screen and (min-width: 320px) and (max-width: 991px) {
    margin-bottom: 20px;
  }
`;
export const Type = styled.span`
  margin-left: 5px;
  opacity: 0.3;
`;
