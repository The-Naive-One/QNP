// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ListDefaultIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ListDefaultIcon(props: ListDefaultIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2 6a1 1 0 011-1h.01a1 1 0 010 2H3a1 1 0 01-1-1zm5 0a1 1 0 011-1h13a1 1 0 110 2H8a1 1 0 01-1-1zm-5 6a1 1 0 011-1h.01a1 1 0 110 2H3a1 1 0 01-1-1zm5 0a1 1 0 011-1h13a1 1 0 110 2H8a1 1 0 01-1-1zm-5 6a1 1 0 011-1h.01a1 1 0 110 2H3a1 1 0 01-1-1zm5 0a1 1 0 011-1h13a1 1 0 110 2H8a1 1 0 01-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ListDefaultIcon;
/* prettier-ignore-end */
