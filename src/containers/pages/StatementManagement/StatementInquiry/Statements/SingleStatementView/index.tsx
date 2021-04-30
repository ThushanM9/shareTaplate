import { Spin } from "antd";
import { goBack } from "connected-react-router";
import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { LOLCSDK } from "../../../../../../sdk";
import { useSDK } from "../../../../../../utils/hooks/useSDK";
import Container from "../../../../../atoms/Container.atom";
import { P } from "../../../../../atoms/typography";

const SingleStatementView: FC<SingleStatementViewProps> = ({
  goBack,
  statementId,
}) => {
  const [statement, setStatement] = useState<any>();
  const columns = [
    {
      title: "Transaction ID",
      key: "id",
      value: "",
    },
    {
      title: "Transaction Date",
      key: "bookingDateTime",
      value: "",
    },
    {
      title: "Transaction Amount",
      key: "transactionAmount",
      value: "",
    },
    {
      title: "Charges",
      key: "na",
      value: "",
    },
    {
      title: "Tax",
      key: "na",
      value: "",
    },
    {
      title: "Amount",
      key: "transactionAmount",
      value: "",
    },
    {
      title: "Created User",
      key: "createdUser",
      value: "",
    },
    {
      title: "Created Date adn Time",
      key: "createdDate",
      value: "",
    },
    {
      title: "Transaction Type",
      key: "creditDebitIndicator",
      value: "",
    },
    {
      title: "Transaction Refernce",
      key: "transactionReference",
      value: "",
    },
    {
      title: "Transaction Description",
      key: "na",
      value: "",
    },
  ];

  const { loading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.TransactionService.SingleAccountPrintStatement({
        transactionId: statementId,
      }).then((data) => {
        setStatement(
          columns.map((item: any) => {
            if (item.key in data.content[0]) {
              return {
                ...item,
                value: data.content[0][item.key],
              };
            }
            return item;
          })
        );
      }),
    [],
    false,
    {}
  );

  return (
    <Container
      previous={{
        name: "Back",
        onClick: () => goBack(),
      }}
      className="p-5"
    >
      <P bold fontSize="1.3rem">
        Transaction Inquiry for {statementId}
      </P>
      <Spin spinning={loading}>
        <div className="flex flex-wrap mt-10">
          {statement &&
            statement.map((item: any) => (
              <div className="w-48 pb-1 mr-10 mb-10">
                <P fontSize="0.9rem" bold className="pl-2 pb-1">
                  {item.title}
                </P>
                <P fontSize="0.9rem" className="pl-2 pt-1">
                  {item.value}
                </P>
              </div>
            ))}
        </div>
      </Spin>
    </Container>
  );
};

interface SingleStatementViewProps {
  goBack: () => any;
  statementId: string;
}
const mapStateToProps = (state: any) => ({
  statementId: state.router.location.state?.id,
});

const mapDispatchToProps = (dispatch: any) => ({
  goBack: () => {
    dispatch(goBack());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStatementView);
