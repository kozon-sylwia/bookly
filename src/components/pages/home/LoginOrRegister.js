import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import {
  MainWindow,
  TextAndButtons,
  FlexColumns,
  StyledButton,
  StyledH2,
} from "./Home.styled";
import logoBookly from "./photos/book.jpg";

export const LoginOrRegister = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <MainWindow>
      <TextAndButtons>
        <StyledH2>
          Enjoy your <span>book</span> everyday with BOOKLY
        </StyledH2>
        {!isAuth && (
          <FlexColumns>
            <Link to="register">
              <StyledButton>Sign up</StyledButton>
            </Link>
            <Link to="login">
              <StyledButton bg="#f2f2f2" color="#220901" brd="#220901">
                Sign in
              </StyledButton>
            </Link>
          </FlexColumns>
        )}
      </TextAndButtons>
      <img src={logoBookly} width="300px" />
    </MainWindow>
  );
};
