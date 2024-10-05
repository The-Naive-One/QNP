// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoreVert2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoreVert2Icon(props: MoreVert2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16 26.667a2.568 2.568 0 01-1.883-.784A2.568 2.568 0 0113.333 24c0-.733.261-1.361.784-1.883A2.568 2.568 0 0116 21.333c.733 0 1.361.261 1.883.784.523.522.784 1.15.784 1.883 0 .733-.261 1.361-.784 1.883a2.568 2.568 0 01-1.883.784zm0-8a2.568 2.568 0 01-1.883-.784A2.568 2.568 0 0113.333 16c0-.733.261-1.361.784-1.883A2.568 2.568 0 0116 13.333c.733 0 1.361.261 1.883.784.523.522.784 1.15.784 1.883 0 .733-.261 1.361-.784 1.883a2.568 2.568 0 01-1.883.784zm0-8a2.568 2.568 0 01-1.883-.784A2.568 2.568 0 0113.333 8c0-.733.261-1.361.784-1.883A2.568 2.568 0 0116 5.333c.733 0 1.361.261 1.883.784.523.522.784 1.15.784 1.883 0 .733-.261 1.361-.784 1.883a2.568 2.568 0 01-1.883.784z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MoreVert2Icon;
/* prettier-ignore-end */
