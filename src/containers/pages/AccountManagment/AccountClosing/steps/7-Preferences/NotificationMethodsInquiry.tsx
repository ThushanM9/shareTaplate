import React, { useEffect, useState } from "react";
import { setChangesList } from "../../../../../../store/modules/ChangesList/ChangesList.dispatcher";
import { AlertingRulesModal } from "../../components/AlertingRulesModal";
import { ChangesHolder } from "../../components/ChangesHolder";

export const NotifcationMethodsInquiry = ({ data }: { data: any }) => {
  const [visible, setVisible] = useState(false);

  const [tableData, setTableData] = useState<any>([]);
  const [hasUpdated, setHasUpdated] = useState(false);
  const [previousState, setPreviousState] = useState<any>([]);
  const [addRemoveArray, setAddRemoveArray] = useState<any>([]);
  const [count, setCount] = useState(0);
  const [methodId, setMethodId] = useState(0);

  useEffect(() => {
    hasUpdated &&
      setChangesList({
        key: "notificationDetails",
        count: addRemoveArray.length + count,
      });
    data?.NotificationDetail
      ? setTableData(
          [...data.NotificationDetail, ...addRemoveArray].map((item: any) => {
            return {
              type: item.contactTypeDescription,
              name: item.customerName ? item.customerName : "-",
              contact: item.contactValue ? item.contactValue : "-",
              view: item.alertingDetails.length
                ? {
                    name: "view",
                    onClick: () => {
                      setVisible(true);
                      setMethodId(item.id);
                    },
                  }
                : "-",
              noOfRules: item.alertingDetails.length
                ? item.alertingDetails.length
                : "-",
              change: null,
            };
          })
        )
      : setTableData([]);
  }, [addRemoveArray, count, data?.NotificationDetail, hasUpdated]);

  const titles = [
    {
      title: "Contact Type",
      dataIndex: "type",
    },
    {
      title: "Contact Name",
      dataIndex: "name",
    },
    {
      title: "Contact",
      dataIndex: "contact",
    },
    {
      title: "Alerting Rules",
      dataIndex: "view",
    },
    {
      title: "Rules Added",
      dataIndex: "noOfRules",
    },
  ];
  const dataArr = [
    {
      type: "Email",
      name: "Name1",
      contact: "df@gamil.com",
      view: { name: "view", onClick: () => setVisible(true) },
      noOfRules: 2,
      change: "view",
    },
  ];

  return (
    <div className="" style={{ minHeight: "70vh" }}>
      <AlertingRulesModal
        title="Alerting Rules"
        visible={visible}
        setVisible={() => setVisible(false)}
        data={
          data?.NotificationDetail &&
          data?.NotificationDetail.filter((item: any) => {
            return item.id === methodId;
          })
        }
      />
      <ChangesHolder
        title="Notification Methods"
        table={true}
        dataArr={
          tableData.length > 0
            ? tableData
            : [
                {
                  type: "_",
                  name: "-",
                  contact: "_",
                  view: { name: "view", onClick: () => setVisible(true) },
                  noOfRules: "_",
                },
              ]
        }
        titleArr={titles}
        hasUpdated={hasUpdated}
        previousState={previousState}
      />
    </div>
  );
};
