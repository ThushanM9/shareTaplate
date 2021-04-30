import React, { useEffect, useState } from "react";
import { setChangesList } from "../../../../../../store/modules/ChangesList/ChangesList.dispatcher";
import { ChangesHolder } from "../../components/ChangesHolder";
import { filterFunction } from "../../components/filterFunction";
import { updatedItemsFunction } from "../../components/updatedItemsFunction";

export const SweepInstructionsInquiry = ({ data }: { data: any }) => {
  const [updated, setUpdated] = useState(false);

  const item = data?.AccountData;
  const CurrentItems = [
    {
      keyword: "sweepingEnabled",
      title: "Auto Sweep Enable",
      details: item?.sweepingEnabled,
      changed: filterFunction("sweepingEnabled", data),
    },
    {
      keyword: "sweepingLimit",
      title: "Sweep Limit",
      details: item?.sweepingLimit,
      changed: filterFunction("sweepingLimit", data),
    },
    {
      keyword: "minimumAmountForSweeping",
      title: "Minimum Amount for Sweep Limit",
      details: item?.minimumAmountForSweeping,
      changed: filterFunction("minimumAmountForSweeping", data),
    },
    {
      keyword: "periodMethod",
      title: "Period Method",
      details: item?.periodMethod,
      changed: filterFunction("periodMethod", data),
    },
    {
      keyword: "reversalLimit",
      title: "Sweep Reversal Limit",
      details: item?.reversalLimit,
      changed: filterFunction("reversalLimit", data),
    },
    {
      keyword: "recurringSweepingAllowed",
      title: "Recuring Sweeping Enable",
      details: item?.recurringSweepingAllowed,
      changed: filterFunction("recurringSweepingAllowed", data),
    },
  ];

  const updatedItems = [
    {
      title: "Sweep Limit",
      details: "11,000",
    },
  ];

  useEffect(() => {
    CurrentItems.filter((item: any) => item.changed === true).length > 0
      ? setUpdated(true)
      : setUpdated(false);
  }, [CurrentItems]);

  useEffect(() => {
    updated &&
      setChangesList({
        key: "sweepInstructions",
        count: updatedItemsFunction(CurrentItems, data).length,
      });
  }, [CurrentItems, data, updated]);

  return (
    <div>
      <ChangesHolder
        title="Sweep Instructions"
        updated={updated}
        updatedItems={updatedItemsFunction(CurrentItems, data)}
        nameArr={CurrentItems}
      />
    </div>
  );
};
