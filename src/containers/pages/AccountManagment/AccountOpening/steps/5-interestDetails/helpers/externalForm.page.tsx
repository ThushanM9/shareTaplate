import { Button, Form, Input, InputNumber, Select } from "antd";
import { find as _find, map as _map } from "lodash";
import React, { FC, useEffect, useState } from "react";
import { LOLCSDK } from "../../../../../../../sdk";
import { Bank } from "../../../../../../../sdk/comn-bank/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import { tableData } from "./interfaces";

const ExteranlFormInterestDetails: FC<ExteranlFormInterestDetailsProps> = ({
  UIActions,
  setTableData,
  selectedIntDet,
}) => {
  const [form] = Form.useForm();
  const [formstate, setformstate] = useState<any>({});
  const {
    payload: { data: allBanks },
  } = useSDK((sdk: LOLCSDK) => sdk.BankService.getAllBanks());

  const {
    payload: { data: allBranches, loading },
  }: any = useSDK(
    (sdk: LOLCSDK) => sdk.BankService.getBranchesByBankId(formstate.bankId),
    [formstate.bankId],
    !formstate.bankId
  );

  const { payload: allPaymentMode }: any = useSDK((sdk: LOLCSDK) =>
    sdk.AccountService.getCommonListByStatusAndReferenceCode(
      "PAYMETH",
      "ACTIVE"
    )
  );

  const { payload: allPaymentSendMode }: any = useSDK((sdk: LOLCSDK) =>
    sdk.AccountService.getCommonListByStatusAndReferenceCode(
      "PAY_SEND_METHOD",
      "ACTIVE"
    )
  );

  const save = () => {
    setTableData((prev: tableData[]) => {
      let x = _map(prev, (item: tableData) => {
        if (
          item.postingMethod === selectedIntDet.postingMethod &&
          item.postingType === selectedIntDet.postingType
        ) {
          item.accounts = [
            ...item.accounts,
            { ...formstate, propotionRatio: String(formstate.propotionRatio) },
          ];
          return item;
        }
        return item;
      });
      return x;
    });
    UIActions.accountSelector.hide();
  };

  useEffect(() => {
    console.log("formstate :", formstate);
  }, [formstate]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Form
        form={form}
        layout="vertical"
        name="depositDetails"
        onValuesChange={(changes: any, val: any) => {
          setformstate((prev: any) => ({ ...prev, ...val }));
          if (changes.bankId || changes.bankBranchId) {
            setformstate((prev: any) => ({
              ...prev,
              bankName: _find(
                allBanks.content,
                (item: Bank) => item.id === val.bankId
              )?.bankName,
              bankBranchName: _find(
                allBranches,
                (item: any) => item.id === val.bankBranchId
              )?.bbrhName,
            }));
          }

          if (changes.paymentModeId) {
            setformstate((prev: any) => ({
              ...prev,
              paymentModeDescription: _find(
                allPaymentMode.data,
                (item) => item.id === changes.paymentModeId
              )?.accComnListDesc,
            }));
          }

          if (changes.paymentSendMethodId) {
            setformstate((prev: any) => ({
              ...prev,
              paymentSendMethod: _find(
                allPaymentSendMode.data,
                (item) => item.id === changes.paymentSendMethodId
              )?.accComnListDesc,
            }));
          }
        }}
      >
        <Form.Item name={"bankId"} label="Bank/Finance Institute">
          <Select>
            {allBanks.content &&
              allBanks.content.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.bankName}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item name={"bankBranchId"} label="Branch Name">
          <Select>
            {!loading &&
              allBranches &&
              allBranches?.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.bbrhName}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item name={"paymentModeId"} label="Payment Mode ID">
          <Select>
            {!allPaymentMode.loading &&
              allPaymentMode.data?.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.accComnListDesc}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item name={"paymentSendMethodId"} label="Payment Send Mode ID">
          <Select>
            {!allPaymentSendMode.loading &&
              allPaymentSendMode.data?.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.accComnListDesc}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item name="crebitInterestPostAccount" label="Account Number">
          <Input />
        </Form.Item>
        <Form.Item name="beneficiaryName" label="Account Name">
          <Input />
        </Form.Item>
        <Form.Item name="propotionRatio" label="Portion">
          <InputNumber
            formatter={(value) => `${value}%`}
            parser={(value) => value!.replace("%", "")}
          />
        </Form.Item>
      </Form>
      <Button onClick={save}>Save</Button>
    </div>
  );
};

interface ExteranlFormInterestDetailsProps {
  UIActions: any;
  setTableData: any;
  selectedIntDet: any;
}

export default ExteranlFormInterestDetails;
