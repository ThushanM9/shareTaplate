import React, { useEffect, useState } from "react";

interface tabProps {
  tabArr: Array<JSX.Element>;
  gridClass?: string;
  colClass?: string;
  disableIndexes?: number[] | null; //this is a ugly fix to disable some elements according to the data that is coming, in future lets fix this
}

function ScrollTabTemplate(props: tabProps) {
  const [arr, setarr] = useState<any>([]);

  useEffect(() => {
    setarr(() => {
      if (props.disableIndexes) {
        let x: any[] = [...props.tabArr];
        for (const item of props.disableIndexes) {
          x.splice(item, 1);
        }
        console.log("x", x);
        return x;
      } else {
        return props.tabArr;
      }
    });
  }, [props.tabArr, props.disableIndexes]);

  return (
    <>
      {arr.map((item: any, index: number) => {
        return props.tabArr.length - 1 === index ? (
          <div key={index} className={`${props.gridClass}`}>
            <div
              className={`${props.colClass}`}
              style={{ marginBottom: "55vh" }}
            >
              {item}
            </div>
          </div>
        ) : (
          <div key={index} className={`${props.gridClass}`}>
            <div className={`${props.colClass} mb-8 mt-4`}>{item}</div>
          </div>
        );
      })}
      {/* </div> */}
    </>
  );
}

export default ScrollTabTemplate;
