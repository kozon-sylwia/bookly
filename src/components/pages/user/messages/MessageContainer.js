import { dateToString, timeToString } from "../../../../utils/dateToString";
import { IconPanel } from "./IconPanel";
import { StyledMessageContainer } from "./MessagesPage.styled";

export const MessageContainer = ({ message }) => {
  return (
    <StyledMessageContainer isRead={message.isRead}>
      <p>
        {message.content}
        <span>
          {dateToString(message.date) + " at " + timeToString(message.date)}
        </span>
      </p>
      <IconPanel isRead={message.isRead} messageID={message.id} />
    </StyledMessageContainer>
  );
};
