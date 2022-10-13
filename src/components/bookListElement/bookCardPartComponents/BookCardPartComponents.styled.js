import styled from "styled-components";

export const StyledCover = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  img {
    width: 200px;
  }
`;

export const StyledCartPanel = styled.form`
  padding: 20px 0;
  display: block;
  display: flex;
  justify-content: center;
  column-gap: 15px;
  align-self: stretch;
  background-color: #f2f2f2;
`;

export const StyledCountInput = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  background-color: transparent;
  border: none;
  font-weight: 300px;
  width: 40px;
  text-align: center;
  cursor: pointer;
`;

export const StyledInfoPanel = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  background-color: #f2f2f2;
  align-items: center;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding: 10px;
  h3,
  p {
    margin: 0;
  }
  .price {
    font-size: 1.5em;
    font-weight: 400;
  }
  border-bottom: 1px solid black;
`;

export const StyledButton = styled.button`
  height: 20px;
  width: 20px;
  margin: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    scale: 1.2;
  }
  font-size: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const StyledBookTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;
