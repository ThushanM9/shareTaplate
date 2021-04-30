import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Select, Table, Tag } from "antd";
import { goBack, push } from "connected-react-router";
import moment from "moment";
import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { LOLCSDK } from "../../../../../sdk";
import useDebounce from "../../../../../utils/hooks/debounce";
import { useSDK } from "../../../../../utils/hooks/useSDK";
import Container from "../../../../atoms/Container.atom";
import { dateX } from "../../../../atoms/DateFilter.atom";
import { P } from "../../../../atoms/typography";
import DateFilterDDown from "../../../../molecules/DateFilterDropDown.molecule";

const { Option } = Select;

const Statements: FC<StatementsProps> = ({
  goBack,
  accountId,
  goToTransactionInquiry,
}) => {
  const location = useLocation();

  const columns = [
    {
      title: "Transaction No.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Value Date",
      dataIndex: "valueDateTime",
      key: "valueDateTime",
    },
    {
      title: "Booking Date",
      dataIndex: "bookingDateTime",
      key: "bookingDateTime",
    },
    {
      title: "Transaction Type",
      dataIndex: "creditDebitIndicator",
      key: "creditDebitIndicator",
      render: (text: string, record: any) =>
        record.creditDebitIndicator === "DEBIT" ? (
          <Tag color="green">
            <P fontSize={14}>{text}</P>
          </Tag>
        ) : (
          <Tag color="blue">
            <P fontSize={14}>{text}</P>
          </Tag>
        ),
    },
    {
      title: "Description",
      dataIndex: "bankTransactionSubCode",
      key: "bankTransactionSubCode",
    },
    {
      title: "Transaction Group",
      dataIndex: "transactionGroupId",
      key: "transactionGroupId",
    },
    {
      title: "Debit Amount",
      dataIndex: "transactionAmount",
      key: "transactionAmount",
      render: (text: string, record: any) =>
        record.creditDebitIndicator === "DEBIT" ? (
          <p>{record.transactionAmount}</p>
        ) : (
          <div className="flex flex-1 flex-row">
            <P className="pl-6">-</P>
          </div>
        ),
    },
    {
      title: "Credit Amount",
      dataIndex: "transactionAmount",
      key: "transactionAmount",
      render: (text: string, record: any) =>
        record.creditDebitIndicator === "CREDIT" ? (
          <p>{record.transactionAmount}</p>
        ) : (
          <div className="flex flex-1 flex-row">
            <P className="pl-6">-</P>
          </div>
        ),
    },
    {
      title: "Balance",
      dataIndex: "balanceAmount",
      key: "balanceAmount",
    },
    {
      title: "Reversal Transaction No.",
      dataIndex: "",
      key: "",
    },
    {
      title: "View Summary",
      dataIndex: "",
      key: "",
      render: (text: string, record: any) => {
        return (
          <Button
            onClick={() =>
              goToTransactionInquiry(
                location.pathname + `/${record.id}/transaction-inquiry`,
                record.id
              )
            }
          >
            View
          </Button>
        );
      },
    },
  ];

  const [tableData, setTableData] = useState<any>([]);
  const [searchKey, setSearchKey] = useState("");
  const [paginationConfig, setPaginationConfig] = useState({
    total: 0,
    defaultPageSize: 10,
    pageSize: 10,
    current: 1,
  });
  const [selectedDateRange, setSelectedDateRange] = useState<dateX>({
    from: "",
    to: "",
    type: "",
    filterCleared: true,
  });

  // TODO: need a better solution for this
  const debouncedSearchKey = useDebounce(searchKey, 500);

  const { loading } = useSDK(
    async (sdk: LOLCSDK) => {
      let data;
      if (!!debouncedSearchKey.length) {
        data = await sdk.TransactionService.SingleAccountPrintStatement({
          transactionId: searchKey,
        });
      } else {
        data = await sdk.TransactionService.SingleAccountPrintStatement(
          selectedDateRange?.filterCleared
            ? {
                accountId,
                page: paginationConfig.current - 1,
                pageSize: 10,
              }
            : {
                accountId,
                page: paginationConfig.current - 1,
                pageSize: 10,
                fromDate: moment(selectedDateRange!.from).format("DD-MM-YYYY"),
                toDate: moment(selectedDateRange!.to).format("DD-MM-YYYY"),
              }
        );
      }

      setTableData(
        data?.content?.map((item: any) => ({
          ...item,
          key: item.id,
          valueDateTime: moment(item.valueDateTime).format("YYYY-MM-DD"),
          bookingDateTime: moment(item.bookingDateTime).format("YYYY-MM-DD"),
        }))
      );
      setPaginationConfig({
        ...paginationConfig,
        current: data.number + 1,
        pageSize: data.size,
        total: data.totalElements,
      });
      return data;
    },
    [paginationConfig.current, selectedDateRange, debouncedSearchKey],
    false,
    []
  );

  const onPaginationChange = (page: number, pageSize?: number) => {
    const newPaginationConfig = { ...paginationConfig, current: page };
    if (pageSize) {
      newPaginationConfig.pageSize = pageSize;
    }
    setPaginationConfig(newPaginationConfig);
  };

  const confirm = () => {
    Modal.confirm({
      title: "Print Single Statement",
      content: (
        <div className="flex w-full justify-between">
          <P fontSize={"1rem"}>Your about to print x number of statments</P>
          <Select
            style={{ width: 250 }}
            value={"f1"}
            // onChange={setType}
            onClick={(e: any) => e.stopPropagation()}
          >
            <Option value="f1">Format 1</Option>
            <Option value="f2">Format 2</Option>
            <Option value="f3">Format 3</Option>
          </Select>
        </div>
      ),
      okText: "Print All",
      cancelText: "Go Back",
      width: window.screen.width - 300, //TODO: not the best work i've done xD
    });
  };

  return (
    <Container previous={{ name: "Back", onClick: goBack }}>
      <div className="flex flex-row justify-between items-center p-4">
        <div>
          <Input
            allowClear
            style={{ width: 220 }}
            placeholder="Search by Transaction No"
            prefix={<SearchOutlined />}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <DateFilterDDown
          onChange={(value, date) => setSelectedDateRange(date)}
        />
      </div>

      <Table
        loading={loading}
        size="large"
        columns={columns}
        dataSource={tableData}
        pagination={{
          ...paginationConfig,
          defaultCurrent: 1,
          onChange: onPaginationChange,
        }}
      />
    </Container>
  );
};

interface StatementsProps {
  goBack: () => any;
  accountId: string;
  goToTransactionInquiry: (url: string, id: string) => any;
}

const mapStateToProps = (state: any) => ({
  accountId: state.router.location.state?.id,
});

const mapDispatchToProps = (dispatch: any) => ({
  goBack: () => {
    dispatch(goBack());
  },
  goToTransactionInquiry: (url: string, id: string) => {
    dispatch(
      push({
        pathname: url,
        state: {
          id,
        },
      })
    );
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Statements);
