import { StyledNavigation, StyledNavLink } from "./Header.styled";

export const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledNavLink end to="/">
        HOME
      </StyledNavLink>
      <StyledNavLink to="/books">BOOKS</StyledNavLink>
      <StyledNavLink to="/contact">CONTACT</StyledNavLink>
    </StyledNavigation>
  );
};
