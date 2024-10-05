// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogOutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogOutIcon(props: LogOutIconProps) {
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
          "M6.343 5.455a.889.889 0 00-.888.888v11.314a.889.889 0 00.888.889h5.253a.727.727 0 010 1.454H6.343A2.343 2.343 0 014 17.657V6.343A2.343 2.343 0 016.343 4h5.253a.727.727 0 010 1.455H6.343zm8.375 1.99a.727.727 0 011.029 0l4.04 4.04a.727.727 0 010 1.03l-4.04 4.04a.727.727 0 11-1.029-1.029l2.799-2.799H9.576a.727.727 0 010-1.454h7.94l-2.798-2.8a.727.727 0 010-1.028z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogOutIcon;
/* prettier-ignore-end */
