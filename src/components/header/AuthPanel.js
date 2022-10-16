import { StyledNavLink, StyledDummyNavLink } from "./Header.styled";

export const AuthPanel = (user) => {
  return (
    <>
      {user === null ? (
        <div>
          <StyledDummyNavLink>Sign In</StyledDummyNavLink>
          <StyledDummyNavLink>Sign Up</StyledDummyNavLink>
        </div>
      ) : (
        <div>
          <StyledNavLink to="/login">SIGN IN</StyledNavLink>
          <StyledNavLink to="/register">SIGN UP</StyledNavLink>
        </div>
      )}
    </>
  );
};
