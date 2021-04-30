import { Modal, Space, Table } from "antd";
import moment from "moment";
import React, { useContext, useState } from "react";
import { CusRelationship } from "../../../../../../../sdk/comn-customer/interfaces";
import { P } from "../../../../../../atoms/typography";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";

export const SelectNominee = ({
  isVisible,
  onNomineeSelected,
  selectedCustomers,
  onCancel,
}: {
  isVisible: boolean;
  onNomineeSelected: (customer: CusRelationship) => any;
  selectedCustomers: number[];
  onCancel: () => any;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const selectorFunction = (relations: CusRelationship[]) => {
    return relations.filter((relation) => relation.curNomineeStatus === "YES");
  };
  const { state } = useContext(AccountOpeningContainerContext);
  // console.log(state.customer);
  // const { data, loading } = useSDK<CusRelationship[]>(
  //   (sdk: LOLCSDK) =>
  //     new Promise((res, rej) => {
  //       const run = async () => {
  //         let allNominees: CusRelationship[] = [];
  //         for (let selectedCustomer of selectedCustomers) {
  //           const nominees = await sdk.CustomerService.getNomineesByCustomerId(
  //             selectedCustomer
  //           );
  //           allNominees = [
  //             ...allNominees,
  //             ...(nominees || []).map((nominee) => ({
  //               ...nominee,
  //               casaCustomerId: selectedCustomer,
  //             })),
  //           ];
  //         }
  //         res(selectorFunction(allNominees));
  //       };
  //       run();
  //     }),
  //   [selectedCustomers],
  //   false,
  //   []
  // );

  const visibleData =
    searchTerm !== ""
      ? state.customer?.cusRelationships.filter((item) =>
          (item.perPreferredName || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      : state.customer?.cusRelationships;

  const columns = [
    {
      title: "Nominee Name",
      dataIndex: "perFullName",
      type: "STRING",
    },
    {
      title: "Nominee Code",
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
      title: "Action",
      render: (text: any, record: any) => (
        <Space size="middle" className="cursor-pointer">
          <P color="blue" onClick={() => onNomineeSelected(record)}>
            Select
          </P>
        </Space>
      ),
    },
  ];
  return (
    <Modal
      title={"Select Nominees"}
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
        <div className="relative fill flex flex-col">
          <Table
            className="relative fill"
            columns={columns}
            dataSource={visibleData?.map((item: any) => item)}
            // loading={loading}
            pagination={false}
          />
        </div>
      </div>
    </Modal>
  );
};
