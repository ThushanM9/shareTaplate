import { Input, Table, Tag } from "antd";
import { push } from "connected-react-router";
import moment from "moment";
import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { LOLCSDK } from "../../../../sdk";
import { useSDK } from "../../../../utils/hooks/useSDK";
import { P } from "../../../atoms/typography";

const FundTransferList: FC<FundTransferListProps> = ({
  goToTransferDetails,
}) => {
  const location = useLocation();

  const [state, setState] = useState<any>();

  const [list, setList] = useState<any>();

  let params = {
    status: "CREATED",
    sortType: "DESC",
    sortColumn: "createdDate",
    isDetailed: true,
  };

  const { loading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.TransactionInOutService.getFundTransfers(params).then((data) => {
        setList({
          ...list,
          data,
        });
      }),
    [],
    false,
    {}
  );

  const columns = [
    {
      title: "Fund Transfer Number",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Account Number",
      dataIndex: "creditorAccountNumber",
      key: "creditorAccountNumber",
    },
    {
      title: "Customer Name",
      dataIndex: "debitAccountHolderName",
      key: "debitAccountHolderName",
    },
    {
      title: "Transfer Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      render: (text: any, record: any) => (
        <>
          <a>{moment(record.paymentDate).format("DD-MM-YYYY")}</a>
        </>
      ),
    },
    {
      title: "Amount",
      dataIndex: "transactionAmount",
      key: "transactionAmount",
      render: (value: string, record: any) => {
        return (
          <div className="flex flex-row justify-start">
            <div className="text-right w-20">
              <p>
                {Number(record.transactionAmount).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (text: any, record: any) => (
        <Tag color="geekblue">{record.status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <button
          onClick={() => {
            goToTransferDetails(
              location.pathname + `/${record.id}/fund-transfer-details`,
              record.id
            );
          }}
        >
          <P fontSize={14} color="#1890FF">
            Approve
          </P>
        </button>
      ),
    },
  ];

  // CHECK THIS AND REDO IT LATER FOR NOW IT WORKS BUT NOT EFFICIENT
  const onSearch = (value: any) => {
    if (list.data.content) {
      const filterTable = list.data.content.filter((o: any) =>
        Object.keys(o).some((k) => String(o[k]).includes(value))
      );

      setState({ filterTable });
    }
  };

  return (
    <div className="fill h-full flex flex-row bg-white">
      <div className="relative bg-white flex flex-col w-full mx-4 my-4">
        <div className="my-4 mx-2">
          <Input.Search
            className="w-1/2"
            placeholder="Search"
            onSearch={onSearch}
          />
        </div>

        {list && list.data.content && (
          <Table
            loading={loading}
            columns={columns}
            dataSource={
              state && state.filterTable.length > 0
                ? state.filterTable
                : list.data.content
            }
          />
        )}
      </div>
    </div>
  );
};

interface FundTransferListProps {
  goToTransferDetails: (url: string, id: number) => any;
}

const mapDispatchToProps = (disaptch: any) => ({
  goToTransferDetails: (url: string, id: number) => {
    disaptch(
      push({
        pathname: url,
        state: {
          id,
        },
      })
    );
  },
});

export default connect(null, mapDispatchToProps)(FundTransferList);
