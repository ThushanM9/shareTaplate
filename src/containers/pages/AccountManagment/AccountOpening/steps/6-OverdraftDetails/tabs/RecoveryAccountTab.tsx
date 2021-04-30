import { WarningOutlined } from "@ant-design/icons";
import { Button, Form, notification } from "antd";
import _ from "lodash";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { iDisplayMessage } from "../../../../../../../schemas/card-messages";
import { EditableTableView } from "../../../../../../../schemas/helpers/editable-table.component";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import {
  AccountData,
  OverDraftDetailsResource,
} from "../../../../../../../sdk/casa-account/interfaces";
import { GetAccountByAccountNoModal } from "../../../../GetCustomerByAccountNoModal/GetAccountByAccountNoModal";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { EmptyAccountRecord } from "../../../data/EmptyAccountRecord";
import { AccountOpeningSchema } from "../../../schema";

export const RecoveryAccountTab = forwardRef((props, ref) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 5;
  const currentCard = 1;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  // Todo: 5
  const [showSelectAccountModal, setShowSelectAccountModal] = useState(false);
  const [selectedAccounts, setSelectedAccounts] = useState<
    (AccountData & OverDraftDetailsResource)[]
  >([]);
  const [form] = Form.useForm();
  const [messages, setMessages] = useState<iDisplayMessage[]>([]);

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

  // Update global state
  useEffect(() => {
    // Todo: 4

    const messages: iDisplayMessage[] = [];
    let totalPortion = 0;

    const newStateChange = {
      overdraftDetails: selectedAccounts.map((account) => {
        const record = { ...EmptyAccountRecord };
        (cardSchema.fields[0].spec as any).fields
          .filter((e: any) => !e.noSend)
          .forEach((definition: any) => {
            (record as any)[definition.targetKey!] = (account as any)[
              definition.key
            ];
          });

        totalPortion += account.propotion || 0;
        return record;
      }),
    };
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...newStateChange,
      },
    });
    console.log("Step 6 -> Recovery Account Data Change", newStateChange);

    if (selectedAccounts.length > 0 && totalPortion !== 100) {
      messages.push({
        type: "error",
        title: "Recovery Portion should add upto 100",
        description: "Please validate selected recover accounts portions",
      });
    }
    setMessages(messages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAccounts]);

  if (!cardSchema.displayCondition!(state.globalFormState)) {
    return null;
  }
  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        <GetAccountByAccountNoModal
          isVisible={showSelectAccountModal}
          onCancel={() => setShowSelectAccountModal(false)}
          onAccountSelected={(accountDetails) => {
            setSelectedAccounts(
              _.uniqBy(
                [
                  ...selectedAccounts,
                  { ...accountDetails, ...EmptyAccountRecord },
                ],
                "casaIdentification"
              )
            );
            setShowSelectAccountModal(false);
          }}
          selectedCustomers={[0]}
        />
        {/*eslint-disable-next-line react/jsx-pascal-case*/}
        {/* <CardMessages messages={messages} /> */}
        <EditableTableView
          data={selectedAccounts}
          schema={(cardSchema.fields[0]!.spec as any).fields as any}
          actions={[
            {
              name: "View",
              onClick: (value) => {
                notification.open({
                  message: "Warning",
                  icon: <WarningOutlined style={{ color: "#f1c40f" }} />,
                  description: "In Progress",
                  onClick: () => {
                    console.log("Notification Clicked!");
                  },
                });
              },
            },
            {
              name: "Remove",
              onClick: (value) => {
                setSelectedAccounts(
                  selectedAccounts.filter((item) => {
                    return item.casaIdentification !== value.casaIdentification;
                  })
                );
              },
            },
          ]}
          onValueChange={(data) => {
            console.log("data", data);
            setSelectedAccounts(data);
          }}
        />
        <div className="my-4 flex justify-end">
          <Button
            type="primary"
            onClick={() => setShowSelectAccountModal(true)}
          >
            Add Account
          </Button>
        </div>
      </>
    </FormCardTemplate>
  );
});
