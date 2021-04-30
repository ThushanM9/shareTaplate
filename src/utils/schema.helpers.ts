import moment from "moment";

export const futureDateRule = [
  { required: true, message: "Please Select a Date" },
  {
    message: "Please enter future date",
    validator: (rule: any, value: any) => {
      if (moment(value).isSame(moment(), "day")) {
        return Promise.resolve();
      } else if (moment(value).isAfter()) {
        return Promise.resolve();
      } else {
        return Promise.reject("");
      }
    },
  } as any,
];

export const pastDateRule = [
  { required: true, message: "Please Select a Date" },
  {
    message: "Please select past date",
    validator: (rule: any, value: any) => {
      if (moment(value).isSame(moment(), "day")) {
        return Promise.resolve();
      } else if (moment(value).isBefore()) {
        return Promise.resolve();
      } else {
        return Promise.reject("");
      }
    },
  },
];

export const currencySeparator = (currency: string | number) => {
  console.log("currency :", currency);
  let res = String(currency).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return res;
};
