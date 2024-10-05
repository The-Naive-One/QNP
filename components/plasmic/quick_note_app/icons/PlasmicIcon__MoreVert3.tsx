// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoreVert3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoreVert3Icon(props: MoreVert3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18 30a2.889 2.889 0 01-2.119-.881A2.889 2.889 0 0115 27c0-.825.294-1.531.881-2.119A2.889 2.889 0 0118 24c.825 0 1.531.294 2.119.881.587.588.881 1.294.881 2.119 0 .825-.294 1.531-.881 2.119A2.889 2.889 0 0118 30zm0-9a2.889 2.889 0 01-2.119-.881A2.889 2.889 0 0115 18c0-.825.294-1.531.881-2.119A2.889 2.889 0 0118 15c.825 0 1.531.294 2.119.881.587.588.881 1.294.881 2.119 0 .825-.294 1.531-.881 2.119A2.889 2.889 0 0118 21zm0-9a2.889 2.889 0 01-2.119-.881A2.889 2.889 0 0115 9c0-.825.294-1.531.881-2.119A2.889 2.889 0 0118 6c.825 0 1.531.294 2.119.881C20.706 7.47 21 8.175 21 9c0 .825-.294 1.531-.881 2.119A2.889 2.889 0 0118 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MoreVert3Icon;
/* prettier-ignore-end */
