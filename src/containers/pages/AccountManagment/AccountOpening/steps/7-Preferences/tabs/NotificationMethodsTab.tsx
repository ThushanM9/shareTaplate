import { Button, Form } from "antd";
import React, { useContext, useMemo, useState } from "react";
import { EditableTableView } from "../../../../../../../schemas/helpers/editable-table.component";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { AlertDetails } from "../../../../../../../sdk/casa-account/interfaces";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { emptyAlertingRule } from "../../../data/emptyAlertingRule";
import { AccountOpeningSchema } from "../../../schema";
import { NotificationTableTab } from "./NotificationTableTab";

// {
//   accountId?: number;
//   addressId?: number;
//   addressType?: number;
//   alertEvent?: string;
//   contactNo?: string;
//   contactType?: number;
//   customerId: number;
//   eventCategory?: "Transactional" | "Promotional";
//   notificationTypes?: string;
//   status?: "ACTIVE" | "INACTIVE";
//   transactionLimit: number;
//   contactId?: number;
// }

export const NotificationMethodsTab = () => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 6;
  const currentCard = 1;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];

  // NotificationDetailsResource {
  //   accountId?: number;
  //   alertEvent?: string;
  //   contactNo?: string;
  //   contactType?: number;
  //   customerId: number;
  //   eventCategory?: "Transactional" | "Promotional";
  //   notificationTypes?: string;
  //   status?: "ACTIVE" | "INACTIVE";
  //   transactionLimit: number;
  // }
  const [alertingRules, setAlertingRules] = useState<AlertDetails[]>([]);
  const [form] = Form.useForm();
  const onComplete = useMemo(
    () => () => {
      console.log("On Complete");
    },
    []
  );

  const saveData = (data: any) => {
    // setState({
    //   ...state,
    //   globalFormState: {
    //     ...state.globalFormState,
    //     ...data,
    //   },
    // });
  };

  const addAnotherAlertingRule = () => {
    setAlertingRules([...alertingRules, emptyAlertingRule]);
  };
  // console.log("ffffffff", cardSchema.fields[0]!.columns!);
  return (
    <>
      <div className="mb-10">
        <NotificationTableTab />
      </div>
      <FormCardTemplate
        title={cardSchema.title}
        description={cardSchema.description || ""}
      >
        <>
          {/*  eslint-disable-next-line react/jsx-pascal-case */}
          <EditableTableView
            data={alertingRules}
            schema={cardSchema.fields[0]!.columns!}
            actions={[
              {
                name: "Remove",
                onClick: (value) => {
                  console.log("Remove Record", value);
                },
              },
            ]}
            onValueChange={(data: any[]) => {
              console.log("Value Changed", data);
            }}
          />
          <Button type="primary" onClick={addAnotherAlertingRule}>
            Add Another Alerting Rule
          </Button>
        </>
      </FormCardTemplate>
    </>
  );
};
