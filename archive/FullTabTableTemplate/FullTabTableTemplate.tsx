import React from "react";
import TabTableButtons from "./TabTableButtons";

interface tempProps {
  table: JSX.Element;
}

function FullTabTableTemplate(props: tempProps) {
  return (
    <div className="bg-white h-full p-4">
      <div className="relative  h-full flex flex-col">
        <TabTableButtons />
        <div className="pr-2 pl-2 mt-4 h-full">{props.table}</div>
      </div>
    </div>
  );
}

export default FullTabTableTemplate;
