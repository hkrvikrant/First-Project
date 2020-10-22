import styled from "styled-components";
export const HeadLine = styled.h1`
  font-size: 55px;
  color: rgb(141, 198, 63);
  font-weight: 700;
  text-align: center;
`;
export const error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Message = styled.p`
  color: grey;
  font-size: 28px;
  text-align: center;
`;
export const BackButton = styled.button`
  background-color: #8dc63f;
  padding: 12px;
  border-radius: 28px;
  border: none;
  color: #fff;
  font-size: 20px;
  font-family: sans-serif;
  cursor: pointer;
  outline: none;
  a {
    color: inherit;
  }
`;
