import { useContext } from "react";
import { AuthForm } from "./AuthForm";
import { handleLogin } from "./authHandlers";
import { AuthContext } from "./../../providers/AuthProvider";
import {
  StyledAuthPanel,
  StyledAuthHeader,
  StyledLink,
  StyledAuthWrapper,
  StyledAuthHelper,
  StyledAuthLink,
} from "./StyledAuth";

export const Login = () => {
  const { setUser, setIsAuth } = useContext(AuthContext);
  return (
    <StyledAuthWrapper>
      <StyledAuthPanel>
        <StyledAuthHeader>Login:</StyledAuthHeader>
        <AuthForm
          submitText="Login"
          onSubmit={(e) => handleLogin(e, setUser, setIsAuth)}
        />
        <StyledLink to="/forgotPassword">Forgot password?</StyledLink>
      </StyledAuthPanel>
      <StyledAuthHelper>
        <p>You don't have an account yet?</p>
        <StyledAuthLink to="/register">SIGN UP</StyledAuthLink>
      </StyledAuthHelper>
    </StyledAuthWrapper>
  );
};
