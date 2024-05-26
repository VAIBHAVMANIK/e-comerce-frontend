import { Column } from "react-table";
import TableHOC from "./TableHOC";

interface TopTractionTableType {
  Id: string;
  Name: string;
  Quantity: number;
  Discount: number;
  Amount: number;
  Status: string;
}

const columns: Column<TopTractionTableType>[] = [
  {
    Header: "Id",
    accessor: "Id",
  },
  {
    Header: "Name",
    accessor: "Name",
  },
  {
    Header: "Quantity",
    accessor: "Quantity",
  },
  {
    Header: "Discount",
    accessor: "Discount",
  },
  {
    Header: "Status",
    accessor: "Status",
  },
];

const TopTractionTable = ({ data = [] }: { data: TopTractionTableType[] }) => {
  return TableHOC<TopTractionTableType>(
    columns,
    data,
    "TopTractionContainer",
    "Top Transaction"
  )();
};

export default TopTractionTable;
