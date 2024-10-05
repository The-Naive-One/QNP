// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HorizontalInset2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HorizontalInset2Icon(props: HorizontalInset2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1046 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeOpacity={".5"}
        d={"M0 .5h1046"}
      ></path>
    </svg>
  );
}

export default HorizontalInset2Icon;
/* prettier-ignore-end */
