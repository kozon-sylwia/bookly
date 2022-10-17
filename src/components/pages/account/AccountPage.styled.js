import styled from "styled-components";

export const StyledH2 = styled.h2`
  color: black;
  font-size: 35px;
  font-weight: 400;
  text-align: center;
  margin-top: 0;
`;

export const StyledAccountInfoHeader = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #ba120f;
`;

export const StyledButton = styled.button`
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
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  gap: 10px;
  p,
  h4,
  label,
  input {
    margin: 5px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-right: 20%;
`;

export const StyledInput = styled.input`
  background: white;
  border: none;
  margin: 3px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 5px;
`;

export const StyledLabel = styled.label`
  text-transform: capitalize;
  font-weight: bold;
`;

export const StyledAccountPage = styled.div`
  margin: 30px auto;
  padding: 30px;
  max-width: 500px;
  background-color: #f2f2f2;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;
