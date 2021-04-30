import { CloseOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Descriptions,
  Dropdown,
  Input,
  Menu,
  Space,
  Table
} from "antd";
import Modal from "antd/lib/modal/Modal";
import { push } from "connected-react-router";
import _ from "lodash";
import moment from "moment";
import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { CONFIG } from "../../../../config";
import { assets } from "../../../../ui-helpers/assets";
import { useSDK } from "../../../../utils/hooks/useSDK";
import { P } from "../../../atoms/typography";
import { resolveSetting } from "../settings-schema";
import { MappedResourceModal } from "./mapped-resource";
import { NotesListModal } from "./notes-list";
import {
  iSettingConfig,
  OneToManyMapSchema,
  SettingListViewColumnRenderFunctions,
  SettingsSchema_AvailableSearchField,
  SettingsSchema_Field
} from "./schema";

const _SettingsListView_ClientSidePagination: FC<any> = ({
  navigateToViewRecord,
  navigateToCreateRecordView,
  location,
}) => {
  const viewSettings: iSettingConfig = resolveSetting(
    location.pathname.replace(CONFIG.base, "")
  );
  const { data: records, loading } = useSDK<any[]>(
    (sdk) => viewSettings.apis.list(sdk)(),
    [],
    false,
    []
  );

  const [searchKeyword, setsearchKeyword] = useState("");
  const [searchGroup, setSearchGroup] = useState("");
  const [selectedEntityId, setSelectedEntityId] = useState("");
  const [isNotesModalVisible, setNotesModalVisibility] = useState(false);
  const [
    isMappedResourceModalVisible,
    setMappedResourceModalVisible,
  ] = useState(false);
  const [mappedResourceSchema, setMappedResourceSchema] = useState<
    OneToManyMapSchema
  >(null as any);
  const [viewRecordModalState, setViewRecordModalState] = useState<{
    visible: boolean;
    data: any;
  }>({ visible: false, data: {} });
  const filteredRecords = (() => {
    const recordsToFilter = records || [];
    if (searchGroup && searchKeyword) {
      const searchConfig = _.find(viewSettings.listView.availableSearchFields, {
        field: searchGroup,
      })!;
      const searchType = searchConfig.type || "STRING";
      if (searchType === "DATE") {
        //Date Search
        return recordsToFilter
          .filter((record) => {
            console.log(
              record,
              moment((record as any)[searchGroup])
                .format(searchConfig.format)
                .toLocaleLowerCase(),
              searchKeyword.toLocaleLowerCase()
            );
            return moment((record as any)[searchGroup])
              .format(searchConfig.format)
              .toLocaleLowerCase()
              .includes(searchKeyword.toLocaleLowerCase());
          })
          .map((e) => ({ key: String(e.id), ...e }));
      } else if (searchGroup === "status" || "STATUS") {
        console.log(records);
        return recordsToFilter
          .filter((record) =>
            String((record as any)[searchGroup] || "")
              .toLocaleLowerCase()
              .startsWith(searchKeyword.toLocaleLowerCase())
          )
          .map((e) => ({ key: String(e.id), ...e }));
      } else {
        return recordsToFilter
          .filter((record) =>
            String((record as any)[searchGroup] || "")
              .toLocaleLowerCase()
              .includes(searchKeyword.toLocaleLowerCase())
          )
          .map((e) => ({ key: String(e.id), ...e }));
      }
    } else {
      // if there is no search field
    }

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "LKR",
      minimumFractionDigits: 2,
    });

    // Filter the array with the amount formatted with comma seperated values
    const newRecordsToFilter = recordsToFilter.map((recordToFilter) => {
      if (recordToFilter.amount) {
        return {
          ...recordToFilter,
          amount: formatter.format(recordToFilter.amount),
        };
      }
      return recordToFilter;
    });

    return newRecordsToFilter;
  })();

  const onClearSearch = () => {
    setsearchKeyword("");
  };

  const hasNotes = viewSettings.listView.hasNotes;
  const showViewAction = viewSettings.listView.showViewAction;
  const isRecordsNonEditable = viewSettings.createView.isRecordsNonEditable;

  const mappedEntities = viewSettings.oneToManyMappings
    ? viewSettings.oneToManyMappings.map((section) => ({
        title: () => <P className="text-xs"></P>,
        key: section.label,
        width: 150,
        render: (text: any, record: any) => (
          <Space size="middle" className="cursor-pointer">
            <P
              className="text-xs"
              color={assets.color.text_blue}
              onClick={() => {
                console.log("View One to many Mapping");
                setSelectedEntityId(record.id);
                setMappedResourceModalVisible(true);
                setMappedResourceSchema(section);
              }}
            >
              View {section.label}
            </P>
          </Space>
        ),
      }))
    : [];

  // viewSettings.fields.map((field) => {
  //   console.log(field);
  // });

  const columns = [
    ...viewSettings.fields.map((field: SettingsSchema_Field) => ({
      ...field,
      title: () => <P className="text-xs">{field.label}</P>,
      dataIndex: field?.id === "id" ? "code" : field.id,
      key: field.id,
      render: (SettingListViewColumnRenderFunctions as any)[field.type](field),
    })),
    hasNotes
      ? {
          title: () => <P className="text-xs"></P>,
          key: "notes",
          width: 150,
          render: (text: any, record: any) => (
            <Space size="middle" className="cursor-pointer">
              <P
                className="text-xs"
                color={assets.color.text_blue}
                onClick={() => {
                  console.log("View Notes");
                  setSelectedEntityId(record.id);
                  setNotesModalVisibility(true);
                }}
              >
                View Notes
              </P>
            </Space>
          ),
        }
      : null,
    ...mappedEntities,
    showViewAction && {
      title: () => <P className="text-xs"></P>,
      key: "action",
      width: 50,
      render: (text: any, record: any) => (
        <Space size="middle" className="cursor-pointer">
          <P
            className="text-xs"
            color={assets.color.text_blue}
            onClick={() => {
              if (
                viewSettings.customIdMapping &&
                viewSettings.customIdMapping.listViewId
              ) {
                navigateToViewRecord(
                  viewSettings.id,
                  record[viewSettings.customIdMapping.listViewId]
                );
                setViewRecordModalState({ data: record, visible: true });
              } else {
                // navigateToViewRecord(viewSettings.id, record.id);
                setViewRecordModalState({ data: record, visible: true });
              }
            }}
          >
            View
          </P>
        </Space>
      ),
    },
    isRecordsNonEditable
      ? null
      : {
          title: () => <P className="text-xs"></P>,
          key: "action",
          width: 150,
          render: (text: any, record: any) => (
            <Space size="middle" className="cursor-pointer">
              <P
                className="text-xs"
                color={assets.color.text_blue}
                onClick={() => {
                  if (
                    viewSettings.customIdMapping &&
                    viewSettings.customIdMapping.listViewId
                  ) {
                    navigateToViewRecord(
                      viewSettings.id,
                      record[viewSettings.customIdMapping.listViewId]
                    );
                  } else {
                    navigateToViewRecord(viewSettings.id, record.id);
                  }
                }}
              >
                Update Record
              </P>
            </Space>
          ),
        },
  ].filter((e) => e) as any[];

  const menu = (
    <Menu onClick={(e) => setSearchGroup(String(e.key))}>
      {viewSettings.listView.availableSearchFields.map(
        (item: SettingsSchema_AvailableSearchField) => (
          <Menu.Item key={item.field}>{item.label}</Menu.Item>
        )
      )}
    </Menu>
  );

  const searchKeyLabel = _.find(viewSettings.listView.availableSearchFields, {
    field: searchGroup,
  })?.label;
  const getViewModalFields = () =>
    viewSettings.listView.additionalViewFields
      ? [...viewSettings.fields, ...viewSettings.listView.additionalViewFields]
      : [...viewSettings.fields];

  return (
    <div className="flex flex-1 flex-col w-full bg-white">
      <div className="flex flex-1 flex-row justify-between py-4 px-2">
        <div className="flex flex-row">
          <Input
            style={{ width: 200 }}
            placeholder="Search"
            onChange={(e) => setsearchKeyword(e.target.value)}
            value={searchKeyword}
            prefix={<SearchOutlined />}
          />
          <Dropdown overlay={menu}>
            <Button
              style={{ width: 170 }}
              className="flex justify-between items-center bg-gray-200"
            >
              {searchKeyLabel || "Select Search Key"}
              <DownOutlined />
            </Button>
          </Dropdown>
          <Button
            className="flex justify-center items-center"
            type="primary"
            icon={<SearchOutlined />}
          >
            Search
          </Button>
          {searchKeyword && (
            <div className="flex flex-1 justify-center items-center px-2 cursor-pointer">
              <Button
                onClick={onClearSearch}
                size="small"
                className="flex justify-center items-center"
                icon={<CloseOutlined style={{ fontSize: 12 }} />}
                shape="circle"
              />
            </div>
          )}
        </div>
        {viewSettings.listView.disableCreateCondition &&
        viewSettings.listView.disableCreateCondition(records) ? null : (
          <Button onClick={() => navigateToCreateRecordView(viewSettings.id)}>
            Create New
          </Button>
        )}
      </div>
      <div className="px-2">
        <Table
          size="small"
          dataSource={filteredRecords}
          columns={columns}
          pagination={{ defaultPageSize: 8 }}
          loading={loading}
        />
      </div>
      {hasNotes && (
        <NotesListModal
          isVisible={isNotesModalVisible}
          onChangeVisibility={(state) => setNotesModalVisibility(state)}
          mainEntityId={selectedEntityId}
          viewConfig={viewSettings}
        />
      )}

      {viewSettings.oneToManyMappings && (
        <MappedResourceModal
          isVisible={isMappedResourceModalVisible}
          onChangeVisibility={(state) => setMappedResourceModalVisible(state)}
          mainEntityId={selectedEntityId}
          schema={mappedResourceSchema}
        />
      )}

      {viewSettings.listView.showViewAction && (
        <Modal
          onOk={() => {
            setViewRecordModalState((prev) => ({ ...prev, visible: false }));
          }}
          onCancel={() =>
            setViewRecordModalState((prev) => ({ ...prev, visible: false }))
          }
          visible={viewRecordModalState.visible}
        >
          <Descriptions layout={"horizontal"} title="Record View">
            {getViewModalFields().map((field) => (
              <Descriptions.Item
                labelStyle={{ fontWeight: "bold" }}
                label={field.label}
                span={4}
              >
                {/* {viewRecordModalState.data[field.id]} */}
                <P style={{ paddingTop: 1, paddingLeft: 10 }}>
                  {SettingListViewColumnRenderFunctions[field.type](field)(
                    viewRecordModalState.data[field.id] as never,
                    viewRecordModalState.data
                  )}
                </P>
              </Descriptions.Item>
            ))}
          </Descriptions>
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  navigateToViewRecord: (basePath: string, id: string) => {
    dispatch(push(`${basePath}/${id}/view`));
  },
  navigateToCreateRecordView: (basePath: string) => {
    dispatch(push(`${basePath}/create`));
  },
});

export const SettingsListViewClientSidePagination = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SettingsListView_ClientSidePagination);
