import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { StyledAccountMenuPanel } from "./accountMenuComponents/AccountMenuPanel.styled.js";

export const StyledHeader = styled.header`
  display: flex;
  background-color: #f2f2f2;
  font-size: 30px;
  align-items: center;
  padding: 0 20px;
  font-weight: bold;
  height: 70px;
  img {
    height: 50px;
  }
  .logoContainer {
    display: flex;
    align-items: center;
  }
  .shoppingCartIcon {
    padding-left: 30px;
    height: 30px;
  }
`;
export const StyledCartCounter = styled.span`
  font-size: 20px;
`;

export const StyledNavigation = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 100px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #220901;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  padding: 20px;
  &.active {
    color: #ba120f;
  }
  :hover {
    scale: 1.1;
  }
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`;

export const StyledCartLink = styled(NavLink)`
  color: #220901;
  font-weight: bold;
  font-size: 28px;
  text-decoration: none;
  padding: 20px;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`;

export const StyledDummyNavLink = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
  visibility: hidden;
  color: #220901;
  font-weight: bold;
  font-size: 28px;
  text-decoration: none;
  padding: 20px;
  &.active {
    color: #ba120f;
  }
`;

export const StyledAccountMenu = styled.div`
  margin-left: 30px;
  font-size: 20px;
  a {
    color: black;
    text-decoration: none;
  }
  &:hover ${StyledAccountMenuPanel} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 1000;
  }
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`;
