import styled from "styled-components";

export const StyledOrdersTable = styled.div`
  display: grid;
  justify-self: center;
  grid-template-columns: repeat(1, auto);
  width: 900px;
  border-radius: 15px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
  margin-bottom: 250px;
`;

export const StyledTableHeader = styled.div`
  display: grid;
  font-size: 18px;
  grid-template-columns: 40px 130px repeat(
      ${(props) => props.numberOfColumns - 2},
      1fr
    );
  padding: 10px;
  color: #ba120f;
  background-color: #c0c2c2;
  h3 {
    margin: 10px 0;
    font-weight: 500;
  }
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const StyledTableRecord = styled.div`
  display: grid;
  font-size: 18px;
  border: none;
  grid-template-columns: 40px 130px repeat(
      ${(props) => props.numberOfColumns - 2},
      1fr
    );
  padding: 5px 10px;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:nth-child(odd) {
    background-color: #c0c2c2;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
