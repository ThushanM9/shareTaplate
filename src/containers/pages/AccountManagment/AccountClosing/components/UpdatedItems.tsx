import React from "react";
import { switchComponent } from "./ChangesHolder";

export const UpdatedItems = ({ data }: { data: any }) => {
  return (
    <div
      className="border shadow-xs rounded-md pt-6 px-6"
      style={{ background: "#F3F3F3" }}
    >
      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(auto-fit,220px)" }}
      >
        {data?.map((item: any, index: number) => {
          return (
            <div key={index} className="mr-10">
              <p
                className="mb-2 font-medium text-sm"
                style={{ color: "#262626" }}
              >
                {item.title}
              </p>
              {item.type ? (
                switchComponent(item)
              ) : (
                <p className="text-sm mb-6" style={{ color: "#595959" }}>
                  {item.details ? item.details : "-"}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
