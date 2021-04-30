import React from "react";
import Ptag from "../../atoms/Ptag.atom";

interface inputProps {
  title: string | JSX.Element;
  input: JSX.Element;
  label?: string | JSX.Element;
  className?: string;
  // disabled?:boolean
}

function InputContainer(props: inputProps) {
  let inputContainerClass = props.className
    ? `${props.className}`
    : "mb-6 mt-4";
  return (
    <div className={inputContainerClass}>
      <Ptag title={props.title}></Ptag>
      {props.input}
      <p className="text-xxxs" style={{ color: "#8C8C8C" }}>
        {props.label}
      </p>
    </div>
  );
}

export default InputContainer;
