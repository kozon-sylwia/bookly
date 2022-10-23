import { useContext } from "react";
import { MessagesListContext } from "../../../../providers/MessagesListProvider";
import { MessageContainer } from "./MessageContainer";
import { StyledMessagesListElement } from "./MessagesPage.styled";
import { EmptyMessageContainer } from "./EmptyMessageContainer";

export const MessagesListElement = () => {
  const { messagesList } = useContext(MessagesListContext);

  return (
    <StyledMessagesListElement>
      {messagesList.length !== 0 &&
        messagesList.map((message, index) => (
          <MessageContainer
            key={index + "-" + message.date}
            message={message}
          />
        ))}
      {messagesList.length === 0 && <EmptyMessageContainer />}
    </StyledMessagesListElement>
  );
};
