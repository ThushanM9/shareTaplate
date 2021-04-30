import { useAuth0 } from "@auth0/auth0-react";
import { Button, Form } from "antd";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { ATMCardDetailsResource } from "../../../../../../../sdk/casa-account/interfaces";
import DropDown from "../../../../../../atoms/BasicDropdown.atom";
import { P } from "../../../../../../atoms/typography";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";
import { CardInformationForm } from "./CardInformationForm";

export const CardInformationTab = forwardRef((props, ref) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 7;
  const currentCard = 0;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const { user } = useAuth0();
  const [form] = Form.useForm();
  const layout = {
    wrapperCol: { span: 12 },
  };

  const defaultDetails: ATMCardDetailsResource & { id: number } = {
    id: 0,
    blockTransactions: "Yes",
    cardCollectionType: "Branch",
    cardExpireDate: "",
    cardFeeEnabled: "Yes",
    cardIssuedDate: "",
    cardNumber: "",
    cardType: "",
    cardTypeId: 0,
    collectionPoint: "",
    collectionPointId: "",
    foreignTransactionEnabled: "Yes",
    issuedBy: "",
    nameOnCard: "",
    posEnabled: "Yes",
    remarks: "",
    schemeType: "",
    schemeTypeId: 0,
    status: "ACTIVE",
    widrawalLimit: 0,
  };

  const [cardDetails, setCardDetails] = useState<ATMCardDetailsResource>(
    defaultDetails
  );
  const [cardDetailsArray, setCardDetailsArray] = useState<any[]>([
    defaultDetails,
  ]);
  let formNumber: number[] = [];

  const onComplete = useMemo(
    () => () => {
      console.log("On Complete");
    },
    []
  );
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

  const saveData = (data: any, index_tag: number) => {
    setCardDetailsArray((prev) =>
      prev.map((item: any, index: number) => {
        if (index === index_tag) {
          console.log("{ ...item, ...data }", { ...item, ...data }, index_tag);
          return { ...item, ...data, id: index_tag, issuedBy: user.nickname };
        } else {
          return item;
        }
      })
    );
    setCardDetails(data);

    // setCardDetails();
    // setState({
    //   ...state,
    //   globalFormState: {
    //     ...state.globalFormState,
    //     casaAtmDetails: [],
    //     // casaAtmDetails: [...state.globalFormState.casaAtmDetails, ...data],
    //   },
    // });
    // console.log("CARDDETAILS", cardDetails);
    // console.log("Step 8 -> Card information Data Change", data);
  };
  // const saveCardDetails = () => {
  //   setCardDetailsArray((prev) => [...prev, ...cardDetailsArray]);
  //   console.log("CARDDETAILSARRAY", cardDetailsArray);
  //   // const newStateChange = {
  //   //   casaAtmDetails: cardDetailsArray.map((card) => {
  //   //     const record = {
  //   //       ...EmptyCardDetailsRecord,
  //   //     };
  //   //     (cardSchema.fields[0].spec as any).fields
  //   //       .filter((e: any) => !e.noSend)
  //   //       .forEach((definition: any) => {
  //   //         (record as any)[definition.targetKey!] = (card as any)[
  //   //           definition.key
  //   //         ];
  //   //       });

  //   //     return record;
  //   //   }),
  //   // };
  //   // console.log(newStateChange);
  //   setState({
  //     ...state,
  //     globalFormState: {
  //       ...state.globalFormState,
  //       casaAtmDetails: cardDetailsArray,
  //     },
  //   });
  //   console.log("STATE", state);
  // };

  useEffect(() => {
    console.log("nnn", cardDetailsArray);
    // setState({
    //   ...state,
    //   globalFormState: {
    //     ...state.globalFormState,
    //     casaAtmDetails: cardDetailsArray,
    //   },
    // });
  }, [cardDetailsArray]);

  return (
    <>
      <div className="flex flex-1 flex-row p-1 items-center">
        <div>
          <P bold fontSize={14}>
            Card Issue
          </P>
          <DropDown
            defaultKey="Yes"
            data={[
              { key: "Yes", name: "Enabled" },
              {
                key: "No",
                name: "Disabled",
              },
            ]}
            onChange={(value: any) => {
              if (state.globalFormState.casaIsATMEnabled !== value) {
                setState({
                  ...state,
                  globalFormState: {
                    ...state.globalFormState,
                    casaIsATMEnabled: value,
                  },
                });
              }
            }}
          />
        </div>
      </div>
      {state.globalFormState.casaIsATMEnabled === "Yes" &&
        cardDetailsArray.map((item: any, index: number) => {
          return (
            <CardInformationForm
              key={index}
              ind={index}
              item={item}
              saveDataP={saveData}
              setSaveData={() =>
                setState({
                  ...state,
                  globalFormState: {
                    ...state.globalFormState,
                    casaAtmDetails: cardDetailsArray,
                  },
                })
              }
              removeData={() => {
                setState({
                  ...state,
                  globalFormState: {
                    ...state.globalFormState,
                    casaAtmDetails: cardDetailsArray.filter(
                      (item) => item.id !== index
                    ),
                  },
                });
                setCardDetailsArray(
                  cardDetailsArray.filter((item) => item.id !== index)
                );
              }}
            />
          );
        })}
      {state.globalFormState.casaIsATMEnabled === "Yes" && (
        <div className="mt-4 flex justify-end">
          <Button
            type="primary"
            onClick={() => {
              setCardDetailsArray((prevState) => [
                ...prevState,
                { ...defaultDetails, id: prevState.length },
              ]);
            }}
          >
            Add Another ATM
          </Button>
        </div>
      )}
    </>
  );
});
