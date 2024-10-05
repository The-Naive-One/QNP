// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1Icon(props: Rectangle1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M7.94 0h4.297L4.432 14.882H0L7.94 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1Icon;
/* prettier-ignore-end */
