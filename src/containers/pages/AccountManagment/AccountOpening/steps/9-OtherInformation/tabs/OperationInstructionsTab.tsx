import { Button, Form, Input, Table } from "antd";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { OperationInstructionsResources } from "../../../../../../../sdk/casa-account/interfaces";
import DropDown from "../../../../../../atoms/BasicDropdown.atom";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { EmptyOperationInstructionsRecord } from "../../../data/EmptyOperationInstructionsRecord";
import { AccountOpeningSchema } from "../../../schema";
import { SignatureModel } from "./SignatureModel";

// const ExpandedRowRender = ({
//   onSignatariesChanged,
// }: {
//   onSignatariesChanged: (data: OperatingInstructionsDetailResource[]) => any;
// }) => {
//   const [signataries, setSignataries] = useState<KeyPerson[]>([]);

//   const currentStep = 8;
//   const currentCard = 2;
//   const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
//     currentCard
//   ];
//   const [showSignataryModel, setShowSignataryModal] = useState(false);
//   const [showSignatureModel, setShowSignatureModal] = useState(false);
//   const [signatureId, setSignatureId] = useState(0);
//   useEffect(() => {
//     onSignatariesChanged(
//       signataries.map((item) => {
//         const record = {
//           ...EmptyOperationInstructionsSignataryRecord,
//         };

//         (cardSchema.fields[1]!.spec as any).fields
//           .filter((e: any) => !e.noSend)
//           .forEach((definition: any) => {
//             (record as any)[definition.targetKey!] = (item as any)[
//               definition.key
//             ];
//             if (definition.key === "signatureId") {
//               (record as any)["signatureId"] = signatureId;
//             }
//             if (definition.key === "personId") {
//               (record as any)["personId"] = (item as any)["perId"];
//             }
//           });

//         return record;
//       })
//     );

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [signataries]);

//   return (
//     <div style={{ width: "100%" }}>
//       <SignatureModel
//         onCancel={() => setShowSignatureModal(false)}
//         isVisible={showSignatureModel}
//         setSignatureId={setSignatureId}
//       />
//       <SelectSignatary
//         isVisible={showSignataryModel}
//         onSignatarySelected={(data) => {
//           setShowSignatureModal(true);

//           setShowSignataryModal(false);
//           setSignataries(
//             // _.uniqBy(
//             [...signataries, { ...EmptySignataryRecord, ...data }]
//             // "perId"
//             // )
//           );
//           console.log("signatories", signataries);
//         }}
//         customerIds={["373"]}
//         onCancel={() => setShowSignataryModal(false)}
//       />

//       {/* eslint-disable-next-line react/jsx-pascal-case */}
//       <EditableTableView
//         data={signataries}
//         schema={(cardSchema.fields[1].spec! as any).fields}
//         actions={[
//           {
//             name: "Remove",
//             onClick: (value) => {
//               console.log("Remove Record", value);
//               // setSignataries()
//               setSignataries(
//                 signataries.filter((signatary) => {
//                   return signatary.id !== value.id;
//                 })
//               );
//             },
//           },
//         ]}
//         onValueChange={(data: any[]) => {
//           console.log("Value Changed", data);
//           setSignataries(data);
//         }}
//       />

//       <div className="my-4 flex justify-end">
//         <Button
//           type="primary"
//           onClick={() => {
//             setShowSignataryModal(true);
//           }}
//         >
//           Add Signatary
//         </Button>
//       </div>
//     </div>
//   );
// };

//

export const OperationInstructionsTab = forwardRef((props, ref) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const [selectSignatureModal, setselectSignatureModal] = useState(false);
  const currentStep = 8;
  const currentCard = 2;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const [formData, _setFormData] = useState<OperationInstructionsResources>({
    casaAmountFrom: "",
    casaAmountTo: "",
    casaModelOfOperation: "",
    casaNoOfSignatures: "",
    casaNotes: "",
    casaStatus: "",
    eligiblePersonDetails: [],
  });

  const setFormData = (edits: Partial<typeof formData>) =>
    _setFormData({ ...formData, ...edits });
  const [form] = Form.useForm();

  const [operationInstructions, setOperationInstructions] = useState<
    OperationInstructionsResources[]
  >([EmptyOperationInstructionsRecord]);

  useEffect(() => {
    setOperationInstructions((prev) => {
      prev[0].eligiblePersonDetails = state.globalFormState.casaApplicantDetails.map(
        (item) =>
          ({
            casaAmountFrom: "0",
            casaAmountTo: "0",
            casaModelOfOperation: "",
            personId: item.casaCustomerId,
            personName: item.casaFullLegalName,
            proportion: "",
            signatureId: "",
            status: item.casaApplicantStatus,
          } as any)
      );
      return prev;
    });
  }, [state.globalFormState.casaApplicantDetails]);

  const setOperationInstructionUserDetails = (
    id?: string,
    record?: any,
    value?: any
  ) => {
    setOperationInstructions((prev) => {
      prev[0].eligiblePersonDetails!.map((item: any) => {
        if (item.personId === id) {
          item[record] = value;
        }
      });
      return prev;
    });
  };

  const newColumns: any = [
    {
      title: "Person Name",
      dataIndex: "personName",
      key: "personName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Mode of Operation",
      dataIndex: "casaModelOfOperation",
      key: "casaModelOfOperation",
      render: (value: string, record: any) => {
        return (
          <DropDown
            onChange={(value: string) =>
              setOperationInstructionUserDetails(
                record.personId,
                "casaModelOfOperation",
                value
              )
            }
            data={[
              { key: "Owner", name: "Owner" },
              { key: "Jointly", name: "Jointly" },
            ]}
          />
        );
      },
    },
    {
      title: "Amount From",
      dataIndex: "casaAmountFrom",
      key: "casaAmountFrom",
      render: (value: string, record: any) => {
        return (
          <Input
            disabled={
              record.casaModelOfOperation === "primary" || "Primary"
                ? true
                : false
            }
            onChange={(e) =>
              setOperationInstructionUserDetails(
                record.personId,
                "casaAmountFrom",
                e.target.value
              )
            }
          />
        );
      },
    },
    {
      title: "Amount To",
      dataIndex: "casaAmountTo",
      key: "casaAmountTo",
      render: (value: string, record: any) => {
        return (
          <Input
            disabled={
              record.casaModelOfOperation === "primary" || "Primary"
                ? true
                : false
            }
            onChange={(e) =>
              setOperationInstructionUserDetails(
                record.personId,
                "casaAmountTo",
                e.target.value
              )
            }
          />
        );
      },
    },
    {
      title: "Signature",
      dataIndex: "signatureId",
      key: "signatureId",
      render: () => {
        return (
          <Button type="link" onClick={UIActions.signatureModal.show}>
            View
          </Button>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => {
        return <Button type="link">Remove</Button>;
      },
    },
  ];

  useImperativeHandle(ref, () => ({
    validateCard() {
      form
        .validateFields()
        .then((d) => {})
        .catch((e) => {});
      return form.getFieldsError();
    },
  }));

  const saveData = (data: any) => {
    data[0].casaNoOfSignatures = data[0].eligiblePersonDetails?.length;
    console.log("data here:bol", data);
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        casaOperationInstructionsDetails: data,
      },
    });
  };

  const UIActions = {
    signatureModal: {
      show: () => {
        setselectSignatureModal(true);
      },
      hide: () => {
        setselectSignatureModal(false);
        saveData(operationInstructions);
      },
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <FormCardTemplate
        title={cardSchema.title}
        description={cardSchema.description || ""}
      >
        <SignatureModel
          state={state}
          isVisible={selectSignatureModal}
          onCancel={UIActions.signatureModal.hide}
          setOperationInstructions={setOperationInstructions}
        />
        <div>
          <Table
            columns={newColumns}
            dataSource={operationInstructions[0].eligiblePersonDetails ?? []}
            pagination={false}
            scroll={{
              x: "max-content",
            }}
          />

          {/* <div className="flex flex-1 justify-center py-1">
            <Button block type="primary">
              Add Another Operation Instruction
            </Button>
          </div> */}
        </div>
      </FormCardTemplate>
    </div>
  );
});

// casaOperationInstructionsDetails = [{
//   casaNoOfSignatures: 2,
//   casaStatus:ACTIVE,
//   casaNotes:"",
//   eligiblePersonDetails : [{
//           "casaAmountFrom": "100",
//           "casaAmountTo": "1000",
//           "casaModelOfOperation": "Owner",
//           "accountNo": "051100009295", // not mandatory
//           "personId": "351", casaCustomerId
//           "personName": "S.N. Senithi SAdinma", casaFullLegalName
//           "proportion": "100.00",
//           "signatureId": "",
//           "status": "ACTIVE"
//       },
//       {
//           "casaAmountFrom": "100",
//           "casaAmountTo": "1000",
//           "casaModelOfOperation": "Owner",
//           "accountNo": "051100009295",
//           "personId": "351",
//           "personName": "S.N. Senithi SAdinma",
//           "proportion": "100.00",
//           "signatureId": "",
//           "status": "ACTIVE"
//       }]
// }]
