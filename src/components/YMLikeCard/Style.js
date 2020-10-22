import styled from "styled-components";

export const LikeHeading = styled.div`
  opacity: 0.5;
  font-size: ${(props) => props.theme.fontSize.secondary};
  font-weight: ${(props) => props.theme.fontWeight.w500};
  color: #707282;
`;
export const LikeContainer = styled.div`
  width: 23%;
`;

export const Card = styled.div`
  margin-top: 10px;
  border-radius: 16px;
  box-shadow: 0 10px 10px 0 rgba(12, 24, 52, 0.05);
  border: solid 0.8px #efefef;
  padding: 24px;
  color: ${(props) => props.theme.fontSize.black};
  > div {
    font-size: ${(props) => props.theme.fontSize.secondary};
    font-weight: ${(props) => props.theme.fontWeight.w500};
    opacity: 0.5;
  }
  > p {
    font-size: ${(props) => props.theme.fontSize.h5};
    font-weight: ${(props) => props.theme.fontWeight.w500};
  }
  > span {
    font-size: ${(props) => props.theme.fontSize.tertiary};
    font-weight: ${(props) => props.theme.fontWeight.w300};
    font-style: italic;
    opacity: 0.5;
  }
`;
