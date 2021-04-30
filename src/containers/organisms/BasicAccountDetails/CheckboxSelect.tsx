import React from "react";

interface cProps {
  box: JSX.Element;
  select: JSX.Element;
}

function CheckboxSelect(props: cProps) {
  return (
    <div className="mt-4 flex align-middle justify-between">
      {props.box}
      {props.select}
    </div>
  );
}

export default CheckboxSelect;
