// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayArrowFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayArrowFilledIcon(props: PlayArrowFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.33 13.98c-.44-.355-.44-9.605 0-9.96C4.77 3.663 14 8.288 14 9c0 .711-9.23 5.336-9.67 4.98z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayArrowFilledIcon;
/* prettier-ignore-end */
