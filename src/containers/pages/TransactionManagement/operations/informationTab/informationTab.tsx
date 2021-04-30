import { Card, DatePicker, Input } from "antd";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import Ptag from "../../../../atoms/Ptag.atom";
import { P } from "../../../../atoms/typography";

const StyledCard = styled(Card)`
  background-color: white;
  margin: 0.5rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 210px;

  & .ant-card-body {
    padding: 1rem;
  }
`;

const InformationTab: React.FC<InformationTabProps> = ({
  state,
  currentUser,
  chargeData,
}) => {
  let [x] = chargeData ? chargeData : [];

  return (
    <div className="h-full flex flex-grow">
      {currentUser && !state.casaIdentification && (
        <div className="h-full flex flex-col flex-1 bg-white mt-1">
          <StyledCard>
            <Ptag
              title={"Teller ID"}
              style={{ color: "black", fontWeight: "bold" }}
            ></Ptag>

            <Input
              className="w-full"
              disabled={true}
              placeholder={currentUser.userId}
            />
          </StyledCard>

          <StyledCard>
            <Ptag
              title={"Teller Name"}
              style={{ color: "black", fontWeight: "bold" }}
            ></Ptag>

            <Input
              className="w-full"
              disabled={true}
              placeholder={currentUser.userName}
            />
          </StyledCard>

          <StyledCard>
            <Ptag
              title={"Transaction Date"}
              style={{ color: "black", fontWeight: "bold" }}
            ></Ptag>

            <DatePicker
              className="w-full pt-1 pb-1"
              size="small"
              defaultValue={moment()}
            />
          </StyledCard>
        </div>
      )}

      {state && state.casaIdentification && (
        <div className="flex flex-col flex-1 bg-white mt-1">
          <StyledCard>
            <div style={{ marginBottom: 6 }}>
              <P className="mb-4" fontSize={12} color="black" bold>
                Account Details
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Opening Branch :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.accountOpenBranchDescription}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Account Type :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.accountType}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Account Currency :{" "}
              </P>

              <P fontSize={10} color="black" style={{ textAlign: "right" }}>
                {state.currencyCode}
              </P>
            </div>
          </StyledCard>

          <StyledCard>
            <div style={{ marginBottom: 6 }}>
              <P className="mb-4" fontSize={12} color="black" bold>
                Product Details
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Main Product :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.productName}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Product Category :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.productCategory}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P
                className="mb-2"
                fontSize={10}
                color="#707070"
                bold
                style={{ textAlign: "left" }}
              >
                Sub Product:
              </P>

              <P fontSize={10} color="black" style={{ textAlign: "right" }}>
                {state.subProductName}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Account Currency :{" "}
              </P>

              <P fontSize={10} color="black" style={{ textAlign: "right" }}>
                {state.currencyCode}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Account Type :{" "}
              </P>

              <P fontSize={10} color="black" style={{ textAlign: "right" }}>
                {state.accountType}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Account Sub Type :{" "}
              </P>

              <P fontSize={10} color="black" style={{ textAlign: "right" }}>
                {state.accountSubType}
              </P>
            </div>
          </StyledCard>

          <StyledCard>
            <div style={{ marginBottom: 6 }}>
              <P className="mb-4" fontSize={12} color="black" bold>
                Operation Instructions
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Name :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.customerName}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Account Number :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.casaIdentification}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Status :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.status}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Portion :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                3%
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Amount From :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {Number(200000).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Ammount To :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {Number(300000).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Mode of Operation :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                Primary
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Signatures Required :{" "}
              </P>

              <P fontSize={10} color="black" style={{ textAlign: "right" }}>
                2
              </P>
            </div>
          </StyledCard>

          <StyledCard>
            <div style={{ marginBottom: 6 }}>
              <P className="mb-4" fontSize={12} color="black" bold>
                Account Balance Details
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Account Balacne :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.balanceAmount?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) || "0.00"}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Available Balance :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.actualAmount?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) || "0.00"}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Allow Balance :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.withdrawableAmount?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) || "0.00"}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                F/R Amount :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.fundReservationAmount?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) || "0.00"}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Overdraft Amount :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.overDraftAmount?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) || "0.00"}
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 6,
              }}
            >
              <P className="mb-2" fontSize={10} color="#707070" bold>
                Ovedraft Available Amount :{" "}
              </P>

              <P fontSize={10} color="black" style={{ textAlign: "right" }}>
                {state.overDraftAmountAvailable?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) || "0.00"}
              </P>
            </div>
          </StyledCard>

          {state.operationtype === "Withdrawal" && (
            <StyledCard>
              <div style={{ marginBottom: 6 }}>
                <P className="mb-4" fontSize={12} color="black" bold>
                  Charges/ Taxes
                </P>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginBottom: 6,
                }}
              >
                <P className="mb-2" fontSize={10} color="#707070" bold>
                  Charges Name :{" "}
                </P>

                <P
                  className="mb-2"
                  fontSize={10}
                  color="black"
                  style={{ textAlign: "right" }}
                >
                  {x ? x.feeTypeName : ""}
                </P>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginBottom: 6,
                }}
              >
                <P className="mb-2" fontSize={10} color="#707070" bold>
                  Account Net Ammount :{" "}
                </P>

                <P
                  className="mb-2"
                  fontSize={10}
                  color="black"
                  style={{ textAlign: "right" }}
                >
                  {state.netAmount?.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }) || "0.00"}
                </P>
              </div>
            </StyledCard>
          )}
        </div>
      )}
    </div>
  );
};

interface InformationTabProps {
  state?: any;
  currentUser?: any;
  chargeData?: any;
}

export default InformationTab;
