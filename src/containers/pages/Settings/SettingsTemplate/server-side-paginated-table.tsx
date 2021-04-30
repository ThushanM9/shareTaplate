import { CloseOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, Pagination, Space, Table } from "antd";
import { push } from "connected-react-router";
import _ from "lodash";
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
  OneToManyMapSchema,
  SettingListViewColumnRenderFunctions,
  SettingsSchema_AvailableSearchField,
  SettingsSchema_Field,
} from "./schema";

const _SettingsListView_ServerSide: FC<any> = ({
  navigateToViewRecord,
  navigateToCreateRecordView,
  location,
}) => {
  const viewSettings = resolveSetting(
    location.pathname.replace(CONFIG.base, "")
  );
  const [searchKeyword, setsearchKeyword] = useState("");
  const [searchGroup, setSearchGroup] = useState("");

  const [paginationConfig, setPaginationConfig] = useState({
    total: 0,
    defaultPageSize: 10,
    pageSize: 10,
    current: 1,
  });

  const { data: records, loading } = useSDK<any[]>(
    (sdk) =>
      new Promise((res, rej) => {
        const async = async () => {
          const response = await viewSettings.apis.list(sdk)({
            page: paginationConfig.current - 1,
            pageSize: paginationConfig.pageSize,
          });
          setPaginationConfig({
            ...paginationConfig,
            // Todo: Assumes that all pagination works the same way
            total: response.totalElements,
            current: response.pageable.pageNumber + 1,
          });
          res(response.content);
        };
        async();
      }),
    [paginationConfig.current],
    false,
    []
  );

  const onPaginationChange = (page: number, pageSize?: number) => {
    console.log("page", page);
    const newPaginationConfig = { ...paginationConfig, current: page };
    if (pageSize) {
      newPaginationConfig.pageSize = pageSize;
    }
    setPaginationConfig(newPaginationConfig);
  };

  // const [isNotesModalVisible, setNotesModalVisibility] = useState(false);
  const [selectedNotesEntityId, setSelectedNotesEntityId] = useState("");
  const [selectedEntityId, setSelectedEntityId] = useState("");
  const [isNotesModalVisible, setNotesModalVisibility] = useState(false);
  const [
    isMappedResourceModalVisible,
    setMappedResourceModalVisible,
  ] = useState(false);
  const [mappedResourceSchema, setMappedResourceSchema] = useState<
    OneToManyMapSchema
  >(null as any);

  const mappedEntities = viewSettings.oneToManyMappings
    ? viewSettings.oneToManyMappings.map((section: any) => ({
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
  const hasNotes = viewSettings.listView.hasNotes;
  const isRecordsNonEditable = viewSettings.createView.isRecordsNonEditable;
  const columns = [
    ...viewSettings.fields.map((field: SettingsSchema_Field) => ({
      ...field,
      title: () => <P className="text-xs">{field.label}</P>,
      dataIndex: typeof field.field === "function" ? field.id : field.field,
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
                  setSelectedNotesEntityId(record.id);
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
  ].filter((e) => e);

  const menu = (
    <Menu onClick={(e) => setSearchGroup(String(e.key))}>
      {viewSettings.listView.availableSearchFields.map(
        (item: SettingsSchema_AvailableSearchField) => (
          <Menu.Item key={item.field}>{item.label}</Menu.Item>
        )
      )}
    </Menu>
  );

  const onClearSearch = () => {
    setsearchKeyword("");
  };

  const searchKeyLabel = _.find(viewSettings.listView.availableSearchFields, {
    field: searchGroup,
  })?.label;

  return (
    <div className="flex flex-1 flex-col w-full bg-white">
      <div className="flex flex-row p-2">
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
      {!viewSettings.listView?.disableCreate && (
        <div className="flex flex-1 flex-row justify-end py-4 px-2">
          <Button onClick={() => navigateToCreateRecordView(viewSettings.id)}>
            Create New
          </Button>
        </div>
      )}

      <div className="px-2">
        <Table
          size="small"
          dataSource={records}
          columns={columns}
          pagination={false}
          loading={loading}
        />
        <div className="flex-row flex justify-end items-center p-4">
          <Pagination
            defaultCurrent={1}
            onChange={onPaginationChange}
            {...paginationConfig}
          />
        </div>
      </div>
      {hasNotes && (
        <NotesListModal
          isVisible={isNotesModalVisible}
          onChangeVisibility={(state) => setNotesModalVisibility(state)}
          mainEntityId={selectedNotesEntityId}
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

export const SettingsListViewServerSide = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SettingsListView_ServerSide);
