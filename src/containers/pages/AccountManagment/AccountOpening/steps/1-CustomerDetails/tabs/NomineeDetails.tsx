import { WarningOutlined } from "@ant-design/icons";
import { Button, notification, Table, Tag } from "antd";
import Modal from "antd/lib/modal/Modal";
import _ from "lodash";
import moment from "moment";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { iDisplayMessage } from "../../../../../../../schemas/card-messages";
import { CardMessages } from "../../../../../../../schemas/helpers/card-messages";
import { EditableTableView } from "../../../../../../../schemas/helpers/editable-table.component";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { NomineeDetailsResource } from "../../../../../../../sdk/casa-account/interfaces";
import { CusRelationship } from "../../../../../../../sdk/comn-customer/interfaces";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { EmptyNomineeRecord } from "../../../data/emptyNomineeRecord";
import { AccountOpeningSchema } from "../../../schema";
import { SelectNominee } from "../components/SelectNominee";

export const NomineeDetailsTab = () => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 0;
  const currentCard = 3;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const [showSelectNomineeModal, setShowSelectNomineeModal] = useState(false);
  const [messages, setMessages] = useState<iDisplayMessage[]>([]);

  const [identificationModal, setIdentificationModal] = useState<{
    isVisible: boolean;
    data: any;
  }>({
    isVisible: false,
    data: [],
  });

  const selectedCustomers = useMemo(
    () =>
      state.globalFormState.casaApplicantDetails.map(
        (applicant) => Number(applicant.casaCustomerId)
        // Note
        // casaCustomerId and perId from Customer are actually the same thing. In SDK there is type mismatch
      ),
    [state.globalFormState.casaApplicantDetails]
  );

  const [selectedNominees, setSelectedNominees] = useState<
    (CusRelationship & NomineeDetailsResource & any)[]
  >(
    state.globalFormState?.casaNomineeDetails!.map((item: any) => {
      return {
        perFullName: item.casaNomineeName,
        perCode: item.casaCustomerCode,
        curStatus: item.casaNomineeStatus,
        culpId: item.casaCustomerId,
        perId: item.identification,
        curRelationshipTypeDesc: item.curRelationshipTypeDesc,
        casaPropotionRatio: item.casaPropotionRatio,
      };
    })
  );

  useEffect(() => {
    const messages: iDisplayMessage[] = [];
    let totalPortion = 0;
    const newStateChange = {
      casaNomineeDetails: selectedNominees.map((nominee) => {
        const record = { ...EmptyNomineeRecord };
        (cardSchema.fields[0]!.spec as any).fields
          .filter((e: any) => !e.noSend)
          .forEach((definition: any) => {
            (record as any)[definition.targetKey!] = (nominee as any)[
              definition.key
            ];
            if (definition.targetKey === "casaCustomerId") {
              record["casaCustomerId"] = Number(state.customer?.id);
            }
          });
        totalPortion += Number(nominee.casaPropotionRatio) || 0;
        return {
          ...record,
          curRelationshipTypeDesc: nominee.curRelationshipTypeDesc,
          casaCustomerId: Number(state.customer?.id),
        };
      }),
    };
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...newStateChange,
      },
    });

    if (selectedNominees.length > 0 && totalPortion !== 100) {
      messages.push({
        type: "error",
        title: "Portion should add upto 100",
        description: "Please validate selected nominee portions",
      });
    }
    setMessages(messages);
    console.log("selectedNominees 👲", selectedNominees);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNominees]);

  // console.log("selectedNominees", state.globalFormState.casaNomineeDetails);

  const openAlert = () => {
    notification.open({
      message: "Warning",
      icon: <WarningOutlined style={{ color: "#f1c40f" }} />,
      description: "In Progress",
      onClick: () => {},
    });
  };

  const UIActions = {
    identificationModal: {
      show: () => {
        setIdentificationModal((prev: any) => ({ ...prev, isVisible: true }));
      },
      hide: () => {
        setIdentificationModal((prev: any) => ({ ...prev, isVisible: false }));
      },
      setData: (perCode: string) => {
        let data = selectedNominees.find(
          (item: any) => item.perCode === perCode
        );
        setIdentificationModal((prev: any) => ({
          ...prev,
          isVisible: true,
          data,
        }));
      },
    },
  };

  return (
    <div>
      <Modal
        onCancel={UIActions.identificationModal.hide}
        visible={identificationModal.isVisible}
        footer={null}
      >
        <Table
          columns={[
            {
              title: "Type Code",
              dataIndex: "pidtIdentificationTypeCode",
              key: "pidtIdentificationTypeCode",
            },
            {
              title: "Description",
              dataIndex: "pidtIdentificationTypeDesc",
              key: "pidtIdentificationTypeDesc",
            },
            {
              title: "No",
              dataIndex: "pidtIdentificationNo",
              key: "pidtIdentificationNo",
            },
            {
              title: "Validity",
              dataIndex: "pidtExpiryDate",
              key: "pidtExpiryDate",
              render: (value: string) => {
                if (moment(moment(value)).diff(moment(), "days") === 0) {
                  return (
                    <Tag color="red">
                      Expired {moment(value).format("YYYY-MM-DD")}
                    </Tag>
                  );
                }
                return (
                  <Tag color="green">
                    Non Expired {moment(value).format("YYYY-MM-DD")}
                  </Tag>
                );
              },
            },
          ]}
          dataSource={identificationModal.data?.perIdentifications?.map(
            (item: any) => ({
              pidtIdentificationNo: item.pidtIdentificationNo,
              pidtIdentificationTypeCode: item.pidtIdentificationTypeCode,
              pidtIdentificationTypeDesc: item.pidtIdentificationTypeDesc,
              pidtExpiryDate: item.pidtExpiryDate,
            })
          )}
          pagination={false}
        />
      </Modal>
      <SelectNominee
        isVisible={showSelectNomineeModal}
        onNomineeSelected={(data) => {
          console.log("nm data 😻 :", data);
          setShowSelectNomineeModal(false);
          setSelectedNominees(
            _.uniqBy(
              [...selectedNominees, { ...EmptyNomineeRecord, ...data }],
              "perId"
            )
          );
        }}
        onCancel={() => setShowSelectNomineeModal(false)}
        selectedCustomers={selectedCustomers}
      ></SelectNominee>
      <FormCardTemplate
        title={cardSchema.title}
        description={cardSchema.description || ""} //cardSchema.description
      >
        <>
          <CardMessages messages={messages} />
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <EditableTableView
            data={selectedNominees}
            schema={(cardSchema.fields[0]!.spec as any).fields as any}
            actions={[
              {
                name: "Identification",
                onClick: (value) => {
                  UIActions.identificationModal.setData(value.perCode);
                },
              },
              {
                name: "View",
                onClick: (value) => {
                  openAlert();
                },
              },
              {
                name: "Remove",
                onClick: (value) => {
                  setSelectedNominees(
                    selectedNominees.filter(
                      (nominee) => nominee.perId !== value.perId
                    )
                  );
                },
              },
            ]}
            onValueChange={(data: any[]) => {
              setSelectedNominees(data);
            }}
          />

          <div className="my-4 flex justify-end">
            <Button
              type="primary"
              onClick={() => setShowSelectNomineeModal(true)}
            >
              Add Nominee
            </Button>
          </div>
        </>
      </FormCardTemplate>
    </div>
  );
};
