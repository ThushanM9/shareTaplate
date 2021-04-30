import { Button, Modal, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { ResourceSelectorModal } from "../../../../../schemas/helpers/resource-selector.modal";
import { LOLCSDK } from "../../../../../sdk";
import { useGetSDK, useSDK } from "../../../../../utils/hooks/useSDK";
import { P } from "../../../../atoms/typography";
import { accountSelectorSchema } from "../../../AccountManagment/selector-schemas/account-selector/account-selector.schemas";
import { AccountProps } from "../interfaces";

const Account: React.FC<AccountProps> = ({ updateState }) => {
  const [selectedAccount, setSelectedAccount] = useState<AccountProps | null>();

  const [isAccountSelected, setIsAccountSelected] = useState(false);

  const [accountSelectModal, setaccountSelectModal] = useState(false);

  const [signatures, setSignatures] = useState<any>();

  const [selectedSignature, setSelectedSignature] = useState<string | null>(
    null
  );

  const [isSignatureModalVisible, setSignatureModalVisible] = useState(false);

  const SDK = useGetSDK();

  useEffect(() => {
    if (selectedAccount) {
      updateState(selectedAccount);
    } else {
      updateState(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAccount]);

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

  const clearState = () => {
    setIsAccountSelected(false);
    setSelectedAccount(null);
    setSignatures(null);
  };

  const accountColumns = [
    {
      title: "Scheme Name",
      dataIndex: "schemeCode",
      key: "schemeCode",
    },
    {
      title: "Account Number",
      dataIndex: "casaIdentification",
      key: "casaIdentification",
    },
    {
      title: "Account Name",
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
      dataIndex: "customerName",
      key: "customerName",
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

  const getSignatureImage = async (si: string) => {
    setSignatureModalVisible(true);
    //TODO:*if the image is already cached do not make this call : fix in future
    await SDK.SignatureService.getSignatureViewById(si).then((data) => {
      let url = window.URL.createObjectURL(data);
      setSelectedSignature(url);
    });
  };

  const { loading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.AccountService.getAccountById(String(selectedAccount?.id!)).then(
        (data) => {
          setSignatures(
            data.ApplicantDetails.map((item: any) => ({
              customerName: item.customerName,
              casaCustomerId: item.casaCustomerId,
              signatureId: item.signatureDetails?.signatureUrl,
              status: item.status,
            }))
          );
        }
      ),
    [selectedAccount?.id],
    !selectedAccount,
    []
  );

  return (
    <>
      <Modal
        visible={isSignatureModalVisible}
        footer={null}
        title="Signature View"
        onCancel={() => setSignatureModalVisible(false)}
      >
        <Spin
          spinning={!selectedSignature?.length}
          className="flex flex-1 justify-center items-center"
        >
          <img
            alt=""
            style={{
              width: "30rem",
              height: "auto",
              marginBottom: "2rem",
            }}
            src={selectedSignature! && selectedSignature!}
          />
        </Spin>
      </Modal>
      <ResourceSelectorModal
        isVisible={accountSelectModal}
        onCancel={UIActions.accountSelector.hide}
        onResourceSelected={(account) => {
          console.log(account, "ACCOUNT");
          const {
            accountNumber,
            customerName,
            schemeCode,
            casaIdentification,
            accountType,
            status,
            id,
            accountOpenBranchDescription,
            currencyCode,
            currencyId,
            subProductId,
            customerId,
            productCategoryId,
            customerOrganizationType,
            identificationNumber,
          } = account;
          setSelectedAccount({
            key: 1,
            accountNumber,
            schemeCode,
            accountType,
            casaIdentification,
            customerName,
            currencyId,
            subProductId,
            status,
            accountOpenBranchDescription,
            currencyCode,
            customerId,
            customerOrganizationType,
            productCategoryId,
            identificationNumber,
            id,
          });
          UIActions.accountSelector.hide();
          setIsAccountSelected(true);
        }}
        // write the account selector schema with search funtions
        schema={accountSelectorSchema}
      />

      <Table
        size="small"
        columns={accountColumns}
        dataSource={selectedAccount! && [selectedAccount!]}
        pagination={false}
      />

      {isAccountSelected! ? (
        <Button onClick={clearState} className="mt-5" block type="primary">
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
          {selectedAccount &&
          selectedAccount.customerOrganizationType === "ORIN"
            ? "Individual Customer"
            : "Corporate Customer"}
        </P>
        <Table
          loading={loading}
          size="small"
          columns={signatureColumns}
          dataSource={signatures && signatures}
          pagination={false}
        />
      </div>
    </>
  );
};

export default Account;
