import React from "react";

export const PreviousStateTable = ({
  data,
  titles,
}: {
  data: any;
  titles: any;
}) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-row mb-4 pb-4">
        {titles.map((item: any, index: number) => {
          //   console.log(item.dataIndex);
          return (
            <p
              className="mb-2 font-medium text-sm"
              style={{ minWidth: "10rem" }}
              key={index}
            >
              <span className="">{item.title}</span>
              {data
                .map((dataItem: any) => {
                  if (dataItem.original) {
                    return {
                      original: dataItem.original,
                      value: Object.entries(dataItem).filter(
                        (i) => i[0] === item.dataIndex
                      )[0][1],
                    };
                  } else {
                    return {
                      original: false,
                      value: Object.entries(dataItem).filter(
                        (i) => i[0] === item.dataIndex
                      )[0][1],
                    };
                  }
                })
                .map((d: any, index: number) => {
                  return (
                    <p
                      key={index}
                      className="font-normal pt-8"
                      style={{
                        color: `${(() => {
                          if (d.original === "original") {
                            return "#C4C4C4";
                          } else if (!d.original) {
                            return "#595959";
                          } else if (d.original === item.dataIndex) {
                            return "#595959";
                          } else {
                            return "#C4C4C4";
                          }
                        })()}`,
                      }}
                    >
                      {d.value}
                    </p>
                  );
                })}
            </p>
          );
        })}
      </div>
    </div>
  );
};
