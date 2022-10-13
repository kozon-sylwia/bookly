import { StyledNavLink, StyledDummyNavLink } from "./Header.styled";

export const AuthPanel = (user) => {
  return (
    <>
      {user === null ? (
        <div>
          <StyledDummyNavLink>Log In</StyledDummyNavLink>
          <StyledDummyNavLink>Register</StyledDummyNavLink>
        </div>
      ) : (
        <div>
          <StyledNavLink to="/login">LOG IN</StyledNavLink>
          <StyledNavLink to="/register">REGISTER</StyledNavLink>
        </div>
      )}
    </>
  );
};
