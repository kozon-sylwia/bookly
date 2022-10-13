import styled from "styled-components";

export const StyledBooksListElement = styled.section`
  display: flex;
  padding: 20px;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledArticle = styled.article`
  width: 250px;
  color: black;
  font-size: 16px;
  display: flex;
  border: none;
  flex-flow: column nowrap;
  justify-content: flex-end;
  opacity: ${(props) => (props.isDisable ? 0.7 : 1)};
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
  :hover {
    scale: 1.1;
  }
  border-radius: 5px;
`;
