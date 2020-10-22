import styled from "styled-components";

export const Navgation = styled.div`
  margin-top: 30px;
`;
export const NavButton = styled.button`
  color: ${(props) =>
    props.active ? "white" : props.theme.fontColor.primaryColor};
  background-color: ${(props) =>
    props.active ? props.theme.colors.primaryColor : "#f0f3f4"};
  border: none;
  padding: 8px 15px;
  border-radius: 16px;
  font-size: ${(props) => props.theme.fontSize.secondary};
  cursor: pointer;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
`;

export const Line = styled.hr`
  border: 1px solid #f0f3f4;
  opacity: 0.5;
`;
