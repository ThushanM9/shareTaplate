import { Button, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pendingTableData } from "../../pages/Cheque/PendingRequests/1-Pending/pendingTableData";
import { approvedTableData } from "../../pages/Cheque/PendingRequests/2-Approved/approvedTableData";
import { rejectedTableData } from "../../pages/Cheque/PendingRequests/3-Rejected/rejectedTableData";

interface tableProps {
  name: string;
}

function TabTableTemplate(props: tableProps) {
  const state: any = useSelector((state: any) => state.pendingRequest.tabState);
  const [tableData, setTableData] = useState(pendingTableData);
  // const [request] = useState(state.pendingRequest.name);
  const [tagColor, setTagColor] = useState("");
  //   console.log(props.name===);
  useEffect(() => {
    if (props.name === "cheque") {
      switch (state.req.name) {
        case "Pending":
          setTableData(pendingTableData);
          setTagColor("orange");
          break;
        case "Approved":
          setTableData(approvedTableData);
          setTagColor("green");
          break;
        case "Rejected":
          setTableData(rejectedTableData);
          setTagColor("red");
          break;
      }
    } else if (props.name === "activateAccount") {
      switch (state.activateAccount.name) {
        case "Pending":
          setTableData(pendingTableData);
          setTagColor("orange");
          break;
        case "Approved":
          setTableData(approvedTableData);
          setTagColor("green");
          break;
        case "Rejected":
          setTableData(rejectedTableData);
          setTagColor("red");
          break;
      }
    } else if (props.name === "approveAccount") {
      switch (state.approveAccount.name) {
        case "Pending":
          setTableData(pendingTableData);
          setTagColor("blue");
          break;
        case "Approved":
          setTableData(approvedTableData);
          setTagColor("green");
          break;
        case "Rejected":
          setTableData(rejectedTableData);
          setTagColor("red");
          break;
      }
    }
  }, [
    props.name,
    state.activateAccount.name,
    state.approveAccount.name,
    state.req.name
  ]);

  const data = tableData.map((item: any, index) => {
    return {
      key: item.key,
      name: item.name,
      no: item.no,
      nic: item.nic,
      code: item.code,
      tag: (
        <Tag color={tagColor} className="transform scale-75 m-0">
          {item.tag}
        </Tag>
      ),
      action: (
        <Button type="link" className="text-xxs p-0">
          <Link to={item.action}>View</Link>
        </Button>
      )
    };
  });

  const columns = [
    {
      title: "Account Name",
      dataIndex: "name"
    },
    {
      title: "Account Number",
      dataIndex: "no"
    },
    {
      title: "NIC",
      dataIndex: "nic"
    },
    {
      title: "Reference Code",
      dataIndex: "code"
    },
    {
      title: "Status",
      dataIndex: "tag"
    },
    {
      title: "Action",
      dataIndex: "action"
    }
  ];
  return (
    <div>
      <Table
        className="relative text-xs h-full"
        size="small"
        dataSource={data}
        tableLayout="auto"
        pagination={{
          position: ["bottomRight"],
          size: "small",
          defaultCurrent: 2,
          total: 50
        }}
        rowSelection={{
          type: "checkbox"
        }}
      >
        {columns.map((item, index) => {
          return (
            <Table.Column
              className="text-xs text-left pt-1 pb-1 pl-4 pr-4 font-normal"
              title={<span className="text-xxxs p-0">{item.title}</span>}
              dataIndex={item.dataIndex}
              key={index}
              render={text => {
                return <span className="text-xxxs p-0">{text}</span>;
              }}
            />
          );
        })}
      </Table>
    </div>
  );
}

export default TabTableTemplate;
