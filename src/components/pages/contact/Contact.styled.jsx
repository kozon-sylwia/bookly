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
  border-radius: 3px;
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
  border-radius: 3px;
`;

export const StyledContactLabel = styled.label`
  font-weight: 400;
  font-size: 17px;
`;
export const StyledButton = styled.input`
  background-color: #ba120f;
  color: white;
  border: none;
  :hover {
    scale: 1.1;
  }
  border-radius: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  margin: 3px;
  height: 30px;
  width: 120px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const StyledH2 = styled.h2`
  text-align: left;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
  font-weight: 300;
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
