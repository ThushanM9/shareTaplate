import { Button, Table, Tag } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { setIdArr } from "../../../../../store/modules/cutomerDetails-idArr/idArr.dispatchers";
import useGetCustomerById from "../../../../../utils/hooks/useGetCutomerById";

function ManageCustomerAccounts() {
  let { customer_id } = useParams();
  const { data, loading } = useGetCustomerById(customer_id);
  !loading ? console.log(data.perBankAccounts) : console.log("lod");
  const dataSource = data.perBankAccounts.map((item: any, index: number) => {
    return {
      key: index,
      type: !loading ? item.pbanAccountType : "Loading..",
      no: !loading ? item.pbanAccountNo : "Loading..",
      tag: (
        <Tag color="blue" className="text-table">
          {item.pbanStatus}
        </Tag>
      ),
      action: (
        <div>
          <Button type="link" className="text-xxxs p-0 mr-3">
            <Link to={`/AnRkr/view_inquiry/${item.pbanAccountNo}`}>
              View Inquiry
            </Link>
          </Button>
          <Button type="link" className="text-xxxs p-0 mr-3">
            <Link to="/AnRkr/a/selected_customer">Update</Link>
          </Button>
          <Button type="link" className="text-xxxs p-0 mr-3">
            <Link to="/AnRkr/a/selected_customer">Block</Link>
          </Button>
          <Button type="link" className="text-xxxs p-0 mr-3">
            <Link
              to={`/AnRkr/a/selected_customer/deactivate/${customer_id}/${item.pbanAccountNo}`}
            >
              Deactivate
            </Link>
          </Button>
          <Button
            onClick={() => setIdArr(customer_id)}
            type="link"
            className="text-xxxs p-0 mr-3"
          >
            <Link
              to={`/AnRkr/a/selected_customer/close_creation/${customer_id}/${item.pbanAccountNo}`}
            >
              Close
            </Link>
          </Button>
        </div>
      )
    };
  });

  const columns = [
    {
      title: "Account Type",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "Account Number",
      dataIndex: "no",
      key: "no"
    },
    {
      title: "Status",
      dataIndex: "tag",
      key: "tag"
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action"
    }
  ];

  return (
    <div className="pt-2">
      <h3 className="text-xs font-medium">Personal Details</h3>
      <Table
        className="text-xs mt-8"
        size="small"
        dataSource={dataSource}
        pagination={false}
        tableLayout="auto"
        rowSelection={{
          type: "checkbox"
        }}
      >
        {columns.map((item, index) => {
          return index === 1 ? (
            <Table.Column
              className="text-table text-left pt-2 pb-2 pl-4 pr-0 font-normal"
              title={<span className="text-xxxs p-0">{item.title}</span>}
              dataIndex={item.dataIndex}
              key={item.key}
              render={text => {
                return <span className="text-table p-0">{text}</span>;
              }}
            />
          ) : (
            <Table.Column
              className="text-table text-left pt-2 pb-2 pl-4 pr-0 font-normal"
              title={<span className="text-xxxs p-0">{item.title}</span>}
              dataIndex={item.dataIndex}
              key={item.key}
              render={text => {
                return <span className="text-table p-0">{text}</span>;
              }}
            />
          );
        })}
      </Table>
    </div>
  );
}

export default ManageCustomerAccounts;
