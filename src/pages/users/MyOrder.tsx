import React, { ReactElement, useState } from "react";
import Header from "../../components/header";
import TableHOC from "../../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type myOrderDataType = {
  id: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
};
const column: Column<myOrderDataType>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const rows: myOrderDataType[] = [
  {
    id: "dnldfknd",
    amount: 45132,
    discount: 4565132,
    quantity: 465,
    status: <span className="green">Processing</span>,
    action: <Link to={`/product/dnldfknd`}>View</Link>,
  },
];

const MyOrder = () => {
  const Table = TableHOC<myOrderDataType>(
    column,
    rows,
    "myOrder-lists",
    "My Orders",
    rows.length > 6
  )();
  return (
    <div className="main-container">
      <Header />
      <div className="my-orders-container">
        <main className="my-order">{Table}</main>
      </div>
    </div>
  );
};

export default MyOrder;
