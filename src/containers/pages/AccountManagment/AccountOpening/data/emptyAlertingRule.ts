import { AlertDetails } from "../../../../../sdk/casa-account/interfaces";

export const emptyAlertingRule: AlertDetails = {
  alertEvent: "",
  eventCategory: "Transactional",
  status: "ACTIVE",
  transactionLimit: 0,
};
