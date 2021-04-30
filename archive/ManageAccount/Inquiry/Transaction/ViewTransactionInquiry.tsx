import { Button } from "antd";
import { goBack } from "connected-react-router";
import React, { FC } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { LOLCSDK } from "../../../../../../sdk";
import { useSDK } from "../../../../../../utils/hooks/useSDK";
import BasicInput from "../../../../../atoms/BasicInput.atom";
import InputContainer from "../../../../../organisms/BasicAccountDetails/InputContainer";

export interface ViewTransactionInquiry {
  goBack: () => any;
}

const ViewTransactionInquiry: FC<ViewTransactionInquiry> = ({ goBack }) => {
  const { accountId, transactionId } = useParams();

  const { data: transactions, loading, error } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.TransactionService.getTransactionsByAccountId(accountId, 0, 20),
    [accountId]
  );

  const data =
    transactions.data &&
    transactions.data.transaction.find(
      item => item.transactionId === transactionId
    );

  const transactionData = data || ({} as any);

  return (
    <div className="bg-white h-full relative flex-col flex flex-1">
      <div className="flex flex-col flex-1">
        <div className="w-full flex p-10 flex-wrap">
          <InputContainer
            className="w-1/5 mb-10"
            title="Transaction ID"
            input={
              <BasicInput
                placeholder="42412424"
                disabled={true}
                value={transactionId}
              />
            }
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Booking Date"
            input={
              <BasicInput
                value={transactionData.bookingDateTime || "-"}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Value Date"
            input={
              <BasicInput
                value={transactionData.valueDateTime || "-"}
                disabled={true}
              />
            }
          />

          <InputContainer
            className="w-1/5 mb-10"
            title="Transaction Code"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />

          <InputContainer
            className="w-1/5 mb-10"
            title="Subtransaction Code"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />

          <InputContainer
            className="w-1/5 mb-10"
            title="Transaction Reference"
            input={
              <BasicInput
                value={transactionData.transactionReference || "-"}
                disabled={true}
              />
            }
          />

          <InputContainer
            className="w-1/5 mb-10"
            title="Transaction Currency"
            input={
              <BasicInput
                value={transactionData.transactionAmountCurrencyCode || "-"}
                disabled={true}
              />
            }
          />

          <InputContainer
            className="w-1/5 mb-10"
            title="Transaction Amount"
            input={
              <BasicInput
                value={transactionData.transactionAmount || "-"}
                disabled={true}
              />
            }
          />

          <InputContainer
            className="w-1/5 mb-10"
            title="Credit/Debit"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Status"
            input={
              <BasicInput
                value={transactionData.status || "-"}
                disabled={true}
              />
            }
          />

          <InputContainer
            className="w-1/5 mb-10"
            title="Available Balance"
            input={
              <BasicInput
                value={transactionData.balanceAmount || "-"}
                disabled={true}
              />
            }
          />

          <InputContainer
            className="w-1/5 mb-10"
            title="Actual Balance"
            input={
              <BasicInput
                value={transactionData.actualAmount || "-"}
                disabled={true}
              />
            }
          />

          <InputContainer
            className="w-1/5 mb-10"
            title="Balance Credit/Debit"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />

          <InputContainer
            className="w-1/5 mb-10"
            title="Reversed transaction Number"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />

          <InputContainer
            className="w-1/5 mb-10"
            title="Created User"
            input={
              <BasicInput
                value={transactionData.createdUser || "-"}
                disabled={true}
              />
            }
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row flex-1 justify-end p-4">
          <Button
            className="text-xxxs"
            type="primary"
            onClick={() => {
              goBack();
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    goBack: () => dispatch(goBack())
  };
};

export default connect(null, mapDispatchToProps)(ViewTransactionInquiry);
