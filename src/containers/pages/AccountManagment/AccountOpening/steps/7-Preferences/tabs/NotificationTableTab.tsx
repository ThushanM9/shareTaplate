import { Button, Form, Select } from "antd";
import _ from "lodash";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { LOLCSDK } from "../../../../../../../sdk";
import { NotificationDetailsResource } from "../../../../../../../sdk/casa-account/interfaces";
import { AlertType } from "../../../../../../../sdk/comn-alert/interfaces";
import {
  KeyPerson,
  PerContact,
} from "../../../../../../../sdk/comn-customer/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import BasicCheckbox from "../../../../../../atoms/BasicCheckbox.atom";
import DetailsBoxTemplate from "../../../../../../templates/DetailsBoxTemplate";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AlertingRulesTab } from "./AlertingRulesTab";

interface ContactRecord {
  contactId?: number;
  contactType?: number;
  phone: string;
  accountId?: number;
  addressId?: number;
}

//! set contact type value
// ! need a ui change to alerting rules

const CorpertateCustomerContactRow = ({
  customerId,
  keyPersons,
  onChange,
  onClear,
}: {
  customerId: number;
  keyPersons: KeyPerson[];
  onChange: (data: { keyPersonId: number; contactNumber: string }) => any;
  onClear: () => any;
}) => {
  const [selectedKeyPerson, setSelectedKeyperson] = useState({
    keyPersonId: (undefined as any) as number,
    contactNumber: (undefined as any) as string,
  });
  const { data: contactNumbers, loading: isContactNumbersLoading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.CustomerService.getContactsByLinkPersonId(
        customerId,
        selectedKeyPerson.keyPersonId
      ),
    [selectedKeyPerson.keyPersonId],
    !selectedKeyPerson.keyPersonId,
    []
  );

  useEffect(() => {
    onChange(selectedKeyPerson);
  }, [onChange, selectedKeyPerson]);
  return (
    <>
      <tr>
        <td>
          <Select
            value={selectedKeyPerson.keyPersonId}
            style={{ minWidth: 250 }}
            onChange={(change) => {
              setSelectedKeyperson({
                ...selectedKeyPerson,
                keyPersonId: change,
              });
            }}
          >
            {keyPersons.map((keyPerson) => (
              <Select.Option key={keyPerson.id} value={keyPerson.id}>
                {keyPerson.perPreferredName}
              </Select.Option>
            ))}
          </Select>
        </td>
        <td>
          <Select
            style={{ minWidth: 250 }}
            value={selectedKeyPerson.contactNumber}
            onChange={(change) => {
              setSelectedKeyperson({
                ...selectedKeyPerson,
                contactNumber: change,
              });
            }}
          >
            {contactNumbers.map((contactNumber) => (
              <Select.Option key={contactNumber.id} value={contactNumber.id}>
                {contactNumber.pconValue}
              </Select.Option>
            ))}
          </Select>
        </td>
        <td>
          <div className="flex w-full">
            <Button type="link" onClick={() => onClear()}>
              Clear
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};

const CorpertateCustomerContacts = ({
  customerId,
  contactDetails,
  onContactDetailChange,
}: {
  customerId: number;
  contactDetails?: ContactRecord[];
  onContactDetailChange: (data: ContactRecord[]) => any;
}) => {
  const { data: keyPersons, loading: isKeyPersonsLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.CustomerService.getKeyPersonByCustomerId(customerId),
    [],
    false,
    []
  );
  return (
    <>
      <table className="w-full">
        <thead>
          <th>Contact Name</th>
          <th>Contact Number</th>
          <th>Action</th>
        </thead>
        {contactDetails?.map((contactRecord, index) => (
          <CorpertateCustomerContactRow
            customerId={customerId}
            keyPersons={keyPersons || []}
            onChange={(data) =>
              onContactDetailChange(
                contactDetails.map((contactDetail, iX) => {
                  if (iX !== index) {
                    return contactDetail;
                  }
                  return {
                    contactId: data.keyPersonId,
                    phone: data.contactNumber,
                  };
                })
              )
            }
            onClear={() =>
              onContactDetailChange(
                contactDetails.filter((contactDetail, iX) => {
                  if (iX === index) {
                    return false;
                  }
                  return true;
                })
              )
            }
          />
        ))}
      </table>
      <div
        className="flex-row flex justify-end items-center"
        onClick={() => {
          onContactDetailChange([
            ...(contactDetails || []),
            ({
              id: undefined,
              phone: undefined,
            } as any) as ContactRecord,
          ]);
        }}
      >
        <Button type="primary">Add</Button>
      </div>
    </>
  );
};

const NonCorpertateCustomerContactRow = ({
  customerId,
  contactNumbers,
  onChange,
  onClear,
}: {
  customerId: number;
  contactNumbers: PerContact[];
  onChange: (data: {
    conatctId: number;
    contactNumber: string;
    contactType: string;
  }) => any;
  onClear: () => any;
}) => {
  const [contactDetails, setContactDetails] = useState({
    conatctId: (undefined as any) as number,
    contactNumber: "",
    contactType: "",
  });
  const { state, setState } = useContext(AccountOpeningContainerContext);

  useEffect(() => {
    onChange(contactDetails);
    console.log("CONTACTIdD", contactDetails.contactNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactDetails]);
  return (
    <>
      <div className="flex flex-1 flex-col  bg-gray-100">
        <div className="flex flex-row flex-1 my-2 bg-gray-100">
          <div className="py-4 pl-4 flex-1 flex flex-row">
            {state.customer?.perFullName}
          </div>
          <div className="py-4 pl-4 flex-1 flex flex-row justify-center">
            <Select
              value={contactDetails.contactNumber}
              style={{ minWidth: 250 }}
              onChange={(change: any) => {
                const contactNumberObj: any = _.find(contactNumbers, {
                  id: change,
                });

                setContactDetails({
                  ...contactDetails,
                  contactType: String(contactNumberObj.pconContactTypeId),
                  contactNumber: contactNumberObj.pconValue,
                  conatctId: contactNumberObj.id,
                });
              }}
            >
              {contactNumbers.map((contactNumber) => (
                <Select.Option key={contactNumber.id} value={contactNumber.id}>
                  {contactNumber.pconValue}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="py-4 px-8 flex-1 justify-center flex flex-row">
            <Button type="link" className="p-0" onClick={() => onClear()}>
              Clear
            </Button>
          </div>
        </div>
        <div className="flex flex-row flex-1 my-2 bg-gray-100 px-2">
          <AlertingRulesTab contactNumber={contactDetails.contactNumber} />
        </div>
      </div>
    </>
  );
};

const NonCorpertateCustomerContacts = ({
  customerId,
  contactDetails,
  onContactDetailChange,
}: {
  customerId: number;
  contactDetails?: ContactRecord[];
  onContactDetailChange: (data: ContactRecord[]) => any;
}) => {
  const { data: contactNumbers, loading: isContactNumbers } = useSDK(
    (sdk: LOLCSDK) => sdk.CustomerService.getContactByCustomerId(customerId),
    [],
    false,
    []
  );

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-row flex-1 my-2 bg-gray-100">
          <div className="py-4 pl-4 flex-1 flex flex-row justify-center font-semibold text-md">
            Contact Name
          </div>
          <div className="py-4 pl-4 flex-1 flex flex-row justify-center font-semibold text-md">
            Contact Number
          </div>
          <div className="py-4 px-8 flex flex-1 flex-row justify-center font-semibold text-md">
            Action
          </div>
        </div>

        {contactDetails?.map((contactRecord, index) => (
          <NonCorpertateCustomerContactRow
            customerId={customerId}
            contactNumbers={contactNumbers || []}
            onChange={(data) => {
              console.log("DATA", data);
              onContactDetailChange(
                contactDetails.map((contactDetail, iX) => {
                  if (iX !== index) {
                    return contactDetail;
                  }
                  return {
                    contactId: data.conatctId,
                    phone: data.contactNumber,
                    contactType: Number(data.contactType),
                  };
                })
              );
            }}
            onClear={() =>
              onContactDetailChange(
                contactDetails.filter((contactDetail, iX) => {
                  if (iX === index) {
                    return false;
                  }
                  return true;
                })
              )
            }
          />
        ))}

        <div
          className="flex-row flex justify-end items-center"
          onClick={() => {
            onContactDetailChange([
              ...(contactDetails || []),
              ({
                id: undefined,
                phone: undefined,
              } as any) as ContactRecord,
            ]);
          }}
        >
          <Button type="primary" className="mr-1 mt-2 w-1/4">
            Add
          </Button>
        </div>
      </div>

      {/* <table className="w-full my-2 bg-gray-100">
        <thead className="px-4">
          <th className="py-4 pl-4">Contact Name</th>
          <th>Contact Number</th>
          <th>Action</th>
        </thead>

        {contactDetails?.map((contactRecord, index) => (
          <NonCorpertateCustomerContactRow
            customerId={customerId}
            contactNumbers={contactNumbers || []}
            onChange={(data) => {
              console.log("DATA", data);
              onContactDetailChange(
                contactDetails.map((contactDetail, iX) => {
                  if (iX !== index) {
                    return contactDetail;
                  }
                  return {
                    contactId: data.conatctId,
                    phone: data.contactNumber,
                    contactType: Number(data.contactType),
                  };
                })
              );
            }}
            onClear={() =>
              onContactDetailChange(
                contactDetails.filter((contactDetail, iX) => {
                  if (iX === index) {
                    return false;
                  }
                  return true;
                })
              )
            }
          />
        ))}
      </table>
      <div
        className="flex-row flex justify-end items-center"
        onClick={() => {
          onContactDetailChange([
            ...(contactDetails || []),
            ({
              id: undefined,
              phone: undefined,
            } as any) as ContactRecord,
          ]);
        }}
      >
        <Button type="primary" className="mr-1 mt-2 w-1/4">
          Add
        </Button>
      </div> */}
    </>
  );
};

export const NotificationTableTab = forwardRef((props, ref) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);

  const [notificationMethods, setNotificationMethods] = useState<
    (AlertType & { isEnabled?: boolean; contactRecords?: ContactRecord[] })[]
  >([]);

  const {
    data: notificationTypes,
    loading: isNotificationTypesLoading,
  } = useSDK((SDK) => SDK.AlertService.getAlertTypeByStatus("ACTIVE"));
  // console.log(notificationTypes);
  // cusOrganizationType : individual : 'ORIN', coperate: 'ORCO'
  const isACopertateCustomer =
    state.customer?.cusOrganizationTypeCode === "ORCO";

  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    validateCard() {
      form
        .validateFields()
        .then((d) => {
          console.log("d", d);
        })
        .catch((e) => {
          console.log("e", e);
        });
      return form.getFieldsError();
    },
  }));

  useEffect(() => {
    setNotificationMethods(notificationTypes.content || []);
  }, [notificationTypes]);

  useEffect(() => {
    console.log("NOTIFICATINMETHOD", notificationMethods);
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        notificationDetails: _.flatten(
          notificationMethods.map((notificationMethod) =>
            (notificationMethod.contactRecords || []).map((contactRecord) => ({
              ...contactRecord,
              ...notificationMethod,
            }))
          )
        ).map(
          (notificationMethod) =>
            (({
              accountId: 0,
              addressId: 0,
              addressType: 0,
              contactNo: notificationMethod.phone,
              contactType: notificationMethod.contactType,
              customerId: state.customer?.id,
              alertDetail: [],
              notificationTypes: notificationMethod.code,
              status: "ACTIVE",
              contactId: notificationMethod.contactId,
              // status: "ACTIVE",
              // contactId: notificationMethod.contactId, //contactNumbers.id
              // notificationTypes: notificationMethod.code,
              // customerId: state.customer!.id,
              // contactType: "", //contactNumbers.pconContactTypeId
              // contactNo: notificationMethod.phone,
            } as any) as NotificationDetailsResource)
        ),
      },
    });
    // debugger;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationMethods]);

  return (
    <div>
      {isNotificationTypesLoading ? (
        <p>Notification types are loading...</p>
      ) : (
        <DetailsBoxTemplate
          title="Notification Methods"
          details="These are the details of the account"
          item={
            <div>
              {notificationMethods.map((notificationMethod, index: number) => {
                return (
                  <div key={index}>
                    <BasicCheckbox
                      checked={notificationMethod.isEnabled}
                      onChange={() => {
                        setNotificationMethods(
                          notificationMethods.map((notificationMethodX) => {
                            console.log(
                              "notificationMethodX",
                              notificationMethodX
                            );
                            if (
                              notificationMethodX.id !== notificationMethod.id
                            ) {
                              return notificationMethodX;
                            } else {
                              return {
                                ...notificationMethodX,
                                isEnabled: !notificationMethod.isEnabled,
                              };
                            }
                          })
                        );
                      }}
                      className="mt-4 mb-1"
                      title={notificationMethod.name}
                    />

                    {notificationMethod.isEnabled && isACopertateCustomer && (
                      <CorpertateCustomerContacts
                        customerId={state.customer!.id}
                        contactDetails={notificationMethod.contactRecords}
                        onContactDetailChange={(records) => {
                          setNotificationMethods(
                            notificationMethods.map((notificationMethodX) => {
                              if (
                                notificationMethodX.id !== notificationMethod.id
                              ) {
                                return notificationMethodX;
                              } else {
                                return {
                                  ...notificationMethodX,
                                  contactRecords: records,
                                };
                              }
                            })
                          );
                        }}
                      />
                    )}
                    {notificationMethod.isEnabled && !isACopertateCustomer && (
                      <NonCorpertateCustomerContacts
                        customerId={state.customer!.id}
                        contactDetails={notificationMethod.contactRecords}
                        onContactDetailChange={(records) => {
                          setNotificationMethods(
                            notificationMethods.map((notificationMethodX) => {
                              if (
                                notificationMethodX.id !== notificationMethod.id
                              ) {
                                return notificationMethodX;
                              } else {
                                console.log("RECORDS", records);
                                return {
                                  ...notificationMethodX,
                                  contactRecords: records,
                                };
                              }
                            })
                          );
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          }
        ></DetailsBoxTemplate>
      )}
    </div>
  );
});
