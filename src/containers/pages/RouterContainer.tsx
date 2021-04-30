import { Breadcrumb, Progress, Tabs } from "antd";
import { push } from "connected-react-router";
import _ from "lodash";
import React, { Suspense, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import {
  matchPath,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { CONFIG } from "../../config";
import { setInquiryTab } from "../../store/modules/InquiryTabChange/InquiryTabChange.dispatcher";
import { setTabKey } from "../../store/modules/tabs/tabs.dispatcher";
import { iStore } from "../../store/store.model";
import { P } from "../atoms/typography";
import { MenuItem, navigation } from "./navigation";
import { SettingsSchema } from "./Settings/settings-schema";
import SettingsCreateUpdateTemplate from "./Settings/SettingsTemplate/form";
import SettingsTemplate from "./Settings/SettingsTemplate/list";

const LoadingView = (
  <div className="flex items-center justify-center min-h-screen w-screen">
    <Progress status="normal" type="circle" />
  </div>
);

interface iBreadcrumbData {
  title: string;
  description?: string;
  tooltip?: string;
  path: iBreadcrumbItem[];
}

interface iBreadcrumbItem {
  type: "TEXT" | "LINK";
  link?: string;
  text: string;
}

function RouterContainer(props: any) {
  const location = useLocation();
  const { accountId }: any = useParams();
  const match: any = useRouteMatch(
    `/web/yard-management/${CONFIG.tenant}/accounts/manage-account/:accountId/scheduled-payment/:transactionId`
  );

  const standingOrderRoute: any = useRouteMatch(
    `/web/yard-management/${CONFIG.tenant}/accounts/manage-account/:accountId/standing-order/:transactionId`
  );
  const checkbookRoute: any = useRouteMatch(
    `/web/yard-management/${CONFIG.tenant}/accounts/manage-account/:accountId/chequebook/:checkbookId`
  );
  const approveAccountRoute: any = useRouteMatch(
    `/web/yard-management/${CONFIG.tenant}/accounts/approve-account`
  );
  const { inquiryTabState } = useSelector((state: iStore) => {
    return state;
  });
  const [tabNames, setTabNames] = useState<Array<string>>([]);
  const [routeMatch, setRouteMatch] = useState(false);

  useEffect(() => {
    // console.log(window.location.pathname);

    if (inquiryTabState) {
      switch (inquiryTabState.tab.name) {
        case "schedule":
          setTabNames(["Scheduled Payment Details", "Transaction Details"]);
          break;
        case "standingOrder":
          setTabNames(["Standing Order Details", "Transaction Details"]);
          break;
        case "checkbook":
          setTabNames(["Checkbook Details", "Check Leafs"]);
          break;
        case "approve":
          setTabNames(["Pending", "Rejected"]);
          break;
      }
    }
  }, [inquiryTabState, location]);

  useEffect(() => {
    // console.log(match.isExact);
    if (match) {
      setRouteMatch(match.isExact);
    } else if (standingOrderRoute) {
      setRouteMatch(standingOrderRoute.isExact);
    } else if (checkbookRoute) {
      setRouteMatch(checkbookRoute.isExact);
    } else if (approveAccountRoute) {
      setRouteMatch(approveAccountRoute.isExact);
    } else {
      setRouteMatch(false);
    }
  }, [match, standingOrderRoute, approveAccountRoute, checkbookRoute]);

  let breadcrumbData: iBreadcrumbData = {
    title: "",
    path: [],
  };

  const availableRoutes = (() => {
    const routes: MenuItem[] = [];
    const fetchRoutes = (menu: MenuItem[]) => {
      for (let item of menu) {
        if (item.children) {
          fetchRoutes(item.children);
        }
        if (item.type === "LINK") {
          routes.push(item);
        }
      }
    };
    fetchRoutes(navigation.menu);
    return routes;
  })();

  const settingsPaths = _.flattenDeep(
    SettingsSchema.navigation.list.map((settingCategory) =>
      settingCategory.children.map((child) => child.path)
    )
  );

  const indexOfPathInSettings = settingsPaths.indexOf(
    location.pathname.replace(CONFIG.base, "")
  );

  if (indexOfPathInSettings > -1) {
    const mathcedPath = _.find(settingsPaths, (path) =>
      matchPath(location.pathname.replace(CONFIG.base, ""), path)
    );
    for (const settingCategory of SettingsSchema.navigation.list) {
      for (let setting of settingCategory.children) {
        if (mathcedPath === setting.path) {
          breadcrumbData = {
            title: setting.name,
            path: [
              {
                type: "TEXT",
                text: "Home",
              },
              {
                type: "TEXT",
                text: "Settings",
              },
              {
                type: "TEXT",
                text: settingCategory.title,
              },
              {
                type: "LINK",
                link: setting.path,
                text: setting.name,
              },
            ],
            description: setting.description,
            tooltip: setting.tooltip,
          };
        }
      }
    }
  } else {
    const fetchPath = (path: string, routes: MenuItem[], trace: MenuItem[]) => {
      for (let route of routes) {
        if (route.children) {
          fetchPath(location.pathname, route.children, [...trace, route]);
        }
        if (route.type === "LINK") {
          if (
            matchPath(path, {
              path: `${CONFIG.base}${route.pathMap}`,
              exact: true,
            })
          ) {
            const breadrumbPaths: iBreadcrumbItem[] = [
              {
                type: "TEXT",
                text: "Home",
              },
            ];
            for (let tracePath of trace) {
              breadrumbPaths.push({
                type: tracePath.type === "GROUP" ? "TEXT" : "LINK",
                link: tracePath.pathMap.replace(":tenant", "AnRkr"),
                text: tracePath.label,
              });
            }
            breadcrumbData = {
              title: route.label,
              path: breadrumbPaths,
            };
            return;
          }
        } else {
          // Group
          fetchPath(path, route.children || [], [...trace, route]);
        }
      }
    };
    fetchPath(location.pathname, navigation.menu, []);
  }

  const activateAccountPath: string = `/web//${CONFIG.tenant}/accounts/activate-account`;
  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      {breadcrumbData.title && (
        <div
          className={
            location.pathname === activateAccountPath || routeMatch
              ? "p-4 pb-0"
              : "p-4"
          }
        >
          <Breadcrumb className="cursor-pointer">
            {breadcrumbData.path.map((path) =>
              path.type === "LINK" ? (
                <Breadcrumb.Item
                  onClick={() =>
                    props.goToLink(`/web/yard-management${path.link}`)
                  }
                  key={path.text}
                >
                  {path.text}
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={path.text}>{path.text}</Breadcrumb.Item>
              )
            )}
          </Breadcrumb>
          <div
            className={
              location.pathname === activateAccountPath ? "p-0" : "py-2"
            }
          >
            <P bold>{breadcrumbData.title}</P>
            {breadcrumbData.description && <P>{breadcrumbData.title}</P>}
            {location.pathname === activateAccountPath ? (
              <Tabs
                tabBarStyle={{ margin: 0 }}
                className="p-0"
                onChange={(k: any) => {
                  setTabKey(k);
                }}
              >
                <Tabs.TabPane tab="Pending" key="1"></Tabs.TabPane>
                <Tabs.TabPane tab="Rejected" key="2"></Tabs.TabPane>
                {/* <Tabs.TabPane tab="Activated" key="3"></Tabs.TabPane> */}
              </Tabs>
            ) : (
              ""
            )}
          </div>
          {/* //! tabs change */}
          <div
            className="p-0"
            style={routeMatch ? { display: "block" } : { display: "none" }}
          >
            {
              <Tabs
                tabBarStyle={{ margin: 0 }}
                className="p-0"
                onChange={(k: any) => {
                  setInquiryTab({
                    name: inquiryTabState.tab.name,
                    key: Number(k),
                  });
                }}
                defaultActiveKey="1"
              >
                {tabNames.map((item, index: number) => {
                  return (
                    <Tabs.TabPane tab={item} key={index + 1}></Tabs.TabPane>
                  );
                })}
              </Tabs>
            }
          </div>
        </div>
      )}

      {/* // !end */}
      <div
        style={{
          background: "#EEEEEE",
        }}
        className="w-full h-full p-2"
      >
        <Suspense fallback={LoadingView}>
          <Switch>
            {/* Todo: */}
            {/* <Route
              exact
              path={`/${CONFIG.tenant}`}
              component={({ location }: any) => (
                <Redirect
                  to={{
                    ...location,
                    pathname: `${CONFIG.tenant}`,
                  }}
                />
              )}
            /> */}
            {availableRoutes.map((item) => (
              <Route
                exact
                path={`${CONFIG.base}${item.pathMap}`}
                component={item.component}
                key={item.pathMap}
              ></Route>
            ))}
            {/* Settings Template */}
            <Route
              exact
              path={settingsPaths.map((item) => `${CONFIG.base}${item}`)}
              component={SettingsTemplate}
            ></Route>

            <Route
              exact
              path={settingsPaths.map(
                (item) => `${CONFIG.base}${item}/:id/view`
              )}
              component={SettingsCreateUpdateTemplate}
            ></Route>
            <Route
              exact
              path={settingsPaths.map((item) => `${CONFIG.base}${item}/create`)}
              component={SettingsCreateUpdateTemplate}
            ></Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    goToLink: (url: any) => dispatch(push(url)),
  };
};

// export default connect(null, mapDispatchToProps)(ViewFundReservationInquiry);

export default connect(null, mapDispatchToProps)(RouterContainer);
