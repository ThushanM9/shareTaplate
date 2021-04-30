import { Button, Table } from "antd";
import Modal from "antd/lib/modal/Modal";
import { push } from "connected-react-router";
import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { FormCardTemplate } from "../../../../schemas/helpers/form-card";
import { ResourceSelectorModal } from "../../../../schemas/helpers/resource-selector.modal";
import { LOLCSDK } from "../../../../sdk";
import { useGetSDK, useSDK } from "../../../../utils/hooks/useSDK";
import Container from "../../../atoms/Container.atom";
import TabContainer from "../../../atoms/TabContainer.atom";
import TabCotainerPane from "../../../atoms/TabContainerPane.atom";
import { P } from "../../../atoms/typography";
import { accountSelectorSchema } from "../../AccountManagment/selector-schemas/account-selector/account-selector.schemas";

const StatmentInquiry: FC<StatmentInquiryProps> = ({ goToStatements }) => {
  const location = useLocation();
  const SDK = useGetSDK();

  const columns = [
    {
      title: "Schema Name",
      dataIndex: "schemeCode",
      key: "schemeCode",
    },
    {
      title: "Account Number",
      dataIndex: "casaIdentification",
      key: "casaIdentification",
    },
    {
      title: "Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const signatureColumns = [
    {
      title: "Person Name",
      dataIndex: "casaCustomerId",
      key: "casaCustomerId",
    },
    {
      title: "ID",
      dataIndex: "signatureId",
      key: "signatureId",
    },
    {
      title: "Signature",
      key: "action",
      render: (text: any, record: any) => (
        <Button
          type="link"
          disabled={!record.signatureId}
          onClick={() => getSignatureImage(record.signatureId)}
        >
          View
        </Button>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const [accountSelectModal, setaccountSelectModal] = useState(false);
  const [signatureModal, setSignatureModal] = useState(false);
  const [selectedSignature, setSelectedSignature] = useState<string | null>(
    null
  );
  const [selectedAccount, setSelectedAccount] = useState<{
    key: number;
    schemeCode: string;
    casaIdentification: string;
    customerName: string;
    status: string;
    id?: number;
  } | null>(null);

  const [signatures, setSignatures] = useState<any>();

  const UIActions = {
    accountSelector: {
      show: () => {
        setaccountSelectModal(true);
      },
      hide: () => {
        setaccountSelectModal(false);
      },
    },
  };

  const getSignatureImage = (si: string) => {
    console.log("si :", si);
    SDK.SignatureService.getSignatureViewById(si).then((data) => {
      console.log("image :", data);
      // let u8 = new Uint8Array(data);
      // let b64 = btoa(String.fromCharCode.apply(null, u8 as any));
      // setSelectedSignature();
    });
  };

  const { loading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.AccountService.getAccountById(String(selectedAccount?.id!)).then(
        (data) => {
          setSignatures(
            data.ApplicantDetails.map((item) => ({
              casaCustomerId: item.casaCustomerId,
              signatureId: item.signatureId,
              status: item.status,
            }))
          );
        }
      ),
    [selectedAccount?.id],
    !selectedAccount,
    []
  );

  const clearState = () => {
    setSelectedAccount(null);
    setSignatures(null);
  };

  return (
    <Container
      next={{
        name: "Next",
        onClick: () =>
          goToStatements(
            location.pathname + `/${selectedAccount?.id}/statements`,
            selectedAccount?.id!
          ),
      }}
    >
      <Modal visible={signatureModal}>
        {/* <img
          alt=""
          style={{
            width: "30rem",
            height: "auto",
            marginBottom: "2rem",
          }}
          src={`data:image/jpeg;base64,${b64}`}
        /> */}
      </Modal>
      <ResourceSelectorModal
        isVisible={accountSelectModal}
        onCancel={UIActions.accountSelector.hide}
        onResourceSelected={(account) => {
          const {
            schemeCode,
            casaIdentification,
            customerName,
            status,
            id,
          } = account;
          setSelectedAccount({
            key: 1,
            schemeCode,
            casaIdentification,
            customerName,
            status,
            id,
          });

          UIActions.accountSelector.hide();
        }}
        // write the account selector schema with search funtions
        schema={accountSelectorSchema}
      />
      <TabContainer>
        <TabCotainerPane tab="Account Details" key="1">
          <FormCardTemplate
            title="Account Details"
            description="Add and existing or new account"
          >
            <Table
              loading={loading}
              size="small"
              columns={columns}
              dataSource={selectedAccount! && [selectedAccount!]}
              pagination={false}
            />
            {selectedAccount! ? (
              <Button
                onClick={clearState}
                className="mt-5"
                block
                type="primary"
              >
                Clear Account
              </Button>
            ) : (
              <Button
                onClick={UIActions.accountSelector.show}
                className="mt-5"
                block
                type="primary"
              >
                Add Account
              </Button>
            )}

            <div className="mt-6">
              <P fontSize={14} bold className="py-2">
                Individual Customer
              </P>
              <Table
                loading={loading}
                size="small"
                columns={signatureColumns}
                dataSource={signatures && signatures}
                pagination={false}
              />
            </div>
          </FormCardTemplate>
          {/* goToStatements(location.pathname + "/general-statement") */}
        </TabCotainerPane>
      </TabContainer>
    </Container>
  );
};

interface StatmentInquiryProps {
  goToStatements: (url: string, id: number) => any;
}

const mapDispatchToProps = (dispatch: any) => ({
  goToStatements: (url: string, id: number) => {
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

export default connect(null, mapDispatchToProps)(StatmentInquiry);
