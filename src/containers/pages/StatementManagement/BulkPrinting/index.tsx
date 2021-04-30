import { DatePicker, Modal, Select } from "antd";
import { isEqual } from "lodash";
import React, { FC, useEffect, useState } from "react";
import { FormCardTemplate } from "../../../../schemas/helpers/form-card";
import { ResourceSelectorModal } from "../../../../schemas/helpers/resource-selector.modal";
import DropDown from "../../../atoms/BasicDropdown.atom";
import Container from "../../../atoms/Container.atom";
import TabContainer from "../../../atoms/TabContainer.atom";
import TabCotainerPane from "../../../atoms/TabContainerPane.atom";
import { P } from "../../../atoms/typography";
import { accountSelectorSchema } from "../../AccountManagment/selector-schemas/account-selector/account-selector.schemas";
const { Option } = Select;
const { RangePicker } = DatePicker;

const BulkPrinting: FC<BulkPrintingProps> = ({}) => {
  const [bulkPrintPayload, setBulkPrintPayload] = useState<BulkPrintingPayload>(
    {
      dateRange: { from: "", to: "" },
      accoutnType: "Savings",
      statementType: "MonthlyStatement",
    }
  );
  const [accountSelectModal, setaccountSelectModal] = useState(false);

  const UIActions = {
    accountSelector: {
      show: () => {
        setaccountSelectModal(true);
      },
      hide: () => {
        setaccountSelectModal(false);
      },
    },
  };

  const setBulkPrintState = (data: BulkPrintingPayload | any[]) => {
    let newObj = { ...bulkPrintPayload, ...data };
    if (!isEqual(newObj, bulkPrintPayload)) {
      setBulkPrintPayload(newObj);
    }
  };

  const PeriodSelector = (
    <div className="flex flex-1 flex-col">
      <P fontSize={"0.9rem"} color="#979797">
        Time Period
      </P>
      <div className="flex flex-1 flex-row pt-1">
        <RangePicker
          onChange={(value: any, date: any[]) =>
            setBulkPrintState({ dateRange: { from: date[0], to: date[1] } })
          }
        />
      </div>
    </div>
  );

  useEffect(() => {
    console.log("bulkPrintPayload :", bulkPrintPayload);
  }, [bulkPrintPayload]);

  const confirm = () => {
    Modal.confirm({
      title: "Print Single Statement",
      content: (
        <div className="flex w-full justify-between">
          <P fontSize={"1rem"}>Your about to print x number of statments</P>
          <Select
            style={{ width: 250 }}
            value={"f1"}
            // onChange={setType}
            onClick={(e: any) => e.stopPropagation()}
          >
            <Option value="f1">Format 1</Option>
            <Option value="f2">Format 2</Option>
            <Option value="f3">Format 3</Option>
          </Select>
        </div>
      ),
      okText: "Print All",
      cancelText: "Go Back",
      width: window.screen.width - 300, // not the best work i've done xD
    });
  };

  return (
    <Container
      next={{
        name: "Next",
        onClick: UIActions.accountSelector.show,
      }}
    >
      <ResourceSelectorModal
        isVisible={accountSelectModal}
        onCancel={UIActions.accountSelector.hide}
        onOk={() => {
          UIActions.accountSelector.hide();
          confirm();
        }}
        // onResourceSelected={(account) => {
        //   UIActions.accountSelector.hide();
        //   confirm();
        // }}
        onLoadSearchTerm="SAVINGS"
        onRowSelection={(a, b) =>
          setBulkPrintPayload({
            selectedAccounts: b.map((item: any) => item.id),
          })
        }
        schema={accountSelectorSchema}
      />

      <TabContainer>
        <TabCotainerPane tab="Type Selection" key="1">
          <FormCardTemplate
            title="Type Selection"
            description="Select the Time period & Statement you want to choose"
          >
            <div className="flex flex-1 justify-around p-4">
              {PeriodSelector}
              <DropDown
                title="Statement Type"
                data={[
                  { key: "ms", name: "Monthly Statement" },
                  { key: "ws", name: "Weekly Statement" },
                ]}
                defaultKey="ms"
                onChange={(e) => setBulkPrintState({ statementType: e })}
              />
              <DropDown
                title="Acount Type"
                data={[
                  { key: "savings", name: "Savings" },
                  { key: "current", name: "Current" },
                ]}
                defaultKey="savings"
                onChange={(e) => setBulkPrintState({ accoutnType: e })}
              />
            </div>
          </FormCardTemplate>
        </TabCotainerPane>
      </TabContainer>
    </Container>
  );
};

interface BulkPrintingProps {}

interface BulkPrintingPayload {
  dateRange?: {
    from: string;
    to: string;
  };
  statementType?: string;
  accoutnType?: string;
  selectedAccounts?: string[];
}

export default BulkPrinting;
