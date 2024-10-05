// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle2Icon(props: Rectangle2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M7.2 0h2.836L2.958 14.882H0L7.2 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle2Icon;
/* prettier-ignore-end */
