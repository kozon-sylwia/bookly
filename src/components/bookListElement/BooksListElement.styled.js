import styled from "styled-components";
import { InfoPanel } from "./bookCardPartComponents/InfoPanel";

export const StyledBooksListElement = styled.section`
  display: flex;
  padding: 20px;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledArticle = styled.article`
  width: 250px;
  height: 400px;

  color: black;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  border: none;
  flex-flow: column nowrap;
  justify-content: flex-end;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
  :hover {
    div,
    form {
      display: ${(props) => (!props.isDisable ? "flex" : null)};
    }
  }
  border-radius: 5px;
`;
