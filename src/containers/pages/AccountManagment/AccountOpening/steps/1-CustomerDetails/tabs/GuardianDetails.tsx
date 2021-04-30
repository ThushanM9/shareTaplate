import { WarningOutlined } from "@ant-design/icons";
import { Button, notification, Table } from "antd";
import _ from "lodash";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { GenerateColumnDefinitions } from "../../../../../../../schemas/helpers/generate-column-definition";
import { CusRelationship } from "../../../../../../../sdk/comn-customer/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";
import { SelectGuardians } from "../components/SelectGuardians";

//! STATUS -

export const GuardianDetailsTab = () => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 0;
  const currentCard = 1;
  const schema = AccountOpeningSchema.steps![currentStep]!.cards![currentCard];
  const getGuardianAPI = schema.fields[0].spec!.resourceUri;
  const [showGuardian, setShowGuardian] = useState(false);
  const [table_data, setTable_Data] = useState<any[]>(
    state.globalFormState.casaApplicantDetails[0]?.guardianDetail!.map(
      (item) => {
        return {
          id_user: item.guardianId,
          curRelationshipTypeDesc: item.curRelationshipTypeDesc,
          perFullName: item.guardianName,
          primaryIdentificationNumber: item.primaryIdentificationNumber,
        };
      }
    )
  );
  // console.log(state.customer?.cusRelationships);
  const selectedCustomers = useMemo(
    () =>
      state.globalFormState.casaApplicantDetails.map(
        (applicant) => Number(applicant.casaCustomerId)
        // Note
        // casaCustomerId and perId from Customer are actually the same thing. In SDK there is type mismatch
      ),
    [state.globalFormState.casaApplicantDetails]
  );

  const { data, loading } = useSDK<CusRelationship[]>(
    async (SDK) => {
      let guardianDetails: CusRelationship[] = [];
      for (const customerId of selectedCustomers) {
        const guardians = await getGuardianAPI!(SDK)(customerId);
        guardianDetails = [
          ...guardianDetails,
          ...(guardians || []).map((guardian: CusRelationship) => ({
            ...guardian,
            customerId,
          })),
        ];
      }
      return guardianDetails;
    },
    [...selectedCustomers],
    false,
    []
  );

  // useEffect(() => {
  //   const newStateChange = {
  //     casaApplicantDetails: state.globalFormState.casaApplicantDetails.map(
  //       (applicant) => {
  //         return {
  //           ...applicant,
  //           guardianDetail: data
  //             .filter(
  //               (relationship) =>
  //                 (relationship as any).customerId ===
  //                 Number(applicant.casaCustomerId)
  //             )
  //             .map((relationship) => ({
  //               guardianId: relationship.perId,
  //               guardianName: relationship.perFullName,
  //             })),
  //         };
  //       }
  //     ),
  //   };
  //   setState({
  //     ...state,
  //     globalFormState: {
  //       ...state.globalFormState,
  //       ...newStateChange,
  //     },
  //   });
  //   // console.log("Step 1 -> Guardian Details Data Change", newStateChange);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

  const openAlert = () => {
    notification.open({
      message: "Warning",
      icon: <WarningOutlined style={{ color: "#f1c40f" }} />,
      description: "In Progress",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  const columns = GenerateColumnDefinitions(schema.fields[0].columns!, [
    {
      name: "Update",
      onClick: (item) => {
        openAlert();
      },
    },
    {
      name: "Remove",
      onClick: (data: any) => {
        setTable_Data((prevState) => {
          return table_data.filter((item: any) => item.culpId !== data.id_user);
        });
        setState({
          ...state,
          globalFormState: {
            ...state.globalFormState,
            ...{
              casaApplicantDetails: state.globalFormState.casaApplicantDetails.map(
                (applicant: any) => {
                  console.log("DATAGUARDIAN", applicant);
                  return {
                    ...applicant,
                    guardianDetail: applicant.guardianDetail.filter(
                      (item: any) => item.guardianId !== data.id_user
                    ),
                  };
                }
              ),
            },
          },
        });
      },
    },
  ]);
  const dataSource = () => {
    const tableData: any = [];
    state.globalFormState.casaApplicantDetails.map(
      (item: any, index: number) => {
        return item.guardianDetail.map((item: any, index: number) => {
          // console.log("ITEM", item);

          // _.filter(item.perIdentifications, function(guardian) {
          //   console.log("Guardian", guardian);
          //   return guardian.pidtIdentificationTypeCode === "NIC";
          // }),
          const x = () => {
            item.perIdentifications.filter((g: any) => {
              console.log("G", g.pidtIdentificationTypeCode);
              return g.pidtIdentificationTypeCode === "NIC"
                ? g.pidtIdentificationTypeCode
                : "";
            });
          };

          tableData.push({
            curRelationshipTypeDesc: item.curRelationshipTypeDesc,
            perFullName: item.perFullName,
            primaryIdentificationNumber: 12,
            // item.perIdentifications[0].pidtIdentificationTypeCode,
            //  _.filter(item.perIdentifications, function(guardian) {
            //   console.log("Guardian", guardian);
            //   if (guardian.pidtIdentificationTypeCode === "NIC") {
            //     return guardian.pidtIdentificationTypeCode;
            //   } else {
            //     return "none";
            //   }
            // })
          });
        });
      }
    );
    return tableData;
  };
  // console.log("Guardian Details", data);

  useEffect(() => {}, [table_data]);

  return (
    <>
      <FormCardTemplate
        title={schema.title}
        description={schema.description || ""}
      >
        <>
          <SelectGuardians
            isVisible={showGuardian}
            onCancel={() => setShowGuardian(false)}
            data={state.customer?.cusRelationships}
            onCustomerSelected={(value: any) => {
              setShowGuardian(false);
              setTable_Data((prevState) => [...prevState, value]);

              setState({
                ...state,
                globalFormState: {
                  ...state.globalFormState,
                  ...{
                    casaApplicantDetails: state.globalFormState.casaApplicantDetails.map(
                      (applicant: any) => {
                        return {
                          ...applicant,
                          guardianDetail: _.uniqBy(
                            [
                              ...applicant.guardianDetail,
                              {
                                guardianId: value.culpId,
                                guardianName: value.perFullName,
                                curRelationshipTypeDesc:
                                  value.curRelationshipTypeDesc,
                                primaryIdentificationNumber:
                                  value.perIdentifications?.find(
                                    (item: any) =>
                                      item.pidtIdentificationTypeCode === "NIC"
                                  )?.pidtIdentificationNo || "N/A",
                              },
                            ],
                            "guardianId"
                          ),
                          // guardianDetail: applicant.guardianDetail.map(
                          //   (item: any) => {
                          //     if (item.guardianId !== value.perId) {
                          //       return {
                          //         guardianId: value.perId,
                          //         guardianName: value.perFullName,
                          //       };
                          //     }
                          //   }
                          // ),
                        };
                      }
                    ),
                  },
                },
              });
              // console.log("STATE", state);
            }}
          />
          <Table
            pagination={false}
            dataSource={table_data.map((item: any) => ({
              id_user: item.culpId,
              curRelationshipTypeDesc: item.curRelationshipTypeDesc,
              perFullName: item.perFullName,
              primaryIdentificationNumber:
                item.perIdentifications?.find(
                  (item: any) => item.pidtIdentificationTypeCode === "NIC"
                )?.pidtIdentificationNo || "N/A",
            }))}
            columns={columns}
          />
          <div className="my-4 flex justify-end">
            <Button
              type="primary"
              onClick={() => {
                console.log("Add Guardian");
                setShowGuardian(true);
              }}
            >
              Add Another Guardian
            </Button>
          </div>
        </>
      </FormCardTemplate>
    </>
  );
};
