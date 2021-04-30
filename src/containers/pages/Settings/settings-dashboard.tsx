import { Input } from "antd";
import { push } from "connected-react-router";
import { filter as _filter, map as _map } from "lodash";
import React, { FC, useMemo, useState } from "react";
import { connect } from "react-redux";
import { P } from "../../atoms/typography";
import { SettingsSchema } from "./settings-schema";
const SettingLanding: FC<SettingLanding> = ({ goToTab }) => {
  const [inChange, setinChange] = useState<string>("");
  let x: any = useMemo(() => {
    if (!inChange.length) {
      return SettingsSchema.navigation.list;
    }
    return _filter(
      _map(SettingsSchema.navigation.list, (item) => ({
        title: item.title,
        children: _filter(item.children, (item2) =>
          item2.name.toLowerCase().includes(inChange.toLowerCase())
        ),
      })),
      (item) => !!item.children.length
    );
  }, [inChange]);
  return (
    <div className="bg-white p-4 h-full">
      <Input
        placeholder="Search..."
        className="mb-6"
        onPressEnter={(e: any) => setinChange(e.target.value)}
      />
      {x.map((item: any) => (
        <>
          <P bold>{item.title}</P>
          <div className="flex flex-wrap mt-10">
            {item.children.map((nav: any) => (
              <div
                onClick={() => goToTab(nav.path)}
                className="w-48 pb-1 mr-10 mb-10 cursor-pointer"
              >
                <P
                  fontSize={"0.9rem"}
                  className="pl-2 pb-1"
                  style={{
                    borderBottom: "1px solid #e3e5e8",
                    color: "#1890ff",
                  }}
                >
                  {nav.name}
                </P>
                <p className="text-xs pl-2 pt-1">
                  {`This will navigate to ${nav.name}`}
                </p>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
interface SettingLanding {
  goToTab: (url: string) => any;
}
const mapDispatchToProps = (dispatch: any) => ({
  goToTab: (url: string) => {
    dispatch(push("/web/yard-management" + url));
  },
});
export default connect(null, mapDispatchToProps)(SettingLanding);
