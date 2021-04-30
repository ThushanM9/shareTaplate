import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { SimpleFormCard } from "../../../../../schemas/helpers/simple-form-card";
import { AccountOpeningContainerContext } from "../AccountOpeningContext";
import { AccountOpeningSchema } from "../schema";

export const SimpleFormTab = forwardRef(
  ({ stepIndex, cardIndex }: { stepIndex: number; cardIndex: number }, ref) => {
    const { state, setState } = useContext(AccountOpeningContainerContext);

    const cardSchema = AccountOpeningSchema.steps![stepIndex]!.cards![
      cardIndex
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
  }
);
