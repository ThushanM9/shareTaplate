import React from "react";
import { P } from "../../../../atoms/typography";
import { OptionalFormProps } from "../interfaces";

const CounterPartyForm: React.FC<OptionalFormProps> = ({
  updateState,
  state,
}) => {
  return (
    <div className="grid grid-cols-4 gap-2 px-10 mb-10">
      <div className="pb-16 pt-8">
        <P fontSize={14} color="#000000">
          Name
        </P>
        <P fontSize={14} color="#000000">
          {state && state.beneficiaryName}
        </P>
      </div>

      <div className="pb-16 pt-8">
        <P fontSize={14} color="#000000">
          Address
        </P>
        <P fontSize={14} color="#000000">
          {state && state.addressLine1}
        </P>
      </div>

      <div className="pb-16 pt-8">
        <P fontSize={14} color="#000000">
          Identification
        </P>
        <P fontSize={14} color="#000000">
          {state && state.identificationNumber}
        </P>
      </div>

      <div className="pb-16 pt-8">
        <P fontSize={14} color="#000000">
          Note
        </P>
        <P fontSize={14} color="#000000">
          {state && state.notes}
        </P>
      </div>
    </div>
  );
};

export default CounterPartyForm;
