import { Tag } from "antd";
import React, { useEffect } from "react";

export const ChangeTable = ({ data, titles }: { data: any; titles: any }) => {
  useEffect(() => {
    // console.log("data", data);
  }, [data]);
  return (
    <div
      className="overflow-x-auto"
      // style={{ gridTemplateColumns: "repeat(auto-fit,220px)" }}
    >
      <div className="flex flex-row mb pb">
        {titles.map((item: any, index: number) => {
          //   console.log(item.dataIndex);
          return (
            <div
              className="mb-2 font-medium text-sm"
              // style={{ minWidth: "10rem" }}
              key={index}
            >
              <p className="pl-2 mb-4">{item.title}</p>
              <div className="">
                {typeof data === "object" ? (
                  data
                    .map((dataItem: any) => {
                      if (dataItem.change) {
                        // console.log(
                        //   Object.entries(dataItem).filter(
                        //     (i) => i[0] === item.dataIndex
                        //   )
                        // );
                        return {
                          change: dataItem.change,
                          value:
                            typeof Object.entries(dataItem).filter(
                              (i) => i[0] === item.dataIndex
                            )[0][1] === "object"
                              ? (Object.entries(dataItem).filter(
                                  (i) => i[0] === item.dataIndex
                                )[0][1] as any).name
                              : Object.entries(dataItem).filter(
                                  (i) => i[0] === item.dataIndex
                                )[0][1],
                          onClick:
                            typeof Object.entries(dataItem).filter(
                              (i) => i[0] === item.dataIndex
                            )[0][1] === "object"
                              ? (Object.entries(dataItem).filter(
                                  (i) => i[0] === item.dataIndex
                                )[0][1] as any).onClick
                              : () => {},
                        };
                      } else {
                        return {
                          change: null,
                          value:
                            typeof Object.entries(dataItem).filter(
                              (i) => i[0] === item.dataIndex
                            )[0][1] === "object"
                              ? (Object.entries(dataItem).filter(
                                  (i) => i[0] === item.dataIndex
                                )[0][1] as any)
                                ? (Object.entries(dataItem).filter(
                                    (i) => i[0] === item.dataIndex
                                  )[0][1] as any).name
                                : ""
                              : Object.entries(dataItem).filter(
                                  (i) => i[0] === item.dataIndex
                                )[0][1],
                          onClick:
                            typeof Object.entries(dataItem).filter(
                              (i) => i[0] === item.dataIndex
                            )[0][1] === "object"
                              ? (Object.entries(dataItem).filter(
                                  (i) => i[0] === item.dataIndex
                                )[0][1] as any).onClick
                              : () => {},
                        };
                      }
                    })
                    .map((d: any, key: number) => {
                      // console.log("DDDD", d);

                      return (
                        <div
                          className="font-normal pl-2 py-4 flex items-center flex-row mb-1"
                          key={key}
                          style={
                            d.change
                              ? {
                                  background: `${(() => {
                                    if (d.change === "add") {
                                      return "#E6F7FF";
                                    } else if (d.change === "remove") {
                                      return "#ffe6e6";
                                    } else if (d.change === item.title) {
                                      return "white";
                                    } else {
                                      return "white";
                                    }
                                  })()}`,

                                  color: `${(() => {
                                    if (d.change === "add") {
                                      return "#1890FF";
                                    } else if (d.change === "remove") {
                                      return "#FF4D4F";
                                    } else if (d.change === item.dataIndex) {
                                      return "#1890FF";
                                    } else {
                                      return "#595959";
                                    }
                                  })()}`,

                                  minHeight: "4rem",
                                  minWidth: "10rem",
                                }
                              : {
                                  color: "#595959",
                                  minHeight: "4rem",
                                }
                          }
                        >
                          <span
                            className={
                              d.value === "view"
                                ? "text-blue-500 capitalize cursor-pointer"
                                : ""
                            }
                            onClick={d.onClick}
                            style={{ minWidth: "10rem" }}
                          >
                            {d.value}
                            {d.change === "view" && d.value === "view" && (
                              <Tag className="ml-4" color="blue">
                                New
                              </Tag>
                            )}
                          </span>
                          {index === titles.length - 1 && d.change && (
                            <span
                              style={{
                                minWidth: "10rem",
                              }}
                              className="ml-1"
                            >
                              {d.change === "add" && (
                                <span
                                  className="font-bold"
                                  style={{ color: "#1890FF" }} //"#65BF73"
                                >
                                  New Section
                                </span>
                              )}
                              {d.change === "remove" && (
                                <span
                                  className="font-bold"
                                  style={{ color: "#FF4D4F" }}
                                >
                                  Removed Section
                                </span>
                              )}
                            </span>
                          )}
                        </div>
                      );
                    })
                ) : (
                  <p>"no data"</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
