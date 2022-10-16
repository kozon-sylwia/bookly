import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAuthWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  width: 100%;
  height: 100%;
  margin-top: 0;
  padding-top: 1%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const StyledAuthPanel = styled.div`
  background-color: #f2f2f2;
  border-radius: 75%;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  text-align: center;
  justify-content: center;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  margin-top: 2%;
  margin-bottom: 2%;
  row-gap: 20px;
`;
export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 15px;
`;
export const StyledAuthButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  width: 150px;
  background-color: #ba120f;
  color: white;
  border: none;
  font-weight: 400;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
  height: 30px;
  @media (max-width: 600px) {
    width: 100px;
  }
  border-radius: 25px;
  :hover {
    scale: 1.1;
  }
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
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border: none;
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
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  margin: 3px;
  height: 25px;
  width: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const StyledAuthHelper = styled.div`
  p {
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
    font-weight: 300;
    width: 400px;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const StyledAuthLink = styled(Link)`
  color: #ba120f;
  font-weight: 500;
  font-size: 30px;
  :hover {
    scale: 1.1;
  }
  cursor: pointer;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
`;
