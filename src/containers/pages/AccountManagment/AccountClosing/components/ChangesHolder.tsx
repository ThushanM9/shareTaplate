import Checkbox from "antd/lib/checkbox/Checkbox";
import React from "react";
import { ChangeTable } from "./ChangeTable";
import { PreviousStateTable } from "./PreviousStateTable";
import { UpdatedItems } from "./UpdatedItems";

export const ChangesHolder = ({
  title,
  nameArr,
  heading,
  component,
  componentHeader,
  table,
  titleArr,
  dataArr,
  hasUpdated,
  previousState,
  updated,
  updatedItems,
  showBorder,
}: {
  title: string;
  nameArr?: Array<{
    title: string;
    details?: string;
    type?: string;
    checked?: boolean;
    component?: JSX.Element;
    changed?: boolean;
  }>;
  previousState?: any[];
  table?: boolean;
  titleArr?: any[];
  dataArr?: any[];
  heading?: string;
  hasUpdated?: boolean;
  component?: JSX.Element;
  updated?: boolean;
  updatedItems?: any[];
  componentHeader?: { header: string; desc: string };
  showBorder?: boolean;
}) => {
  return (
    <div className="px-4 border border-white" style={{ minHeight: "30vh" }}>
      <p
        className={`text-base font-medium mt-8 ${
          nameArr || component ? "mb-2" : "mb-8"
        }`}
      >
        {title}
      </p>
      <div
        className={hasUpdated ? "p-4 rounded-md" : "p-0 rounded-md"}
        style={{ background: hasUpdated ? "#F9F9F9" : "white" }}
      >
        <div
          className={
            table ? "border shadow-xs rounded-md pt-6 px-6 bg-white" : "hidden"
          }
        >
          <p className={heading ? "text-base font-medium mb-6" : "hidden"}>
            {heading}
          </p>
          {table && <ChangeTable titles={titleArr} data={dataArr} />}
        </div>
        <p className={hasUpdated ? "py-6" : "hidden"}>Previous</p>
        <div
          style={{ background: "#F3F3F3" }}
          className={
            hasUpdated ? "border shadow-xs rounded-md pt-6 px-6 mt-2" : "hidden"
          }
        >
          {previousState && (
            <PreviousStateTable titles={titleArr} data={previousState} />
          )}
        </div>
      </div>
      <div
        className={updated ? "p-4 rounded-md" : ""}
        style={{ background: updated ? "#F9F9F9" : "white" }}
      >
        <div
          className={
            nameArr
              ? "border shadow-xs rounded-md pt-6 px-6  bg-white"
              : "hidden"
          }
        >
          <p className={heading ? "text-base font-medium mb-6" : "hidden"}>
            {heading}
          </p>

          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(auto-fit,220px)" }}
          >
            {nameArr?.map((item, index) => {
              return (
                <div key={index} className="mr-10">
                  <p
                    className={
                      item.type === "component"
                        ? "hidden"
                        : "mb-2 font-medium text-sm"
                    }
                    style={{ color: item.changed ? "#1890FF" : "#262626" }}
                  >
                    {item.title}
                  </p>
                  {item.type ? (
                    switchComponent(item)
                  ) : (
                    <p
                      className="text-sm mb-6"
                      style={{ color: item.changed ? "#1890FF" : "#595959" }}
                    >
                      {item.details}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <p className={updated ? "py-6 pl-1" : "hidden"}>Previous</p>
        {updated && <UpdatedItems data={updatedItems} />}
      </div>
      <div
        className={
          component
            ? `${
                showBorder ? "" : "border shadow-xs rounded-md pt-6 px-6 mt-0"
              }`
            : "hidden"
        }
      >
        <p
          className={componentHeader ? "text-base font-medium mb-6" : "hidden"}
        >
          {componentHeader?.header}

          <br />
          <span
            className={componentHeader ? "text-xxs text-gray-600" : "hidden"}
          >
            {componentHeader?.desc}
          </span>
        </p>
        <div className="">{component}</div>
      </div>
    </div>
  );
};

export const switchComponent = (item: any) => {
  switch (item.type) {
    case "checkbox":
      return (
        <Checkbox
          checked={item.checked}
          className="text-sm text-gray-700 mb-6"
        ></Checkbox>
      );
    case "component":
      return item.component;
  }
};
