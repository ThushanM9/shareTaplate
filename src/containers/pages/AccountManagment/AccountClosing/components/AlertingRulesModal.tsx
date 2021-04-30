import { Badge, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { setChangesList } from "../../../../../store/modules/ChangesList/ChangesList.dispatcher";
import { ChangesHolder } from "./ChangesHolder";

export const AlertingRulesModal = ({
  visible,
  setVisible,
  title,
  data,
}: {
  visible: boolean;
  setVisible?: any;
  title: string;
  data?: any;
}) => {
  const [tableData, setTableData] = useState<any>([]);
  const [hasUpdated, setHasUpdated] = useState(false);
  const [previousState, setPreviousState] = useState<any>([]);
  const [addRemoveArray, setAddRemoveArray] = useState<any>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    hasUpdated &&
      setChangesList({
        key: "alertingRules",
        count: addRemoveArray.length + count,
      });

    data && data.length > 0 && data[0].alertingDetails
      ? setTableData(
          [...data[0].alertingDetails, ...addRemoveArray].map((item: any) => {
            return {
              category: item.eventCategory,
              event: item.alertEventName ? item.alertEventName : "-",
              limit: item.transactionLimitDescription
                ? item.transactionLimitDescription
                : "-",

              change: null,
            };
          })
        )
      : setTableData([]);
  }, [addRemoveArray, count, data, hasUpdated]);

  const titles = [
    {
      title: "Event Category",
      dataIndex: "category",
      key: 1,
    },
    {
      title: "Event",
      dataIndex: "event",
      key: 2,
    },
    {
      title: "Limit",
      dataIndex: "limit",
      key: 3,
    },
  ];
  return (
    <Modal
      bodyStyle={{ borderRadius: ".5rem", minHeight: "50vh" }}
      width="60%"
      title={
        <div className="flex flex-col">
          <p>{title}</p>
          <p className="text-xs text-gray-600 font-normal">
            These are the alerting rules of the customer
          </p>
        </div>
      }
      visible={visible}
      onCancel={setVisible}
      footer={null}
    >
      <div className="flex mb-4">
        <Badge count={data?.length} />
        <p className="ml-2">Alerting Rules</p>
      </div>

      <ChangesHolder
        title="Notification Methods"
        table={true}
        dataArr={
          tableData.length > 0
            ? tableData
            : [
                {
                  category: "_",
                  event: "-",
                  limit: "_",
                },
              ]
        }
        titleArr={titles}
        hasUpdated={hasUpdated}
        previousState={previousState}
      />
    </Modal>
  );
};
