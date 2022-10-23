import { Link } from "react-router-dom";

import { LogoutButton } from "../../auth/LogoutButton";
import {
  StyledAccountManagmentPanel,
  StyledNavigationLink,
} from "./AccountMenuPanel.styled";

export const AccountManagmentPanel = () => {
  return (
    <StyledAccountManagmentPanel>
      <StyledNavigationLink to="/account">My account</StyledNavigationLink>
      <LogoutButton />
    </StyledAccountManagmentPanel>
  );
};
