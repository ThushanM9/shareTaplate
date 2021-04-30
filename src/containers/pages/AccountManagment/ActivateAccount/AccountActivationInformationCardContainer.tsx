import { ProfileTwoTone } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import React, { useContext } from "react";
import { LOLCSDK } from "../../../../sdk";
import { useSDK } from "../../../../utils/hooks/useSDK";
import { AccountOpeningContainerContext } from "../AccountOpening/AccountOpeningContext";
import { AccountInformationDateCard } from "../AccountOpening/information-cards/account-information-date.card";
import { CardInformationCard } from "../AccountOpening/information-cards/card-information.card";
import { CreditInterestRateCard } from "../AccountOpening/information-cards/credit-interest-rates.card";
import { CustomerDetailsCard } from "../AccountOpening/information-cards/customer-details.card";
import { ProductDetailsCard } from "../AccountOpening/information-cards/product-details.card";
import { ServiceOfficerCard } from "../AccountOpening/information-cards/service-officer.card";
import { TicketNumberCard } from "../AccountOpening/information-cards/ticket-number.card";

export type InformationCardTypes =
  | "ACCOUNT_CREATION_DATE"
  | "CUSTOMER_DETAILS"
  | "PRODUCT_DETIALS"
  | "CARD_INFORMATION"
  | "CREDIT_INTEREST_RATE_CARD"
  | "SERVICE_OFFICER"
  | "TICKET_NUMBER"
  | "ACCOUNT_BLOCK_CREATION_DATE"
  | "ACCOUNT_DEACTIVATION_DATE";

export const AccountActivationInformationCardContainter = ({
  cards,
  data,
}: {
  cards: InformationCardTypes[];
  data: any;
}) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const { user } = useAuth0();

  const { data: customer, loading: isCustomerLoading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.CustomerService.getBasicInformationById(data.AccountData.customerId),
    [],
    false,
    []
  );

  // Retrieve Card Data
  const accountCreationData = {
    selectedDate: moment(),
    isDisabled: true,
  };
  const accountDeactivationData = {
    selectedDate: moment(),
    isDisabled: true,
  };
  const customerDetails = {
    name: String(isCustomerLoading ? "loading..." : customer?.perPreferredName),
    id: String(isCustomerLoading ? "loading..." : customer?.id),
    dob: String(isCustomerLoading ? "loading..." : customer?.perDateOfBirth),
    code: String(isCustomerLoading ? "loading..." : customer?.perCode),
  };

  const productDetails = {
    personType: "",
    accountType: "",
  };

  const cardInformation = {
    value: "",
  };

  const creditInterestRateDetails = {
    id: data.productDetails.subProductId,
  };

  const serviceOfficer = {
    name: user.nickname,
  };
  const ticketNumber = {
    name: "",
  };

  return (
    <div
      className="flex flex-col h-full border"
      style={{ borderTop: "none", borderBottom: "none" }}
    >
      <div
        style={{
          height: "45px",
        }}
        className=" flex justify-center shadow items-center font-bold"
      >
        <ProfileTwoTone className=" mx-2" />
        Information
      </div>
      <div className="w-full overflow-y-auto pt-4 px-2">
        {cards
          .map((cardName) => {
            if (cardName === "ACCOUNT_CREATION_DATE") {
              return (
                <AccountInformationDateCard
                  title="Account Creation Date"
                  {...accountCreationData}
                />
              );
            } else if (cardName === "ACCOUNT_BLOCK_CREATION_DATE") {
              return (
                <AccountInformationDateCard
                  title="Account Block Creation Date"
                  {...accountCreationData}
                />
              );
            } else if (cardName === "CUSTOMER_DETAILS") {
              return (
                customerDetails.name !== "undefined" && (
                  <CustomerDetailsCard {...customerDetails} />
                )
              );
            } else if (cardName === "ACCOUNT_DEACTIVATION_DATE") {
              return (
                <AccountInformationDateCard
                  title="Account Deactivation Date"
                  {...accountCreationData}
                />
              );
            } else if (cardName === "PRODUCT_DETIALS") {
              return (
                <ProductDetailsCard {...productDetails}></ProductDetailsCard>
              );
            } else if (cardName === "CARD_INFORMATION") {
              return (
                <CardInformationCard {...cardInformation}></CardInformationCard>
              );
            } else if (cardName === "CREDIT_INTEREST_RATE_CARD") {
              return <CreditInterestRateCard {...creditInterestRateDetails} />;
            } else if (cardName === "SERVICE_OFFICER") {
              return (
                <ServiceOfficerCard
                  title="Service Officer"
                  {...serviceOfficer}
                ></ServiceOfficerCard>
              );
            } else if (cardName === "TICKET_NUMBER") {
              return <TicketNumberCard {...ticketNumber}></TicketNumberCard>;
            }
          })
          .map((element) => (
            <div className="py-1">{element}</div>
          ))}
      </div>
    </div>
  );
};
