import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { AccountFormPanel } from "./AccountFormPanel";
import { AccountInfoPanel } from "./AccountInfoPanel";
import {
  StyledAccountCard,
  StyledButton,
  StyledH2,
  StyledAccountInfoHeader,
  StyledAccountPage,
} from "./AccountPage.styled";

export const AccountPage = () => {
  const { user } = useContext(AuthContext);
  const [isEditStatusActive, setIsEditStatusActive] = useState(false);
  return (
    <StyledAccountPage>
      <StyledH2>
        My <span style={{ color: "#ba120f" }}>Account</span>
      </StyledH2>
      <StyledAccountCard>
        <StyledAccountInfoHeader>Email:</StyledAccountInfoHeader>
        <p>{user.email}</p>
        {isEditStatusActive ? (
          <AccountFormPanel setIsEditStatusActive={setIsEditStatusActive} />
        ) : (
          <>
            <AccountInfoPanel />
            <StyledButton
              onClick={() => setIsEditStatusActive((prevState) => !prevState)}
            >
              Edit
            </StyledButton>
          </>
        )}
        {}
      </StyledAccountCard>
    </StyledAccountPage>
  );
};
