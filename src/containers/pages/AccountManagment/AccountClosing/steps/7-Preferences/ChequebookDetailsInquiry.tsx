import React, { useEffect, useState } from "react";
import { setChangesList } from "../../../../../../store/modules/ChangesList/ChangesList.dispatcher";
import { ChangesHolder } from "../../components/ChangesHolder";
import { filterFunction } from "../../components/filterFunction";
import { updatedItemsFunction } from "../../components/updatedItemsFunction";

export const CheckbookDetailsInquiry = ({ data }: { data: any }) => {
  const [updated, setUpdated] = useState(false);

  const item = data?.AccountData;
  const CurrentItems = [
    {
      keyword: "isChequeBookEnabled",
      title: "Chequebook Enabled",
      details: item?.isChequeBookEnabled,
      changed: filterFunction("isChequeBookEnabled", data),
    },
    {
      keyword: "chequeTypeId",
      title: "Cheque Type",
      details: item?.chequeTypeId,
      changed: filterFunction("chequeTypeId", data),
    },
    {
      keyword: "chequeBookTypeId",
      title: "Chequebook Type",
      details: item?.chequeBookTypeId,
      changed: filterFunction("chequeBookTypeId", data),
    },
    {
      keyword: "chequeBookStockTypeId",
      title: "Stock Type",
      details: item?.chequeBookStockTypeId,
      changed: filterFunction("chequeBookStockTypeId", data),
    },
    {
      keyword: "autoChequeBookRequestEnabled",
      title: "Request Period",
      details: item?.autoChequeBookRequestEnabled,
      changed: filterFunction("autoChequeBookRequestEnabled", data),
    },
    {
      keyword: "maxAllowedCheckBooksPerRequest",
      title: "Maximum Allowed Chequbooks Per Request",
      details: item?.maxAllowedCheckBooksPerRequest,
      changed: filterFunction("maxAllowedCheckBooksPerRequest", data),
    },
    {
      keyword: "periodType",
      title: "Auto Chequbook Request Period Type",
      details: item?.periodType,
      changed: filterFunction("periodType", data),
    },
    {
      keyword: "autoChequeBookRequestPeriodFrequency",
      title: "Auto Chequbook Request Period Length",
      details: item?.autoChequeBookRequestPeriodFrequency,
      changed: filterFunction("autoChequeBookRequestPeriodFrequency", data),
    },
    {
      keyword: "autoChequeBookRequestEnabled",
      title: "Auto Chequbook Request",
      type: "checkbox",
      checked: item?.autoChequeBookRequestEnabled ? true : false,
      changed: filterFunction("autoChequeBookRequestEnabled", data),
    },
    {
      keyword: "autoChequeBookRequestEnabled",
      title: "Chequbook Request",
      type: "checkbox",
      checked: true,
      changed: filterFunction("autoChequeBookRequestEnabled", data),
    },
    {
      keyword: "stopRequest",
      title: "Stop Request",
      type: "checkbox",
      checked: item?.stopRequest,
      changed: filterFunction("stopRequest", data),
    },
  ];

  useEffect(() => {
    CurrentItems.filter((item: any) => item.changed === true).length > 0
      ? setUpdated(true)
      : setUpdated(false);
  }, [CurrentItems]);

  useEffect(() => {
    // console.log(
    //   CurrentItems.filter((item: any) => item.changed === true).length
    // );
    updated &&
      setChangesList({
        key: "checkbookDetails",
        count: updatedItemsFunction(CurrentItems, data).length,
      });
  }, [CurrentItems, data, updated]);

  return (
    <div>
      <ChangesHolder
        title="Checkbook Details"
        updated={updated}
        updatedItems={updatedItemsFunction(CurrentItems, data)}
        nameArr={CurrentItems}
      />
    </div>
  );
};
