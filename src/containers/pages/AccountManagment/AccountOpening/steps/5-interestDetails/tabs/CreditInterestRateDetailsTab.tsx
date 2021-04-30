import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { SimpleFormCard } from "../../../../../../../schemas/helpers/simple-form-card";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";

export const CreditInterestRateDetailsTab = forwardRef((props, ref) => {
  // ! add details for the interest details array
  //! change the interestCalculationStartDate format
  //! add two decimal points to speacial rate
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 4;
  const currentCard = 0;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];

  const simpleForm = useRef<any>();

  useImperativeHandle(ref, () => ({
    validateCard() {
      return simpleForm.current.validate();
    },
  }));

  const saveData = (data: any) => {
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...data,
      },
    });
    console.log("Step 5 - Credit Interest Rate Details data Changed", data);
  };

  return (
    <SimpleFormCard
      title={cardSchema.title}
      description={cardSchema.description}
      state={state.globalFormState}
      onChange={(change) => saveData(change)}
      fields={cardSchema.fields}
      ref={simpleForm}
    />
  );
});
