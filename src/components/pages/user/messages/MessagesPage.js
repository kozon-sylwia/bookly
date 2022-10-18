import { MessagesListProvider } from "../../../../providers/MessagesListProvider";
import { DecorationBar } from "../../../decorationBar/DecorationBar";
import { SearchMessagesMenu } from "../../../searchMenu/SearchMessagesMenu";
import { MessagesListElement } from "./MessagesListElement";
import { MessagesMenagmentPanel } from "./MessagesMenagmentPanel";
import { StyledMessagesArea } from "./MessagesPage.styled";

export const MessagesPage = () => {
  return (
    <MessagesListProvider>
      <SearchMessagesMenu />
      <DecorationBar />
      <StyledMessagesArea>
        <MessagesMenagmentPanel />
        <MessagesListElement />
      </StyledMessagesArea>
    </MessagesListProvider>
  );
};
