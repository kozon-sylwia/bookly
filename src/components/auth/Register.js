import { AuthForm } from "./AuthForm";
import { handleRegister } from "./authHandlers";
import {
  StyledAuthPanel,
  StyledAuthHeader,
  StyledAuthWrapper,
  StyledAuthHelper,
  StyledAuthLink,
} from "./StyledAuth";

export const Register = () => {
  return (
    <StyledAuthWrapper>
      <StyledAuthHelper>
        <p>You already have an account?</p>
        <StyledAuthLink to="/login">SIGN IN</StyledAuthLink>
      </StyledAuthHelper>
      <StyledAuthPanel>
        <StyledAuthHeader>Create an account:</StyledAuthHeader>
        <AuthForm
          submitText="Create an account"
          onSubmit={(e) => handleRegister(e)}
        />
      </StyledAuthPanel>
    </StyledAuthWrapper>
  );
};
