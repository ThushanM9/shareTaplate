import React from "react";
import SmallTableTemplate from "../../../templates/SmallTableTemplate";

function InformationSectionTable(props: { data: Array<Object> }) {
  const columns = [
    {
      title: "Interest rate",
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: "Tier Band",
      dataIndex: "tax",
      key: "tax",
    },
  ];
  return (
    <SmallTableTemplate
      className=""
      columns={columns}
      data={props.data}
      fontSize="text-tiny"
    ></SmallTableTemplate>
  );
}

export default InformationSectionTable;
