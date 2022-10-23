import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledAccountManagmentPanel = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StyledLinksPanel = styled.div`
  display: flex;
  flex-flow: column;
`;

export const StyledAccountMenuPanel = styled.div`
  position: absolute;
  display: none;
  padding: 10px 20px;
  font-size: 20px;
  background-color: #f2f2f2;
  right: 0;
  margin-right: 10px;
`;

export const StyledNavigationLink = styled(Link)`
  :hover {
    color: #ba120f;
  }
`;
