import styled from "styled-components";

export const HeaderNavigation = styled.ul`
  display: flex;
`;

export const StyledLink = styled.li`
  color: ${(props) => props.theme.fontColor.primaryColor};
  opacity: 0.4;
  font-weight: ${(props) => props.theme.fontWeight.w600};
  font-size: ${(props) => props.theme.fontSize.secondary};
  margin-right: 10px;
  &:hover {
    opacity: 1;
  }
`;
export const ProfileIcon = styled.div`
  width: 40px;
  height: 34px;
`;
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogOutBtn = styled.div`
  background: none;
  border: none;
  color: #11142f;
  opacity: 0.4;
  font-weight: 600;
  font-size: 14px;
  cursor:pointer;
  &:hover {
    opacity: 1;
  }
`;
