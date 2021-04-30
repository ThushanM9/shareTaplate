import { ProfileTwoTone } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import React, { useContext } from "react";
import { AccountOpeningContainerContext } from "./AccountOpeningContext";
import { AccountInformationDateCard } from "./information-cards/account-information-date.card";
import { AccountUpdateDateCard } from "./information-cards/account-update-date.card";
import { AccountDetailsCard } from "./information-cards/account_details";
import { AccountNameCard } from "./information-cards/account_name";
import { AccountNo } from "./information-cards/account_no";
import { AccountProductDetailsCard } from "./information-cards/account_product_details";
import { CardInformationCard } from "./information-cards/card-information.card";
import { CreditInterestRateCard } from "./information-cards/credit-interest-rates.card";
import { CustomerDetailsCard } from "./information-cards/customer-details.card";
import { PassbookDetailsCard } from "./information-cards/passbook_details";
import { ProductDetailsCard } from "./information-cards/product-details.card";
import { ServiceOfficerCard } from "./information-cards/service-officer.card";
import { TicketNumberCard } from "./information-cards/ticket-number.card";

export type InformationCardTypes =
  | "ACCOUNT_CREATION_DATE"
  | "ACCOUNT_NAME"
  | "ACCOUNT_NO"
  | "ACCOUNT_DETAILS"
  | "PASSBOOK_DETAILS"
  | "ACCOUNT_UPDATE_DATE"
  | "CUSTOMER_DETAILS"
  | "PRODUCT_DETIALS"
  | "CARD_INFORMATION"
  | "CREDIT_INTEREST_RATE_CARD"
  | "SERVICE_OFFICER"
  | "ACCOUNT_PRODUCT_DETAILS"
  | "TICKET_NUMBER"
  | "ACCOUNT_REACTIVATION_CONFIRMATION_DATE"
  | "ACCOUNT_BLOCK_CREATION_DATE"
  | "ACCOUNT_BLOCK_CONFIRMATION_DATE"
  | "ACCOUNT_DEACTIVATION_DATE"
  | "ACCOUNT_REACTIVATION_CREATED_DATE"
  | "ACCOUNT_REACTIVATION_CREATED_USER";

export const AccountOpeningInformationCardContainter = ({
  cards,
  data,
}: {
  cards: InformationCardTypes[];
  data?: any;
}) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const { user } = useAuth0();

  // Retrieve Card Data
  const accountCreationData = {
    selectedDate: moment(),
    isDisabled: true,
  };

  const accountReactivationCreationData = {
    selectedDate: moment(),
    isDisabled: true,
  };

  const accountDeactivationData = {
    selectedDate: moment(),
    isDisabled: true,
  };
  const customerDetails = {
    name: String(state.customer?.perFullName),
    id: String(state.customer?.cusReferenceCode), //id
    dob: String(state.customer?.perDateOfBirth),
    code: String(state.customer?.perCode),
  };

  const productDetails = {
    personType: data?.AccountData?.accountType, // Account person type
    accountType: data?.productDetails?.productCategory, // Product Category
  };

  const cardInformation = {
    value: "",
  };

  const creditInterestRateDetails = {
    id: data?.productDetails?.subProductId ?? "N/A",
  };

  const serviceOfficer = {
    name: user.nickname,
  };

  const accountReactivationCreatedUser = {
    name: data?.AccountData?.accountReactivatedUser,
  };

  const ticketNumber = {
    name: "1322423",
  };
  const accountUpdateData = {
    selectedDate: moment(),
    isDisabled: true,
  };
  const accountNameData = {
    accountName: "20/12/2020",
  };
  const accountNoData = {
    accountNo: "1322423",
  };
  const accountDetailsData = {
    scheme: "Scheme1",
    type: "Type1",
    number: "123456",
    name: "Name1",
    currency: "LKR",
    status: "Active",
  };
  const passbookDetailsData = {
    BookNo: "4243",
    NoofPages: "123",
    LinesPerPage: "100",
    ProductDetails: "Lorem",
  };
  const accountProductDetailsData = {
    accountType: "Type1",
    accountSubType: "Sub TYpe1",
    personType: "person1",
    productType: "p1",
    productCategory: "cat1",
    subProduct: "s1",
  };
  const accountReactivationData = {
    selectedDate: moment(),
    isDisabled: true,
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
          //convert this into a switch case
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
            } else if (cardName === "ACCOUNT_BLOCK_CONFIRMATION_DATE") {
              return (
                <AccountInformationDateCard
                  title="Account Block Confirmation Date"
                  {...accountCreationData}
                />
              );
            } else if (cardName === "ACCOUNT_DEACTIVATION_DATE") {
              return (
                <AccountInformationDateCard
                  title="Account Deactivation Date"
                  {...accountCreationData}
                />
              );
            } else if (cardName === "ACCOUNT_REACTIVATION_CREATED_DATE") {
              return (
                <AccountInformationDateCard
                  title="Reactivation Creation Date"
                  {...accountReactivationCreationData}
                />
              );
            } else if (cardName === "ACCOUNT_UPDATE_DATE") {
              return <AccountUpdateDateCard {...accountUpdateData} />;
            } else if (cardName === "ACCOUNT_REACTIVATION_CONFIRMATION_DATE") {
              return (
                <AccountInformationDateCard
                  title="Reactivation Confirmation Date"
                  {...accountReactivationData}
                />
              );
            } else if (cardName === "ACCOUNT_NAME") {
              return <AccountNameCard {...accountNameData} />;
            } else if (cardName === "ACCOUNT_NO") {
              return <AccountNo {...accountNoData} />;
            } else if (cardName === "ACCOUNT_DETAILS") {
              return <AccountDetailsCard {...accountDetailsData} />;
            } else if (cardName === "PASSBOOK_DETAILS") {
              return <PassbookDetailsCard {...passbookDetailsData} />;
            } else if (cardName === "ACCOUNT_PRODUCT_DETAILS") {
              return (
                <AccountProductDetailsCard {...accountProductDetailsData} />
              );
            } else if (cardName === "CUSTOMER_DETAILS") {
              return (
                customerDetails.name !== "undefined" && (
                  <CustomerDetailsCard {...customerDetails} />
                )
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
            } else if (cardName === "ACCOUNT_REACTIVATION_CREATED_USER") {
              return (
                <ServiceOfficerCard
                  title="Reactivation Created User"
                  {...accountReactivationCreatedUser}
                ></ServiceOfficerCard>
              );
            } else if (cardName === "TICKET_NUMBER") {
              return <TicketNumberCard {...ticketNumber}></TicketNumberCard>;
            }
          })
          .map((element, i) => (
            <div key={i} className="py-1">
              {element}
            </div>
          ))}
      </div>
    </div>
  );
};
