import { Form, Input, Select } from "antd";
import React, { useState } from "react";
import { LOLCSDK } from "../../../../../sdk";
import { useGetSDK, useSDK } from "../../../../../utils/hooks/useSDK";
import { DepositDetailsFormProps } from "../interfaces";

const FundTransferAccount: React.FC<DepositDetailsFormProps> = ({
  updateState,
  state,
}) => {
  const { Option } = Select;

  const { TextArea } = Input;

  const [form] = Form.useForm();

  const SDK = useGetSDK();

  const [banks, setBanks] = useState<any>();

  const [branch, setBranch] = useState<any>();

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.BankService.getAllBanks().then((data) => {
        setBanks(data);
      }),
    [],
    false,
    {}
  );

  const getBranchesByBankId = async (id: number) => {
    await SDK.BankService.getBranchesByBankId(id.toString()).then((data) => {
      setBranch(data);
    });
  };

  const saveFundTransferFormData = async (data: any) => {
    let bank;

    bank = banks.content.find((bankInfo: any) => {
      return bankInfo.id === data.bankId;
    });

    if (data && data.bankId) getBranchesByBankId(data.bankId);

    if (data && bank && branch) {
      data.bankCode = bank ? bank.bankCode : "";
      data.bankName = bank ? bank.bankName : "";

      branch.map((item: any) => {
        data.bankBranchId = item.id;
        data.bankBranchCode = item.bbrhCode;
        data.bankBranchName = item.bbrhName;
      });

      updateState(data);
    }
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        name="fundTransferForm"
        initialValues={state}
        onValuesChange={() => {
          saveFundTransferFormData(form.getFieldsValue());
        }}
      >
        <div
          className="w-full mb-4 py-1 pt-3 pl-6"
          style={{
            backgroundColor: "#FAFAFA",
          }}
        >
          <Form.Item label="Party Type" name={"partyType"}>
            <Select className="w-3/12">
              <Option value="domestic">Domestic</Option>
              <Option disabled value="international">
                International
              </Option>
            </Select>
          </Form.Item>
        </div>
        <div className="grid grid-cols-3 gap-2 px-6">
          <Form.Item name={"name"} label="Name">
            <Input className="w-full" disabled={false} placeholder="Type..." />
          </Form.Item>

          <Form.Item label="Purpose" name={"purpose"}>
            <Input className="w-full" disabled={false} placeholder="Type..." />
          </Form.Item>

          <Form.Item label="Bank Name" name={"bankId"}>
            <Select className="w-full">
              {banks &&
                banks.content.map((data: any) => (
                  <Option value={data.id}>{data.bankName}</Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item name={"account"} label="Account">
            <Input className="w-full" disabled={false} placeholder="Type..." />
          </Form.Item>

          <Form.Item name={"identification"} label="Identification">
            <Input className="w-full" disabled={false} placeholder="Type..." />
          </Form.Item>

          <Form.Item name={"address"} label="Address">
            <TextArea className="w-full" maxLength={10000} />
          </Form.Item>

          <Form.Item name={"remarks"} label="Notes">
            <TextArea className="w-full" maxLength={10000} />
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default FundTransferAccount;
