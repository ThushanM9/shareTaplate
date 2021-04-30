import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";
import { useParams } from "react-router";
import { setActiveAccountCharges } from "../../../../../store/modules/SetActivateAccountChrages/setActiveAccountCharges.dispathcer";
import { setCurrentStep } from "../../../../../store/modules/steps-state/steps-state.dispatchers";
import NavButton from "../../../../atoms/NavButton";
import RouterDivTemplate from "../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../templates/AccountManagement/ScrollTabTemplate";
import { ActivateCharges } from "./ActivateCharges";

function ActivateAccountCharges() {
  const { customer_id } = useParams();
  // const { activatedMsg } = usePostActivateAccount(customer_id, {
  //   accountCharges: [{ feeTypeCode: "", chargeAmount: "" }]
  // });
  // console.log(activatedMsg);
  const confirmActivateAccount = () => {
    Modal.confirm({
      title: (
        <p className="text-sm">
          Are you sure you want to Activate this account?
        </p>
      ),
      icon: <ExclamationCircleOutlined />,
      content: (
        <p className="text-xs mb-8">
          Results of this state will go to an approval state for the <br />
          Approval Officer to approve
        </p>
      ),
      okText: "Confirm",
      okButtonProps: { size: "small", className: "text-xxxs" },
      cancelButtonProps: { size: "small", className: "text-xxxs mr-4" },
      onOk() {
        setActiveAccountCharges("");
      },
      onCancel() {},
      width: "40%",
      centered: true,
      maskClosable: true
    });
  };

  return (
    <RouterDivTemplate
      tab={["Charges"]}
      content={
        <ScrollTabTemplate
          gridClass="grid grid-cols-12"
          colClass="col-start-2 col-span-8"
          tabArr={[<ActivateCharges />]}
        />
      }
      nav={
        <>
          <NavButton
            onClick={() => setCurrentStep(8)}
            disabled={false}
            style={{ marginRight: ".5rem" }}
            to={`/AnRkr/a/other_details/${customer_id}`}
            type="default"
            title="Previous"
          />
          <NavButton
            onClick={confirmActivateAccount}
            disabled={false}
            style={{}}
            to="#"
            type="primary"
            title="Confirm"
          />
        </>
      }
    />
  );
}

export default ActivateAccountCharges;
