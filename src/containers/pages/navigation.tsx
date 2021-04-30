import { ProfileOutlined, SettingOutlined } from "@ant-design/icons";
import React from "react";
import { CONFIG } from "../../config";
import { AccountOpeningContainer } from "./AccountManagment/AccountOpening/AccountOpeningContainer";
import dashboardPage from "./dashboard/dashboard.page";
//import MarkAsSeizedListView from "./MarkAsSeized/MarkAsSeizedTemplate/list";
import SettingLanding from "./Settings/settings-dashboard";
import HandoverseizedContainer from "./YardManagement/MarkAsSeized/MarkAsSeized/HandoverSeized/HandoverseizedContainer";
import HandoverSeizedCancellationContainer from "./YardManagement/MarkAsSeized/MarkAsSeized/HandoverSeizedCancellation/HandoverSeizedCancellationContainer";

const tenant = "AnRkr";

export interface MenuItem {
  type: "LINK" | "GROUP";
  path?: string;
  pathMap: string;
  label: string;
  icon?: JSX.Element;
  breadcrumb?: {
    title: string;
    description: string;
  };
  component?: (props: any) => JSX.Element | any;
  children?: MenuItem[];
  visibleInMenu?: boolean;
}

export const navigation: { menu: MenuItem[] } = {
  menu: [
    //Dashboard
    {
      type: "LINK",
      pathMap: "/:tenant/dashboard",
      label: "Dashboard",
      icon: <SettingOutlined />,
      breadcrumb: {
        title: "Dashboard",
        description: "",
      },
      component: dashboardPage,
      visibleInMenu: true,
    },

    {
      pathMap: `/${CONFIG.tenant}/accounts`,
      type: "GROUP",
      label: "Account Management",
      icon: <ProfileOutlined />,
      children: [
        //Account Opening
        {
          type: "LINK",
          pathMap: "/:tenant/accounts/create-account",
          label: "Opening Account",
          component: AccountOpeningContainer,
          breadcrumb: {
            title: "Opening Account",
            description: "",
          },
          visibleInMenu: true,
        },
      ],
      visibleInMenu: true,
    },
    {
      pathMap: `/${CONFIG.tenant}/mark-as-seized`,
      type: "GROUP",
      label: "Yard Management",
      icon: <ProfileOutlined />,
      children: [
        {
          type: "GROUP",
          pathMap: "/:tenant/mark-as-seized",
          label: "Mark As Seized",
          children: [
            {
              type: "LINK",
              pathMap: "/:tenant/mark-as-seized/handover-seized",
              label: "Handover/Seized",
              component: HandoverseizedContainer,
              visibleInMenu: true,
              breadcrumb: {
                title: "Mark As Seized",
                description: "",
              },
            },
            {
              type: "LINK",
              pathMap: "/:tenant/mark-as-seized/handover-seized-cancellation",
              label: "Handover/Seized Cancellation",
              component: HandoverSeizedCancellationContainer,
              visibleInMenu: true,
              breadcrumb: {
                title: "Mark As Seized Cancellation",
                description: "",
              },
            },
          ],
          breadcrumb: {
            title: "Mark As Seized",
            description: "",
          },
          visibleInMenu: true,
        },
      ],
      visibleInMenu: true,
    },

    //Statement

    // {
    //   path: `${tenant}/passbook`,
    //   pathMap: "/:tenant/passbook",
    //   type: "GROUP",
    //   label: "Passbook",
    //   icon: <FileDoneOutlined />,
    //   children: [
    //     //Print Passbook
    //     {
    //       type: "LINK",
    //       path: `${tenant}/passbook/print-passbook`,
    //       pathMap: "/:tenant/passbook/print-passbook",
    //       label: "Print Passbook",
    //       component: ErrorHandleUnderConstruction,
    //       breadcrumb: {
    //         title: "Print Passbook",
    //         description: "",
    //       },
    //       visibleInMenu: true,
    //     },
    //     //Reprint Passbook
    //     {
    //       type: "LINK",
    //       path: `${tenant}/passbook/reprint-passbook`,
    //       pathMap: "/:tenant/passbook/reprint-passbook",
    //       label: "Reprint Passbook",
    //       component: ErrorHandleUnderConstruction,
    //       breadcrumb: {
    //         title: "Reprint Passbook",
    //         description: "",
    //       },
    //       visibleInMenu: true,
    //     },
    //     //Update Passbook
    //     {
    //       type: "LINK",
    //       path: `${tenant}/passbook/update-passbook`,
    //       pathMap: "/:tenant/passbook/update-passbook",
    //       label: "Update Passbook",
    //       component: ErrorHandleUnderConstruction,
    //       breadcrumb: {
    //         title: "Update Passbook",
    //         description: "",
    //       },
    //       visibleInMenu: true,
    //     },
    //     //Issue Passbook
    //     {
    //       type: "LINK",
    //       path: `${tenant}/passbook/issue-passbook`,
    //       pathMap: "/:tenant/passbook/issue-passbook",
    //       label: "Issue Passbook",
    //       component: ErrorHandleUnderConstruction,
    //       breadcrumb: {
    //         title: "Issue Passbook",
    //         description: "",
    //       },
    //       visibleInMenu: true,
    //     },
    //     //Passbook Inquiry
    //     {
    //       type: "LINK",
    //       path: `${tenant}/passbook/passbook-inquiry`,
    //       pathMap: "/:tenant/passbook/passbook-inquiry",
    //       label: "Passbook Inquiry",
    //       component: ErrorHandleUnderConstruction,
    //       breadcrumb: {
    //         title: "Passbook Inquiry",
    //         description: "",
    //       },
    //       visibleInMenu: true,
    //     },
    //   ],
    //   visibleInMenu: true,
    // },
    {
      path: `${tenant}/settemp`,
      pathMap: "/:tenant/settemp",
      type: "LINK",
      label: "Settings",
      icon: <SettingOutlined />,
      component: SettingLanding,
      visibleInMenu: true,
    },
  ],
};
