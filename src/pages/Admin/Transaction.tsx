import { Column } from "react-table";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../../components/admin/TableHOC";
import { Link } from "react-router-dom";

interface TransctionsDataTye {
  name: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<TransctionsDataTye>[] = [
  { Header: "Name", accessor: "name" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" },
];

const arr: TransctionsDataTye[] = [
  {
    name: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    name: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="blue">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    name: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<TransctionsDataTye[]>(arr);

  const Table = useCallback(
    TableHOC(columns, data, "Transaction-Container", "Transactions", true),
    []
  );

  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Transaction;
