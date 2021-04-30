import React, { FC } from "react";
import { assets } from "../../../../../../../ui-helpers/assets";
import BasicInput from "../../../../../../atoms/BasicInput.atom";
import { P } from "../../../../../../atoms/typography";
import { useGetChequeBookById } from "../methods";

export interface ChequeBookDetailsProps {
  chequeBookId: string;
}

const ChequeBookDetails: FC<ChequeBookDetailsProps> = ({ chequeBookId }) => {
  const { data: chequeBookDetails } = useGetChequeBookById(chequeBookId);

  return (
    <div className=" my-8 shadow rounded overflow-auto max-w-sm border p-4">
      <div className="flex flex-col flex-1 h-full overflow-y-auto">
        <div className="mb-6">
          <P bold>Checkbook Request Details</P>
          <P fontSize={14} color={assets.color.text_gray}>
            These are the details of the chequebook
          </P>
        </div>
        <div className="flex flex-col flex-1 mb-2">
          <P fontSize={12} color={assets.color.text_gray}>
            Book no.
          </P>
          <BasicInput
            value={chequeBookDetails.chequeBookSrlNo || "-"}
            disabled={true}
          />
          {/* <InputContainer className="mb-2" title="Book no." input={} /> */}
        </div>
        <div className="flex flex-col flex-1 mb-2">
          <P fontSize={12} color={assets.color.text_gray}>
            Current Status
          </P>
          <BasicInput
            value={chequeBookDetails.chequeBookStatus || "-"}
            disabled={true}
          />
        </div>
        <div className="flex flex-col flex-1 mb-2">
          <P fontSize={12} color={assets.color.text_gray}>
            Chequebook Type
          </P>
          <BasicInput
            value={chequeBookDetails.chequeBookType || "-"}
            disabled={true}
          />
        </div>
        <div className="flex flex-col flex-1 mb-2">
          <P fontSize={12} color={assets.color.text_gray}>
            Chequebook Type
          </P>
          <BasicInput value={"[N/A]"} disabled={true} />
        </div>
        <div className="flex flex-col flex-1 mb-2">
          <P fontSize={12} color={assets.color.text_gray}>
            Issue Date
          </P>
          <BasicInput
            value={chequeBookDetails.issuedDate || "-"}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ChequeBookDetails;
