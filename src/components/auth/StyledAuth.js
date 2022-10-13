import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "./img/login.jpg";

export const StyledAuthWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin-top: 0;
  padding-top: 1%;
  padding-bottom: 30px;
`;
export const StyledAuthPanel = styled.div`
  background-color: #f2f2f2;
  /* border: 1px solid black; */
  border-radius: 75%;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  /* padding: 30px;
  padding-top: 3%; */
  /* padding-bottom: 5%; */
  text-align: center;
  justify-content: center;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  margin-left: 10%;
  margin-top: 2%;
  margin-bottom: 2%;
  row-gap: 20px;
`;
export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
`;
export const StyledAuthButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  width: 150px;
  background-color: #ba120f;
  color: white;
  border: none;
  font-weight: 300;
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
  height: 30px;
  @media (max-width: 600px) {
    width: 100px;
  }
  border-radius: 25px;
`;
export const StyledAuthHeader = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-weight: 400;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 20px;
  } ;
`;
export const StyledAuthInput = styled.input`
  width: 230px;
  @media (max-width: 600px) {
    width: 100px;
  }
  padding: 5px;
`;
export const StyledLink = styled(Link)`
  font-size: 13px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const StyledButton = styled.button`
  background-color: #ba120f;
  color: white;
  border: none;
  :hover {
    scale: 1.1;
  }
  border-radius: 15px;
  font-family: "Inter", sans-serif;
  margin: 3px;
  height: 25px;
  width: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
