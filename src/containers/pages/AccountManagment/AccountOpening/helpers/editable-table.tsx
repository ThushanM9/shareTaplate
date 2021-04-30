import { PlusOutlined, RobotOutlined } from "@ant-design/icons";
import { Button, message, notification } from "antd";
import * as _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { FormItemSchema } from "../../../../../schemas/form-schema";
import {
  EditableTableView,
  TableRowAction,
} from "../../../../../schemas/helpers/editable-table.component";
import { ResourceSelectorModal } from "../../../../../schemas/helpers/resource-selector.modal";
import { AccountOpeningContainerContext } from "../AccountOpeningContext";

// STATUS - REVIEWED ✅

export const EditableTable = ({
  schema,
  initialLocalState = [],
  rowId,
  requireMinimumOneRecord,
  extraActions,
  setStateChange, //! new
}: {
  schema: FormItemSchema;
  initialLocalState: any[];
  rowId: string;
  requireMinimumOneRecord?: boolean;
  extraActions: TableRowAction<any>[];
  setStateChange?: any; //! new
}) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const [selectedResources, setSelectedResources] = useState(
    initialLocalState.map((ele) =>
      schema.resourceMapFunction ? schema.resourceMapFunction(ele) : ele
    )
  );
  const [showSelectResourceModal, setShowSelectResourceModal] = useState(false);

  useEffect(() => {
    const newStateChange = {
      [schema.key as any]: selectedResources.map((resource) => {
        const record = { ...schema.emptyRecord };
        schema
          .columns!.filter((e) => !e.noSend)
          .forEach((definition) => {
            record[definition.key!] = resource[definition.key];
          });
        return record;
      }),
    };
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...newStateChange,
      },
    });
    // console.log(
    //   `Data Changed from Editable Table ${schema.label}`,
    //   newStateChange
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedResources]);

  const openNotification = () => {
    notification.open({
      message: "Attention",
      description: "Under-construction",
      icon: <RobotOutlined style={{ color: "#f1c40f" }} />,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  const showError = (msg: string) => {
    message.error(msg, 5);
  };
  return (
    <div className='mb-8'>
      <ResourceSelectorModal
        isVisible={showSelectResourceModal}
        onCancel={() => setShowSelectResourceModal(false)}
        onResourceSelected={(resource: any) => {
          // addSelectedRecord(resource);
          if (resource.cusStatus !== "ACTIVE") {
            showError(
              "Selected Account is not in ACTIVE status,Please select a ACTIVE account"
            );
          } else {
            setSelectedResources(
              _.uniqBy(
                [
                  ...selectedResources,
                  {
                    // Apply Empty  Record
                    ...schema.emptyRecord,
                    //Apply resourceMapFunction
                    ...(schema.resourceMapFunction
                      ? schema.resourceMapFunction(resource)
                      : resource),
                  },
                ],
                rowId
              )
            );
            setShowSelectResourceModal(false);
          }
        }}
        schema={schema.addResouceSchema!}
      />
      <EditableTableView
        data={state.globalFormState.casaApplicantDetails}
        schema={schema.columns!}
        actions={[
          ...(extraActions || []),
          {
            name: "Remove",
            isDisabled:
              requireMinimumOneRecord && selectedResources.length === 1,
            onClick: (value: any) => {
              // setSelectedResources(
              //   selectedResources.filter((item: any) => {
              //     return item[rowId] !== value[rowId];
              //   })
              // );
              console.log("cvaaaaa; ", value);

              setState({
                ...state,
                globalFormState: {
                  ...state.globalFormState,
                  casaApplicantDetails: state.globalFormState.casaApplicantDetails.filter(
                    (item: any) => {
                      return item[rowId] !== value[rowId];
                    }
                  ),
                },
              });
            },
          },
        ]}
        onValueChange={(data: any[]) => {
          // console.log("On Value Changd", data);
          // setStateChange(data);
          setState({
            ...state,
            globalFormState: {
              ...state.globalFormState,
              casaApplicantDetails: data,
            },
          });
          setSelectedResources(data);
        }}
      />

      <div className='my-4 flex justify-end'>
        <Button
          icon={<PlusOutlined />}
          type='primary'
          onClick={() => setShowSelectResourceModal(true)}
          // onClick={() => openNotification()}
        >
          {schema.addResourceText}
        </Button>
      </div>
    </div>
  );
};
