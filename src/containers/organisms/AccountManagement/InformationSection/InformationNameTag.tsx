import React from "react";

interface nameProps {
  name: string | JSX.Element;
  info: string;
}

function InformationNameTag(props: nameProps) {
  return (
    <div className='flex  text-xs mb-2'>
      <p
        className='w-1/2 flex  justify-between text-sm'
        // style={{ minWidth: "5.4vw" }}
      >
        <span>{props.name}</span> <span>:</span>
      </p>

      <p className='text-left pl-2 text-sm'>{props.info}</p>
    </div>
  );
}

export default InformationNameTag;
