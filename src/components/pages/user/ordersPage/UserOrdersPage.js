import { OrderListProvider } from "../../../../providers/OrderListProvider";
import { DecorationBar } from "../../../decorationBar/DecorationBar";
import { SearchOrderMenu } from "../../../searchMenu/SearchOrderMenu";
import { OrdersTable } from "../../../ordersTable/OrdersTable";
import { StyledUserOrdersPage } from "./UserOrdersPage.styled";

export const UserOrdersPage = () => {
  return (
    <StyledUserOrdersPage>
      <OrderListProvider>
        <SearchOrderMenu />
        <DecorationBar />
        <OrdersTable headers={["No", "Date", "Cost", "Status"]} />
      </OrderListProvider>
    </StyledUserOrdersPage>
  );
};
