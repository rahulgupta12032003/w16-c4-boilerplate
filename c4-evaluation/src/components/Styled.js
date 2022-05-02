import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  width: 90%;
  margin: 20px auto;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
`;

export const Select = styled.select`
  background-color: #b6ffdb;
  border: none;
  outline: none;
  padding: 4px 10px;
  font-size: 20px;
`;

export const Flex = styled.div`
  border: 2px solid black;
  background-color : tomato ;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 12px;
`;