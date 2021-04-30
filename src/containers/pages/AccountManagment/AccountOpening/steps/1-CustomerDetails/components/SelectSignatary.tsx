import { Input, Modal, Space, Table } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { LOLCSDK } from "../../../../../../../sdk";
import { KeyPerson } from "../../../../../../../sdk/comn-customer/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import { P } from "../../../../../../atoms/typography";

export const SelectSignatary = ({
  isVisible,
  onSignatarySelected,
  customerIds,
  onCancel,
}: {
  isVisible: boolean;
  onSignatarySelected: (keyPerson: KeyPerson[]) => any;
  onCancel: () => any;
  customerIds: string[];
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  //   const selectorFunction = (relations: CusRelationship[]) => {
  //     return relations.filter((relation) => relation.curSignataryStatus === "YES");
  //   };

  const { data, loading } = useSDK<KeyPerson[]>(
    (sdk: LOLCSDK) => {
      const run = async () => {
        let signatories: KeyPerson[] = [];
        for (let customerId of customerIds) {
          const signatoriesX = await sdk.CustomerService.getKeyPersonByCustomerId(
            Number(customerId)
          );
          // console.log("signatoriesX", signatoriesX);
          signatories = [...signatories, ...signatoriesX];
        }
        return signatories;
      };
      return run();
    },
    [],
    false,
    []
  );

  console.log("dataSig", data);

  const visibleData =
    searchTerm !== ""
      ? data.filter((item) =>
          (item.perPreferredName || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      : data;

  const columns = [
    {
      title: "Signatary Name",
      dataIndex: "perFullName",
      type: "STRING",
    },
    {
      title: "Signatary Code",
      dataIndex: "perCode",
      type: "STRING",
    },
    {
      title: "Date of Birth",
      dataIndex: "perDateOfBirth",
      type: "DATE",
      render: (text: any, record: any) => (
        <P>{moment(text).format("MM-DD-YYYY")}</P>
      ),
    },
    {
      title: "Identification",
      dataIndex: "perId",
      type: "STRING",
    },
    // {
    //   title: "Customer Photo",
    //   dataIndex: "",
    //   type: "STRING",
    // },
    {
      title: "KYC Status",
      dataIndex: "perPepStatus",
      type: "STRING",
    },
    {
      title: "Action",
      render: (text: any, record: any) => (
        <Space size="middle" className="cursor-pointer">
          <P color="blue" onClick={() => onSignatarySelected(record)}>
            Select
          </P>
        </Space>
      ),
    },
  ];
  return (
    <Modal
      title={"Select Signatary"}
      visible={isVisible}
      onCancel={onCancel}
      footer={null}
      bodyStyle={{ padding: 0, borderRadius: "5rem" }}
      className="relative w-3/4 overflow-hidden rounded-lg border bg-white pb-0"
      centered={true}
    >
      <div
        className="relative bg-white flex flex-col"
        style={{ minHeight: 500 }}
      >
        <div className=" pl-4 pr-4 p-2" style={{ background: "#F8F8F8" }}>
          <div className="my-4 mx-2">
            <Input.Search
              placeholder="Type..."
              enterButton="Search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              loading={false}
              onSearch={(value) => {
                console.log(value);
                setSearchTerm(value);
              }}
            />
          </div>
        </div>
        <div className="relative fill flex flex-col">
          <Table
            className="relative fill"
            columns={columns}
            dataSource={visibleData}
            loading={loading}
            pagination={false}
          />
        </div>
      </div>
    </Modal>
  );
};
