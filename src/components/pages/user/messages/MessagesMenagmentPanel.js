import { useContext } from "react";
import { MessagesListContext } from "../../../../providers/MessagesListProvider";
import { AuthContext } from "../../../../providers/AuthProvider";
import {
  changeAllIsReadStatus,
  deleteAllMessages,
  deleteReadMessages,
  deleteUnreadMessages,
} from "./messagesHandlers";
import {
  StyledButton,
  StyledMessagesMenagmentPanel,
} from "./MessagesPage.styled";

export const MessagesMenagmentPanel = () => {
  const { messagesList, setMessagesList } = useContext(MessagesListContext);
  const { user } = useContext(AuthContext);
  return (
    <StyledMessagesMenagmentPanel>
      <StyledButton
        onClick={() =>
          deleteAllMessages(messagesList, setMessagesList, user.id)
        }
      >
        Delate all
      </StyledButton>
      <StyledButton
        onClick={() =>
          deleteReadMessages(messagesList, setMessagesList, user.id)
        }
      >
        Delate read
      </StyledButton>
      <StyledButton
        onClick={() =>
          deleteUnreadMessages(messagesList, setMessagesList, user.id)
        }
      >
        Delate unread
      </StyledButton>
      <StyledButton
        onClick={() =>
          changeAllIsReadStatus(messagesList, setMessagesList, user.id, false)
        }
      >
        Set all messages read
      </StyledButton>
      <StyledButton
        onClick={() =>
          changeAllIsReadStatus(messagesList, setMessagesList, user.id, true)
        }
      >
        Set all messages unread
      </StyledButton>
    </StyledMessagesMenagmentPanel>
  );
};
