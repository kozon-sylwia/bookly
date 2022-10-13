import styled from "styled-components";

export const StyledContainer = styled.div`
  /* position: absolute; */
  left: 62%;
  top: 10%;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: bold;
  width: 50%;
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
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const StyledTextarea = styled.textarea`
  display: block;
  margin: 5px 0 10px;
  height: 130px;
  width: 300px;
  padding: 5px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #f2f2f2;
  border: none;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const StyledContactLabel = styled.label`
  font-weight: 300;
`;
export const StyledButton = styled.input`
  margin-top: 10px;
  width: 100px;
  padding: 5px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #ba120f;
  border: none;
  color: #f2f2f2;
`;

export const StyledH2 = styled.h2`
  text-align: left;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 58px;
  letter-spacing: 0em;
  color: black;
`;

export const ContactBackground = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 200px;
`;
