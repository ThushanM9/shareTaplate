import { Table } from "antd";
import React from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { GenerateColumnDefinitions } from "../../../../../../../schemas/helpers/generate-column-definition";
import { LOLCSDK } from "../../../../../../../sdk";
import { CusRelationship } from "../../../../../../../sdk/comn-customer/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

const NomineeDetails = (id: number) => {
  const { data: nominee, loading: isNomineeLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.CustomerService.getNomineesByCustomerId(id),

    [],
    false,
    []
  );
  return !isNomineeLoading ? nominee : [];
};

export const DisplayNomineeDetailsTab = ({
  applicantDetails,
}: {
  applicantDetails: any;
}) => {
  const cardSchema = ActivateAccountSchema.steps![1]!.cards![3];

  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!);
  const dataSource = () => {
    const tableData: any = [];
    //! error in getting propotion ratio
    applicantDetails &&
      applicantDetails.map((item: any, index: number) => {
        const nominee: CusRelationship[] = NomineeDetails(item.casaCustomerId);
        console.log("NOMINEE EEEEEEE", nominee, applicantDetails);
        tableData.push(
          ...nominee.map((item: any) => ({
            ...item,
            curProportionForTheNominee: `${item.curProportionForTheNominee}%`,
          }))
        );
      });
    // console.log("TABLE", tableData);
    return tableData;
  };
  // dataSource();
  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        <Table pagination={false} dataSource={dataSource()} columns={columns} />
      </>
    </FormCardTemplate>
  );
};
