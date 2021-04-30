import React, { useContext, useState } from "react";
import { LOLCSDK } from "../../../../../sdk";
import { useSDK } from "../../../../../utils/hooks/useSDK";
import InformationSectionTable from "../../../../organisms/AccountManagement/InformationSection/InformationSectionTable";
import { AccountOpeningContainerContext } from "../AccountOpeningContext";
import { CardTemplate } from "./card-template";

//! --pending 15/07/2020

export const CreditInterestRateCard = ({
  id,
}: {
  id: string;
}) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const [dataSource, setDataSource] = useState<any>([]);

  const {
    data: interestRateDetails,
    loading: isLoadingInterestRateDetails,
  } = useSDK(
    //! Gives empty results.
    (sdk: LOLCSDK) =>
      sdk.ProductBCAService.getCreditInterestDetailsBySubProductId(
        String(state.globalFormState.casaSubProductId ? state.globalFormState.casaSubProductId : id)
      ).then((data) => {
        // setDataSource((prev:any) => [...prev, { key:  }]);
        data
          ? data.map((item) => {
            setDataSource((prev: any) => [
              ...prev,
              { key: item.creditInterestId, tax: item.tierValueMinimum + " - " + item.tierValueMaximum, rate: item.bankInterestRate },
            ]);

          })
          : setDataSource([]);
      }),
    [state.globalFormState.casaSubProductId ? state.globalFormState.casaSubProductId : id],
    false,
    []
  );

  return (
    <CardTemplate title="Credit Interest Rate Details">
      <InformationSectionTable data={dataSource} />
    </CardTemplate>
  );
};

interface CredetInterestRecord {
  key: string;
  rate: string;
  tax: string;
}
//get the id from the selected sub product
//! show this at 5th step ProductService.getSubProductCreditInterestBySubProductIdentification(identification)
