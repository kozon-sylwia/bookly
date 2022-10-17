import styled from "styled-components";

export const StyledDetailHeader = styled.div`
  display: grid;
  grid-template-columns: 40px repeat(
      ${(props) => props.numberOfColumns - 1},
      1fr
    );
  h4 {
    margin: 0;
    padding: 10px 5px;
    height: 100%;
  }
`;

export const StyledPositionRecord = styled.div`
  display: grid;
  grid-template-columns: 40px repeat(4, 1fr);
  align-items: stretch;
  p {
    margin: 0;
    display: flex;
    align-items: center;
    padding: 10px 5px;
  }
`;
