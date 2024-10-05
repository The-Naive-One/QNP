// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group13Icon(props: Group13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
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
          "M2.188 1.875a.312.312 0 00-.313.313v8.75c0 .172.14.312.313.312h6.25c.172 0 .312-.14.312-.313v-8.75a.312.312 0 00-.313-.312h-6.25zM0 2.188C0 .978.98 0 2.188 0h6.25c1.208 0 2.187.98 2.187 2.188v8.75c0 1.208-.98 2.187-2.188 2.187h-6.25A2.188 2.188 0 010 10.937v-8.75zm15.938-.313a.312.312 0 00-.313.313v3.75c0 .172.14.312.313.312h6.25c.172 0 .312-.14.312-.313v-3.75a.312.312 0 00-.313-.312h-6.25zm-2.188.313C13.75.978 14.73 0 15.938 0h6.25c1.208 0 2.187.98 2.187 2.188v3.75c0 1.208-.98 2.187-2.188 2.187h-6.25a2.188 2.188 0 01-2.187-2.188v-3.75zm2.188 10.937a.312.312 0 00-.313.313v8.75c0 .172.14.312.313.312h6.25c.172 0 .312-.14.312-.313v-8.75a.312.312 0 00-.313-.312h-6.25zm-2.188.313c0-1.209.98-2.188 2.188-2.188h6.25c1.208 0 2.187.98 2.187 2.188v8.75c0 1.208-.98 2.187-2.188 2.187h-6.25a2.188 2.188 0 01-2.187-2.188v-8.75zM2.188 18.125a.312.312 0 00-.313.313v3.75c0 .172.14.312.313.312h6.25c.172 0 .312-.14.312-.313v-3.75a.312.312 0 00-.313-.312h-6.25zM0 18.438c0-1.209.98-2.188 2.188-2.188h6.25c1.208 0 2.187.98 2.187 2.188v3.75c0 1.208-.98 2.187-2.188 2.187h-6.25A2.188 2.188 0 010 22.187v-3.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group13Icon;
/* prettier-ignore-end */
