import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { message } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { ResourceSelectorModal } from "../../../../../../../schemas/helpers/resource-selector.modal";
import { Customer } from "../../../../../../../sdk/comn-customer/interfaces";
import TabHeader from "../../../../../../atoms/TabHeader";
import { customerSelectorSchema } from "../../../../selector-schemas/customer-selector/customer-selector.schemas";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { EmptyCustomerRecord } from "../../../data/emptyCustomerRecord";
import { AccountOpeningSchema } from "../../../schema";

export const SelectCustomer = (props: any) => {
  const [showSelectCustomerModal, setShowSelectCustomerModal] = useState(false);
  const { state, setState } = useContext(AccountOpeningContainerContext);

  const [selectedCustomer, setSelectedCustomer] = useState<Customer>(
    null as any
  );

  const currentStep = 0;
  const currentCard = 0;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const tableSchema = cardSchema.fields[0].columns!;

  useEffect(() => {
    if (selectedCustomer) {
      setState({
        ...state,
        customer: selectedCustomer,
        globalFormState: {
          ...state.globalFormState,
          casaApplicantDetails: [
            { ...EmptyCustomerRecord, ...selectedCustomer },
          ].map((customer) => {
            customer = cardSchema.fields[0].resourceMapFunction!(customer);

            const record = {
              ...EmptyCustomerRecord,
              casaFullLegalName: customer.perFullName,
              casaCustomerName: customer.perFullName,
              casaCustomerCode: customer.cusReferenceCode,
              casaCustomerId: customer.casaCustomerId,
            };

            tableSchema
              .filter((e) => !e.noSend)
              .forEach((definition) => {
                (record as any)[definition.key!] = (customer as any)[
                  definition.key
                ];
                console.log("definition", definition);
              });
            return record;
          }),
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCustomer]);
  const showError = (msg: string) => {
    message.error(msg, 5);
  };
  return (
    <>
      <ResourceSelectorModal
        isVisible={showSelectCustomerModal}
        onCancel={() => setShowSelectCustomerModal(false)}
        onResourceSelected={(customer) => {
          // console.log("customer FFFF :", customer);
          if (customer.cusStatus !== "ACTIVE") {
            showError(
              "Selected Account is not in ACTIVE status,Please select a ACTIVE account"
            );
          } else {
            setSelectedCustomer(customer);
            setShowSelectCustomerModal(false);
          }
        }}
        schema={customerSelectorSchema}
      />
      <div className='mt-3 ml-3'>
        <TabHeader
          title='Customer Details'
          details='Add an Existing or New Customer'
        ></TabHeader>
      </div>

      <div className='p-8 pt-10 relative  flex align-middle justify-center mt-6 w-full'>
        <div
          className='absolute z-30 bg-white pl-3 pr-3 p-1 '
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "1rem",
          }}
        >
          OR
        </div>
        <div
          className='relative  flex flex-col justify-center  mr-1 cursor-pointer'
          style={{
            height: "400px",
            width: "350px",
            background: "#6772E5",
            color: "white",
            marginTop: 1,
          }}
          onClick={() => setShowSelectCustomerModal(true)}
        >
          <UserOutlined className=' text-8xl' />
          <p
            className='absolute bottom-0 w-full text-center pb-4'
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            Existing Customer
          </p>
        </div>
        <div
          className='relative border flex flex-col justify-center  mr-1 cursor-pointer'
          style={{
            height: "400px",
            width: "350px",
            background: "#8867E5",
            color: "white",
          }}
        >
          <UserAddOutlined className=' text-8xl' />
          <p
            className='absolute bottom-0 w-full text-center pb-4'
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            New Customer
          </p>
        </div>
      </div>
    </>
  );
};
