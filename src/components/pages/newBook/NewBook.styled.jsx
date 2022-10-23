import styled from "styled-components";

export const StyledContainer = styled.div`
  left: 10%;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

export const StyledFormulars = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

export const StyledInput = styled.input`
  display: block;
  margin: 5px 0 10px;
  width: 300px;
  padding: 5px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #f2f2f2;
  border: none;
  box-shadow: 2px 6px 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const StyledButton = styled.input`
  background-color: #ba120f;
  border: none;
  border-radius: 25px;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  color: white;
  margin: 3px;
  height: 30px;
  width: 150px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  :hover {
    scale: 1.1;
  }
  margin-top: 20px;
`;

export const StyledH2 = styled.h2`
  text-align: left;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 45px;
  font-weight: 400;
  line-height: 58px;
  letter-spacing: 0em;
`;

export const NewBookBackground = styled.div`
  min-height: 140vh;
  display: flex;
  flex-direction: row;
  column-gap: 200px;
  justify-content: center;
  margin-top: 50px;
`;
export const StyledAddBookImg = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 120px;
`;

export const StyledInputLabel = styled.label`
  font-size: 18px;
  font-weight: 400;
`;
