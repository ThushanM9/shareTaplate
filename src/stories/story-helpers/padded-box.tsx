import React from "react";

/**
 * ## Adds a Padding to the frame
 */
export const PaddedBox = (props: {
  children: any;
  /**
   * Padding size in px
   */
  size?: number;
}) => (
  <div style={{ padding: `${props.size || "30"}px` }}>{props.children}</div>
);
