// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GridSelectedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GridSelectedIcon(props: GridSelectedIconProps) {
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
          "M2 3a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 1v5h5V4H4zm9-1a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1V3zm2 1v5h5V4h-5zM2 14a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1v-7zm2 1v5h5v-5H4zm9-1a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7zm2 1v5h5v-5h-5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GridSelectedIcon;
/* prettier-ignore-end */
