import React, { useState } from "react";
import { ChangesHolder } from "../../components/ChangesHolder";

export const PassbookDetailsInquiry = ({ data }: { data: any }) => {
  const [tableData, setTableData] = useState([]);
  const titles = [
    {
      title: "Passbook Number",
      dataIndex: "number",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  const previousState = [
    {
      number: "XXXXXXXXXX",
      status: "Active",
      original: "original",
    },
    {
      number: "(Empty)",
      status: "(Empty)",
      original: null,
    },
  ];

  return (
    <div>
      <ChangesHolder
        title="Passbook Details"
        table={true}
        titleArr={titles}
        dataArr={
          tableData.length > 0
            ? tableData
            : [
                {
                  number: "-",
                  status: "-",
                  original: "-",
                },
              ]
        }
      />
    </div>
  );
};
