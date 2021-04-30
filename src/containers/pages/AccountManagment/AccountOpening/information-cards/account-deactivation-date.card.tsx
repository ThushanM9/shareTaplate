import { Moment } from "moment";
import React from "react";
import SelectDate from "../../../../atoms/SelectDate";
import { CardTemplate } from "./card-template";
export const AccountDeactivationDateCard = ({
  selectedDate,
  onDateChange,
  isDisabled,
}: {
  selectedDate: Moment;
  onDateChange?: (date: any, dateString: string) => void;
  isDisabled: boolean;
}) => (
  <CardTemplate title="Account Deactivation Date">
    <SelectDate
      onChange={onDateChange}
      className="h-5 w-full"
      value={selectedDate}
      disabled={isDisabled}
    ></SelectDate>
  </CardTemplate>
);
