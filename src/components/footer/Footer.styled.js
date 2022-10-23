import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  background-color: #c0c2c2;
  padding: 20px;
  margin: auto;
  clear: both;
  height: 180px;
`;

export const FooterRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 600px) {
    text-align: left;
    flex-direction: column-reverse;
  }
`;

export const FooterColumns = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.2;
  @media (max-width: 600px) {
    padding: 0px 10px 20px 10px;
  }
`;

export const Subject = styled.p`
  font-size: 17px;
  font-weight: 600;
  margin: 5px;
`;

export const SubSubject = styled(Link)`
  font-weight: 400;
  margin: 5px;
  text-decoration: none;
  color: black;
  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 600px) {
    margin: 5px 5px 4px 25px;
  }
`;

export const FooterLine = styled.p`
  border-bottom: 1px solid black;
`;

export const SubjectCopyright = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 5px;
`;
