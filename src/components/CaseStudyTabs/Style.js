import styled from "styled-components";

export const Tabs = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
`;
export const Tab = styled.li`
  font-size: ${(props) => props.theme.fontSize.secondary};
  font-weight: ${(props) => props.theme.fontWeight.w500};
  color: #707282;
  margin-right: 30px;
  padding-bottom: 20px;
  border-bottom: ${(props) =>
    props.active ? "3px solid #3448c4" : "3px solid transparent"};
`;

export const ContainWrap = styled.div`
  width: 100%;
  display: flex;
`;

export const TabsHeader = styled.div`
  border-bottom: 2px solid #eee;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin: 0 5px;
  }
`;
