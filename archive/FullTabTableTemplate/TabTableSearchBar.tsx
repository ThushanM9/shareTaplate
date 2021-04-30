import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import { setSearchInvoiceValue } from "../../../store/modules/SearchInvoices/searchInvoiceValue.dispatcher";
import "./chequeSearchBar.css";

function TabTableSearchBar() {
  // const [value,setValue] = useState("")
  return (
    <Input
      className="chequeInput w-1/6 text-xxxs"
      placeholder="Search invoices"
      size="small"
      prefix={<SearchOutlined className="mr-1" />}
      onChange={e => setSearchInvoiceValue(e.target.value)}
    ></Input>
  );
}

export default TabTableSearchBar;
