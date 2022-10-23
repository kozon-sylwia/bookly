import { Link } from "react-router-dom";

import {
  StyledLinksPanel,
  StyledNavigationLink,
} from "./AccountMenuPanel.styled";

export const LinksPanel = ({ linksList }) => {
  return (
    <StyledLinksPanel>
      {linksList.map((link) => (
        <StyledNavigationLink key={link.url} to={link.url}>
          {link.text}
        </StyledNavigationLink>
      ))}
    </StyledLinksPanel>
  );
};
