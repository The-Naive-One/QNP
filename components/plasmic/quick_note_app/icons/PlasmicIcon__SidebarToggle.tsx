// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SidebarToggleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SidebarToggleIcon(props: SidebarToggleIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M3.375 10.5A4.125 4.125 0 017.5 6.375h21a4.125 4.125 0 014.125 4.125v15a4.125 4.125 0 01-4.125 4.125h-21A4.125 4.125 0 013.375 25.5v-15zM7.5 8.625h7.875v18.75H7.5A1.876 1.876 0 015.625 25.5v-15c0-1.035.84-1.875 1.875-1.875zm10.125 0v18.75H28.5c1.035 0 1.875-.84 1.875-1.875v-15c0-1.035-.84-1.875-1.875-1.875H17.625zM9 10.875a1.125 1.125 0 100 2.25h3a1.125 1.125 0 100-2.25H9zM7.875 15.75A1.125 1.125 0 019 14.625h3a1.125 1.125 0 110 2.25H9a1.125 1.125 0 01-1.125-1.125zM9 18.375a1.125 1.125 0 100 2.25h3a1.125 1.125 0 100-2.25H9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SidebarToggleIcon;
/* prettier-ignore-end */
