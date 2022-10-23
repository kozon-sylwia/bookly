import styled from "styled-components";

export const StyledMessagesListElement = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 40px;
  margin: 50px;
  background-color: #f2f2f2;
  width: 800px;
  padding: 50px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

export const StyledMessageContainer = styled.fieldset`
  background-color: white;
  display: flex;
  border: ${(props) => (props.isRead ? "none" : "3px solid #ba120f")};
  justify-content: space-between;
  align-items: center;
  width: 800px;
  font-size: 18px;
  & span {
    margin-left: 20px;
  }
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

export const StyledIconPanel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  img {
    height: 30px;
    padding: 10px;
    transition: transform 1s ease;
  }
  img:hover {
    transform: scale(1.5);
  }
`;

export const StyledMessagesMenagmentPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledButton = styled.button`
  padding: 10px;
  padding-bottom: 20px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 25px;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  height: 30px;
  width: 200px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  :hover {
    scale: 1.1;
  }
`;

export const StyledMessagesArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 100px;
  margin-bottom: 300px;
`;

export const StyledEmptyInboxInfo = styled.div`
  font-size: 30px;
  font-weight: 300;
  span {
    color: #ba120f;
  }
`;
