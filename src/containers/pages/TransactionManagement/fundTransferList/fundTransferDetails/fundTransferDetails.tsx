import { CheckCircleFilled, QuestionCircleOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Modal, notification, Select } from "antd";
import { goBack } from "connected-react-router";
import React, { FC, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { LOLCSDK } from "../../../../../sdk";
import { assets } from "../../../../../ui-helpers/assets";
import { useGetSDK, useSDK } from "../../../../../utils/hooks/useSDK";
import Accordion, { accordionProp } from "../../../../atoms/Accordion.atom";
import Container from "../../../../atoms/Container.atom";
import { P } from "../../../../atoms/typography";
import CounterPartyDetailForm from "../counterPartyDetailsForm/counterPartyDetailsForm";
import FundTransferTable from "../fundTransferTable/fundTransferTable";
import InformationTab from "../informationTab/informationTab";
import { UserProps } from "../interfaces";
import StatusUpdateForm from "../statusUpdateForm/statusUpdateForm";
import TransferDetailsForm from "../transferDetailsForm/transferDetailsForm";

const { Option } = Select;

const StyledModal = styled(Modal)`
  & .ant-modal-footer {
    border-top-width: 0;
  }
`;

const FundTransferDetails: FC<FundTransferDetailProps> = ({
  goBack,
  transferId,
}) => {
  const [state, setState] = useState<any>();

  const { user } = useAuth0();

  const SDK = useGetSDK();

  const [currentUser, setCurrentUser] = useState<UserProps>();

  const [confirmLoading, setConfirmLoading] = useState(false);

  const [allCurrencies, setAllCurrencies] = useState<any>();

  const [paymentMethod, setPaymentMethod] = useState<any>();

  const [paymentType, setPaymentType] = useState<any>();

  const [visible, setVisible] = useState(false);

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.UserService.getUserByUserUsername(user.nickname).then((data) => {
        const { userBranchMappings, userId, userName } = data;

        setCurrentUser({
          userId,
          userBranchMappings,
          userName,
        });
      }),
    [],
    false,
    {}
  );

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.AccountService.getPaymentTypeMethod().then((data) => {
        setPaymentType(data);
      }),
    [],
    false,
    {}
  );

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.AccountService.getPaymentSendMethod().then((data) => {
        setPaymentMethod(data);
      }),
    [],
    false,
    {}
  );

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.TransactionInOutService.getFundTransferById(transferId).then(
        (data) => {
          setState(data);
        }
      ),
    [],
    false,
    {}
  );

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.CurrencyDetailService.getAllCurrencies().then((data) => {
        setAllCurrencies(data);
      }),
    [],
    false,
    {}
  );

  const updateState = (values: {
    amountType: string;
    accountAmount: number;
    transactionAmount: number;
    fromTransactionCurrencyId: number;
    fromAccountCurrencyId: number;
    transactionExchangeRate: number;
    reference: string;
    transactionNumber: string;
    paymentType: number;
    paymentMethod: number;
    date: any;
  }) => {
    if (values) {
      setState({
        ...state,
        amountType: values.amountType,
        accountAmount: values.accountAmount,
        transactionAmount: values.transactionAmount,
        fromTransactionCurrencyId: values.fromTransactionCurrencyId,
        fromAccountCurrencyId: values.fromAccountCurrencyId,
        transactionExchangeRate: values.transactionExchangeRate,
        reference: values.reference,
        transactionNumber: values.transactionNumber,
        paymentType: values.paymentType,
        paymentMethod: values.paymentMethod,
        //date: values.date
      });
    }
  };

  const updateStatus = (values: {
    approvalStatus: string;
    reasonType: string;
    counterPartyAddress: string;
  }) => {
    if (values) {
      setState({
        ...state,
        approvalStatus: values.approvalStatus,
        reasonType: values.reasonType,
        counterPartyAddress: values.counterPartyAddress,
      });
    }
  };

  const Operations: accordionProp[] = [
    {
      key: "1",
      title: "1. Operation Type (Fund Transfer)",
      component: (
        <div
          className="w-full pb-16 pt-8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <P fontSize={16} color="#595959">
            Fund Transfer
          </P>
        </div>
      ),
      disabled: false,
      style: { paddingBottom: 15 },
    },
    {
      key: "2",
      title: (state: any) =>
        `2. Transfer Type ${
          state && state.fundTransferType ? `(${state.fundTransferType})` : ""
        }`,
      component: (
        <div
          className="w-full pb-16 pt-8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <P fontSize={16} color="#595959">
            {state && state.fundTransferType}
          </P>
        </div>
      ),
      disabled: false,
      style: { paddingBottom: 15 },
    },
    {
      key: "3",
      title: (state: any) =>
        `3. Party Type ${
          state && state.fundTransferType === "Internal Third Party"
            ? "(Other Party)"
            : "(Own)"
        }`,
      component: (
        <div
          className="w-full pb-16 pt-8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <P fontSize={16} color="#595959">
            {state && state.fundTransferType === "Internal Third Party"
              ? `Other Party`
              : "Own"}
          </P>
        </div>
      ),
      disabled: false,
      style: { paddingBottom: 15 },
    },
    {
      key: "4",
      title: (state: any) =>
        `4. From Account ${
          state && state.debitAccountNo ? `(${state.debitAccountNo})` : ""
        }`,
      component: <FundTransferTable state={state} debit={true} />,
      disabled: false,
      style: { paddingBottom: 15 },
    },
    {
      key: "5",
      title: (state: any) => `5. To Account`,
      component: <FundTransferTable state={state} credit={true} />,
      disabled: false,
      style: { paddingBottom: 15 },
    },
    {
      key: "6",
      title: (state: any) => `6. Fund Transfer Details`,
      component: (
        <TransferDetailsForm
          state={state}
          updateState={updateState}
          currecyList={allCurrencies}
          paymentMethod={paymentMethod}
          paymentType={paymentType}
        />
      ),
      disabled: false,
      style: { padding: 0, paddingBottom: 0 },
      collapsible: false,
    },
    {
      key: "7",
      title: (state: any) => `7. Counter Party Details`,
      component: <CounterPartyDetailForm state={state} />,
      disabled: false,
      style: { padding: 0, paddingBottom: 0 },
      collapsible: false,
    },
    {
      key: "8",
      title: (state: any) => `8. Status Update`,
      component: <StatusUpdateForm updateState={updateStatus} />,
      disabled: false,
      style: { padding: 0, paddingBottom: 0 },
      collapsible: false,
    },
  ];

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOK = async () => {
    setVisible(false);

    if (state.approvalStatus === "confirm") {
      setConfirmLoading(true);

      const objToSend = {
        notes: "confirm",
      };

      await SDK.TransactionInOutService.confirmFundTransfer(state.id, objToSend)
        .then((data) => {
          if (data) {
            setVisible(false);
            setConfirmLoading(false);
            window.location.reload(true);
          }
        })
        .catch((error) => {
          setVisible(false);
          notification.info({
            message: `Error`,
            description: `Error has Occured`,
            placement: "bottomRight",
            icon: <CheckCircleFilled style={{ color: assets.color.red }} />,
          });
        });
    } else {
      setConfirmLoading(true);

      const objToSend = {
        notes: "cancel",
      };

      await SDK.TransactionInOutService.cancelFundTransfer(state.id, objToSend)
        .then((data) => {
          if (data) {
            setVisible(false);
            setConfirmLoading(false);
            window.location.reload(true);
          }
        })
        .catch((error) => {
          setVisible(false);
          notification.info({
            message: `Error`,
            description: `Error has Occured`,
            placement: "bottomRight",
            icon: <CheckCircleFilled style={{ color: assets.color.red }} />,
          });
        });
    }
  };

  return (
    <Container
      cards={
        <InformationTab
          state={state}
          currentUser={currentUser}
          transferId={transferId}
        />
      }
      confirmButton={{
        name: "Confirm",
        onClick: () => showModal(),
      }}
      className="p-5"
    >
      <Accordion data={Operations} state={state} />

      <StyledModal
        visible={visible}
        onOk={handleOK}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={600}
        cancelText={"Previous"}
        okText={"Create and Print"}
        bodyStyle={{ padding: 40 }}
      >
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <QuestionCircleOutlined
              style={{ fontSize: 18, color: "#F1B94F", marginRight: 20 }}
            />

            <P className="mb-3" fontSize={14} color="black" bold>
              You are about to create a Fund Transfer Request
            </P>
          </div>

          <div style={{ marginLeft: 38, paddingBottom: 20 }}>
            <P fontSize={14} color="black">
              Are you sure you want to proceed?
            </P>
          </div>
        </div>
      </StyledModal>
    </Container>
  );
};

interface FundTransferDetailProps {
  goBack: () => any;
  transferId: number;
}

const mapStateToProps = (state: any) => ({
  transferId: state.router.location.state?.id,
});

const mapDispatchToProps = (dispatch: any) => ({
  goBack: () => {
    dispatch(goBack());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FundTransferDetails);
