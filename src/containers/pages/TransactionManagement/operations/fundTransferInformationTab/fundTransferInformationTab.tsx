import { Button, Card, DatePicker, Input } from "antd";
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

const StyledCardAlt = styled(Card)`
  background-color: #fafafa;
  margin: 0.5rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 210px;

  & .ant-card-body {
    padding: 0rem;
  }
`;

const InformationTab: React.FC<InformationTabProps> = ({
  state,
  currentUser,
}) => {
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
                From Account Details
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
                From Account: Product Details
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
                From Account: Operation Instructions
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
                Amount From :{" "}
              </P>

              <P
                className="mb-2"
                fontSize={10}
                color="black"
                style={{ textAlign: "right" }}
              >
                {state.amountFrom || 0}
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
                {state.amountTo || 0}
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
                {state.modeOfOperation || "Primary"}
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
                {state.signatures || 0}
              </P>
            </div>
          </StyledCard>

          <StyledCard>
            <div style={{ marginBottom: 6 }}>
              <P className="mb-4" fontSize={12} color="black" bold>
                From Account: Balance Details
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

          {state.operationtype === "Transfer" && (
            <StyledCardAlt>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  paddingTop: 16,
                  paddingRight: 16,
                  paddingLeft: 16,
                  paddingBottom: 2,
                }}
              >
                <P className="mb-4" fontSize={12} color="black" bold>
                  To Account: Fund Transfer History
                </P>
              </div>

              <div style={{ padding: 16 }}>
                <div
                  className="py-2"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <P className="mb-2" fontSize={10} color="#707070" bold>
                    23/01/2020 to 23/01/2020
                  </P>
                </div>

                <div style={{ backgroundColor: "#FFFFFF" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      marginBottom: 6,
                    }}
                  >
                    <P className="mb-2" fontSize={10} color="#707070" bold>
                      Transfer ID :{" "}
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
                      Ammount :{" "}
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
                      {state.netAmount?.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) || "0.00"}
                    </P>
                  </div>
                </div>

                <div>
                  <Button
                    //onClick={(e) => previous.onClick(e)}
                    size="large"
                    type="primary"
                    className="w-full"
                    disabled={false}
                  >
                    {"CLONE DATA"}
                  </Button>
                </div>

                <div className="mt-2" style={{ backgroundColor: "#FAFAFA" }}>
                  <div
                    className="py-2"
                    style={{
                      backgroundColor: "#FAFAFA",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <P className="mb-2" fontSize={10} color="#707070" bold>
                      23/01/2020 to 23/01/2020
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
                      Transfer ID :{" "}
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
                      }) || 0.0}
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
                      Ammount :{" "}
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
                      }) || 0.0}
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
                      {state.netAmount?.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) || 0.0}
                    </P>
                  </div>
                  <div>
                    <Button
                      //onClick={(e) => previous.onClick(e)}
                      size="large"
                      type="primary"
                      className="w-full"
                      disabled={false}
                    >
                      {"CLONE DATA"}
                    </Button>
                  </div>
                </div>
              </div>
            </StyledCardAlt>
          )}

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
                  {state.balanceAmount?.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }) || 0.0}
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
}

export default InformationTab;
