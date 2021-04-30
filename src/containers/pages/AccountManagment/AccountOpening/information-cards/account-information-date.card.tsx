import { Moment } from "moment";
import React from "react";
import SelectDate from "../../../../atoms/SelectDate";
import { CardTemplate } from "./card-template";
export const AccountInformationDateCard = ({
  selectedDate,
  onDateChange,
  isDisabled,
  title,
}: {
  selectedDate: Moment;
  onDateChange?: (date: any, dateString: string) => void;
  isDisabled: boolean;
  title: string;
}) => (
  <CardTemplate title={title}>
    <SelectDate
      onChange={onDateChange}
      className="h-5 w-full"
      value={selectedDate}
      disabled={isDisabled}
    ></SelectDate>
  </CardTemplate>
);
