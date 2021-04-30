import { Button, Form } from "antd";
import React, {
  FC,
  forwardRef,
  useContext,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { EditableTableView } from "../../../../../../../schemas/helpers/editable-table.component";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { AlertDetails } from "../../../../../../../sdk/casa-account/interfaces";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { emptyAlertingRule } from "../../../data/emptyAlertingRule";
import { AccountOpeningSchema } from "../../../schema";

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

export const AlertingRulesTab: FC<any> = forwardRef(
  ({ contactNumber }, ref) => {
    const { state, setState } = useContext(AccountOpeningContainerContext);
    const currentStep = 6;
    const currentCard = 1;
    const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
      currentCard
    ];
    const [alertingRules, setAlertingRules] = useState<AlertDetails[]>([]);
    const [form] = Form.useForm();
    const [tempRuleId, setTempRuleId] = useState(0);

    useImperativeHandle(ref, () => ({
      validateCard() {
        form
          .validateFields()
          .then((d) => {
            console.log("d", d);
          })
          .catch((e) => {
            console.log("e", e);
          });
        return form.getFieldsError();
      },
    }));

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

    const onRemove = (rule: AlertDetails) => {
      const rulesList = alertingRules.filter((item) => item.id !== rule.id);
      console.log(rulesList);
      setAlertingRules(rulesList);
    };

    const addAnotherAlertingRule = () => {
      setAlertingRules([
        ...alertingRules,
        { ...emptyAlertingRule, id: `rule-${tempRuleId}` },
      ]);
      setTempRuleId(tempRuleId + 1);
    };
    // console.log("ffffffff", cardSchema.fields[0]!.columns!);
    return (
      <div style={{ width: "100%" }}>
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
                  onClick: onRemove,
                },
              ]}
              onValueChange={(data: any) => {
                console.log("Value Changed", data);
                setState({
                  ...state,
                  globalFormState: {
                    ...state.globalFormState,
                    notificationDetails: state.globalFormState.notificationDetails?.map(
                      (item: any) => {
                        if (item.contactNo === contactNumber) {
                          return { ...item, alertDetail: data };
                        } else {
                          return item;
                        }
                      }
                    ),
                    // state.globalFormState.notificationDetails.map(
                    //   (item) => {
                    //     if (data.id === item.contactNo) {
                    //       return { ...item, alertDetail: data };
                    //     } else {
                    //       return item;
                    //     }
                    //   }
                    // ),
                  },
                });
              }}
            />
            <Button type="primary" onClick={addAnotherAlertingRule}>
              Add Another Alerting Rule
            </Button>
          </>
        </FormCardTemplate>
      </div>
    );
  }
);
