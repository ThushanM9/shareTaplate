import React from "react";
import { AccountATMDetail } from "../../../../../../sdk/casa-account/interfaces";
import { DisplayCardInformationTab } from "./tabs/DisplayCardInformationTab";

export const DisplayATMCardsContainer = ({
  atmDetails,
}: {
  atmDetails: AccountATMDetail[];
}) => {
  return (
    <>
      {atmDetails ? (
        atmDetails.map((item: AccountATMDetail, index: number) => {
          return (
            <DisplayCardInformationTab
              key={index}
              data={item}
            ></DisplayCardInformationTab>
          );
        })
      ) : (
        <div className="flex flex-row flex-1 justify-center text-md font-semibold py-4">
          No Card information available
        </div>
      )}
    </>
  );
};
