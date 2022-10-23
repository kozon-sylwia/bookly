import styled from "styled-components";

export const MainWindow = styled.div`
  min-width: 800px;
  max-width: 100%;
  min-height: 300px;
  background-size: cover;
  padding: 60px;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

export const FlexColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextAndButtons = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: white;
    font-size: 37px;
    line-height: 70px;
  }
  span {
    color: #ba120f;
  }
`;

export const StyledButton = styled.button`
  font-size: 25px;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  background-color: ${(props) => props.bg || "#ba120f"};
  color: ${(props) => props.color || "WHITE"};
  border: none;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
  &:hover {
    scale: 1.1;
  }
`;

export const StyledBestSellers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px 20px 60px 20px;
`;

export const StyledH2 = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  margin: 30px auto;
  margin-bottom: 60px;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  text-align: center;
  font-size: 47px;
  color: black span {
    color: #ff902b;
  }
`;
