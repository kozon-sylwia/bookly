import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Wrapper } from "./AccountPage.styled";
import { StyledAccountInfoHeader } from "./AccountPage.styled";

export const AccountInfoPanel = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <StyledAccountInfoHeader>Personal Data:</StyledAccountInfoHeader>
      <Wrapper>
        <h4>Name:</h4>
        <p>{user.name}</p>
      </Wrapper>
      <Wrapper>
        <h4>Surname:</h4>
        <p>{user.surname}</p>
      </Wrapper>
      <StyledAccountInfoHeader>Contact:</StyledAccountInfoHeader>
      <Wrapper>
        <h4>Phone:</h4>
        <p>{user.phone}</p>
      </Wrapper>
      <StyledAccountInfoHeader>Address:</StyledAccountInfoHeader>
      <Wrapper>
        <h4>City:</h4>
        <p>{user.address?.city}</p>
      </Wrapper>
      <Wrapper>
        <h4>Street:</h4>
        <p>{user.address?.street}</p>
      </Wrapper>
    </>
  );
};
