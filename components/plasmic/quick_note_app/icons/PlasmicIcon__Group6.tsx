// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.186 27.844H1.548C.694 27.844 0 27.052 0 26.078V1.766C0 .792.694 0 1.548 0h7.558c.853 0 1.547.792 1.547 1.766v1.455c0 .171.123.311.274.311l10.458.056c.853 0 1.547.793 1.547 1.767v2.221c0 .402-.285.728-.637.728-.352 0-.638-.326-.638-.728V5.355c0-.172-.122-.312-.273-.312l-10.458-.056c-.853 0-1.548-.793-1.548-1.766V1.766c0-.172-.122-.312-.273-.312H1.548c-.15 0-.273.14-.273.312v24.312c0 .172.122.312.273.312h14.638c.351 0 .637.325.637.727 0 .402-.286.728-.637.728z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.374 27.792c-.352 0-.637-.325-.637-.727V9.059c0-.974.71-1.766 1.585-1.766h17.636c.874 0 1.585.792 1.585 1.766v5.071c0 .401-.285.727-.637.727-.352 0-.638-.325-.638-.727V9.06a.312.312 0 00-.311-.313H7.322c-.171 0-.31.14-.31.312v18.006c0 .401-.286.727-.638.727z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M22.218 28c-3.189 0-5.782-2.788-5.782-6.216 0-3.428 2.593-6.216 5.782-6.216 3.188 0 5.782 2.788 5.782 6.216C28 25.212 25.406 28 22.218 28zm0-11.062c-2.485 0-4.508 2.174-4.508 4.846s2.022 4.846 4.508 4.846c2.485 0 4.507-2.174 4.507-4.846s-2.022-4.846-4.507-4.846z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M22.172 25.874c-.352 0-.637-.325-.637-.727v-6.65c0-.401.285-.727.637-.727.352 0 .638.325.638.727v6.65c0 .401-.286.727-.638.727z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M25.906 22.526h-7.012c-.352 0-.637-.325-.637-.727 0-.403.285-.728.637-.728h7.012c.352 0 .637.325.637.727 0 .403-.285.728-.637.728z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
