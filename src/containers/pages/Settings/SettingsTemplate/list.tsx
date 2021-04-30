import { push } from "connected-react-router";
import React, { FC } from "react";
import { connect } from "react-redux";
import { CONFIG } from "../../../../config";
import { resolveSetting } from "../settings-schema";
import { SettingsListViewClientSidePagination } from "./client-side-paginated-table";
import { iSettingConfig } from "./schema";
import { SettingsListViewServerSide } from "./server-side-paginated-table";

const SettingsListView: FC<any> = ({
  navigateToViewRecord,
  navigateToCreateRecordView,
  location,
}) => {
  const viewSettings: iSettingConfig = resolveSetting(
    location.pathname.replace(CONFIG.base, "")
  );

  if (viewSettings.listView.useServerPagination) {
    return (
      <SettingsListViewServerSide
        navigateToViewRecord={navigateToViewRecord}
        navigateToCreateRecordView={navigateToCreateRecordView}
        location={location}
      />
    );
  }
  return (
    <SettingsListViewClientSidePagination
      navigateToViewRecord={navigateToViewRecord}
      navigateToCreateRecordView={navigateToCreateRecordView}
      location={location}
    />
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsListView);
