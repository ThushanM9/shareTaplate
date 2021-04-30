import { Table } from "antd";
import React from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { GenerateColumnDefinitions } from "../../../../../../../schemas/helpers/generate-column-definition";
import { LOLCSDK } from "../../../../../../../sdk";
import {
  ApplicantDetail,
  GuardianDetail,
} from "../../../../../../../sdk/casa-account/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

const GuardianDetails = (id: number) => {
  const { data: guardian, loading: isGuardianLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.CustomerService.getGuardians(id),
    [],
    false,
    []
  );
  return !isGuardianLoading ? guardian : [];
};

export const DisplayGuardianDetailsTab = ({
  applicantDetails,
}: {
  applicantDetails: any;
}) => {
  const cardSchema = ActivateAccountSchema.steps![1]!.cards![1];

  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!);

  const dataSource = () => {
    const tableData: GuardianDetail[] = [];
    applicantDetails &&
      applicantDetails.map((item: ApplicantDetail, index: number) => {
        for (const a of item.guardianDetail) {
          tableData.push({ ...a });
        }
      });
    console.log("TABLEDATA", tableData);
    return tableData;
  };
  console.log("applicant details@", applicantDetails);
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
