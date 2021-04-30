import { Card, DatePicker, Input } from "antd";
import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { LOLCSDK } from "../../../../../sdk";
import { useSDK } from "../../../../../utils/hooks/useSDK";
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
  transferId,
}) => {
  const [accountData, setAccountData] = useState<any>();

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.AccountService.getAccountByAccountNo(state?.debitAccountNo).then(
        (data) => {
          setAccountData(data);
        }
      ),
    [state],
    false,
    {}
  );
  return (
    <div className="h-full flex flex-grow">
      {currentUser && state && (
        <div className="h-full flex flex-col flex-1 bg-white mt-1">
          <StyledCard>
            <Ptag
              title={"Created User"}
              style={{ color: "black", fontWeight: "bold" }}
            ></Ptag>

            <Input
              className="w-full"
              disabled={true}
              placeholder={state.createdUser}
            />
          </StyledCard>

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
              disabled={true}
              value={moment(state.createdDate)}
            />
          </StyledCard>

          <StyledCard>
            <Ptag
              title={"Approve Date"}
              style={{ color: "black", fontWeight: "bold" }}
            ></Ptag>

            <DatePicker
              className="w-full pt-1 pb-1"
              size="small"
              disabled={true}
              value={state.approvedDate ? moment(state.approvedDate) : moment()}
            />
          </StyledCard>

          <StyledCard>
            <Ptag
              title={"Transaction Number"}
              style={{ color: "black", fontWeight: "bold" }}
            ></Ptag>

            <Input
              className="w-full"
              disabled={true}
              placeholder={transferId}
            />
          </StyledCard>

          {accountData && (
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
                  {accountData.AccountData.accountOpenBranchDescription}
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
                  {accountData.AccountData.accountType}
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
                  {accountData.AccountData.currencyCode}
                </P>
              </div>
            </StyledCard>
          )}

          {accountData && (
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
                  {accountData.productDetails.productName}
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
                  {accountData.productDetails.accountType}
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
                  {accountData.productDetails.currencyCode}
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
  transferId?: any;
}

export default InformationTab;
