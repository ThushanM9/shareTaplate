import { Avatar, Button, Table, Tag } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDob } from "../../../../utils/get-dob";
import useGetCustomerById from "../../../../utils/hooks/useGetCutomerById";
import SearchBar from "../AccountOpening_Old/1-CustomerDetails/ExistingCutomerModal/SearchBar";

function ManageAccount() {
  const searchValue = useSelector(
    (state: any) => state.searchValue.searchValue
  );

  const { data, loading } = useGetCustomerById(searchValue);
  // console.log(data);

  const dataSource = [
    {
      key: data.id,
      name: data.perPreferredName,
      id: data.id,
      dob: getDob(data.perDateOfBirth),
      code: data.cusReferenceCode,
      photo: (
        <div className="flex justify-center items-center">
          <Avatar icon={""} className="transform scale-75"></Avatar>
        </div>
      ),
      tag: (
        <Tag color="blue" className="transform scale-75">
          {data.cusStatus}
        </Tag>
      ),
      action: (
        <div>
          <Button type="link" className="text-xxxs p-0 mr-2">
            <Link to={`/AnRkr/manage_account/${data.id}`}>Select</Link>
          </Button>
          <Button type="link" className="text-xxxs p-0 mr-2">
            <Link to="#">View</Link>
          </Button>
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Customer Code",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Identification",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Customer Photo",
      dataIndex: "photo",
      key: "photo",
    },
    {
      title: "KYC Status",
      dataIndex: "tag",
      key: "tag",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <div className="bg-white h-full mx-1">
      <div className="pb-8">
        <div className=" pl-4 pr-4 p-2" style={{ background: "#F8F8F8" }}>
          <SearchBar></SearchBar>
        </div>
        <div style={{ borderTop: "1px solid #e5e5e5" }}>
          {!loading ? (
            <Table
              className="text-xs"
              size="small"
              dataSource={dataSource}
              pagination={false}
              tableLayout="auto"
            >
              {columns.map((item) => {
                return (
                  <Table.Column
                    className="text-table text-left pt-2 pb-2 pl-4 pr-0 font-normal"
                    title={<span className="text-xxxs p-0">{item.title}</span>}
                    dataIndex={item.dataIndex}
                    key={item.key}
                    render={(text) => {
                      return <span className="text-table p-0">{text}</span>;
                    }}
                  />
                );
              })}
            </Table>
          ) : (
            <p className="text-center mt-10">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageAccount;
