// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoreVertIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoreVertIcon(props: MoreVertIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"currentColor"} fillOpacity={".2"} d={"M0 0h20v20H0z"}></path>

      <path
        d={
          "M10 15c.344 0 .638-.122.883-.367s.367-.54.367-.883c0-.344-.122-.638-.367-.883A1.204 1.204 0 0010 12.5c-.344 0-.638.122-.883.367a1.204 1.204 0 00-.367.883c0 .344.122.638.367.883S9.657 15 10 15zm0-3.75c.344 0 .638-.122.883-.367s.367-.54.367-.883c0-.344-.122-.638-.367-.883A1.204 1.204 0 0010 8.75c-.344 0-.638.122-.883.367s-.367.54-.367.883c0 .344.122.638.367.883s.54.367.883.367zm0-3.75c.344 0 .638-.122.883-.367s.367-.54.367-.883c0-.344-.122-.638-.367-.883A1.204 1.204 0 0010 5c-.344 0-.638.122-.883.367s-.367.54-.367.883c0 .344.122.638.367.883s.54.367.883.367z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MoreVertIcon;
/* prettier-ignore-end */
