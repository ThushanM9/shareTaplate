import React from "react";
export const CardTemplate = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <div className="border rounded py-3 px-3 mb-2 ">
    <p className="font-bold text-xs">{title}</p>
    <div className="my-1">{children}</div>
  </div>
);
//
